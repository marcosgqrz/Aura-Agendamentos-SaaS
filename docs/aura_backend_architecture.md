# Arquitetura de Backend: Aura Agendamentos (SaaS)

Este documento define a fundação técnica do projeto Aura Agendamentos, garantindo alta performance, segurança, processamento financeiro confiável e um design escalável Multi-Tenant.

## 1. Stack Tecnológica e Infraestrutura

- **Framework Web**: **NestJS (TypeScript)**. Com sua abordagem modular, Injeção de Dependências e suporte nativo a arquiteturas baseadas em serviços e microserviços.
- **Banco de Dados**: **PostgreSQL** manipulado via **Prisma ORM**. Focado em integridade relacional, consistência transacional forte (ACID) - vital para o módulo financeiro.
- **Cache e Real-time**: **Redis**. Usado como store para o Socket.io (sincronização de agendas inter-clínicas), rate-limiting, gerenciamento de WebSockets (para a Home e PWA) e controle de travas temporárias (Soft Locks).
- **Filas e Assincronismo**: **BullMQ** (apoiado no Redis) para gerenciar o agendamento de tarefas pesadas, como o envio de notificações de SMS, WhatsApp, Webhooks e disparos de e-mail de estoque baixo.

---

## 2. Modelagem de Dados e Schema (Prisma ORM)

Para suportar o formato de **SaaS**, a arquitetura implementa o conceito de Multi-Tenant através do campo `tenantId` (Id da clínica) em todas as tabelas.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// -------------------------------------------------------------------
// MULTI-TENANT & AUTENTICAÇÃO
// -------------------------------------------------------------------

model Tenant {
  id        String   @id @default(uuid())
  nome      String
  cnpj      String?  @unique
  createdAt DateTime @default(now())

  usuarios      Usuario[]
  servicos      Servico[]
  profissionais Profissional[]
  agendamentos  Agendamento[]
  estoque       ProdutoEstoque[]
  transacoes    Transacao[]
}

model Usuario {
  id        String   @id @default(uuid())
  tenantId  String
  tenant    Tenant   @relation(fields: [tenantId], references: [id])
  nome      String
  email     String   @unique
  senha     String   // Hash bcrypt
  role      Role     @default(CLIENTE) 
  
  clienteProfile      Cliente?
  profissionalProfile Profissional?
}

enum Role {
  ADMIN
  PROFISSIONAL
  CLIENTE
}

// -------------------------------------------------------------------
// ENTIDADES DE NEGÓCIO CORE
// -------------------------------------------------------------------

model Cliente {
  id        String  @id @default(uuid())
  usuarioId String  @unique
  usuario   Usuario @relation(fields: [usuarioId], references: [id])
  telefone  String?
  
  agendamentos Agendamento[]
  vouchers     VoucherPaciente[]
}

model Profissional {
  id          String   @id @default(uuid())
  tenantId    String
  tenant      Tenant   @relation(fields: [tenantId], references: [id])
  usuarioId   String   @unique
  usuario     Usuario  @relation(fields: [usuarioId], references: [id])
  senioridade String   // EX: JUNIOR, PLENO, SENIOR (usado no Split de Pagamento)
  
  gradeHorarios Json?  // Escala semanal, horários de almoço, folgas

  servicos     ProfissionalServico[]
  agendamentos Agendamento[]
}

model Servico {
  id              String   @id @default(uuid())
  tenantId        String
  tenant          Tenant   @relation(fields: [tenantId], references: [id])
  nome            String
  preco           Decimal  @db.Decimal(10, 2)
  duracaoMin      Int      // Ex: 60 minutos
  tempoLimpezaMin Int      // Ex: 15 minutos (intervalo obrigatório)
  
  profissionais     ProfissionalServico[]
  agendamentos      Agendamento[]
  insumosNecessarios FichaTecnicaServico[]
}

model ProfissionalServico { // Tabela Pivot
  profissionalId String
  profissional   Profissional @relation(fields: [profissionalId], references: [id])
  servicoId      String
  servico        Servico      @relation(fields: [servicoId], references: [id])
  @@id([profissionalId, servicoId])
}

// -------------------------------------------------------------------
// AGENDAMENTOS E OPERAÇÃO
// -------------------------------------------------------------------

model Agendamento {
  id             String   @id @default(uuid())
  tenantId       String
  tenant         Tenant   @relation(fields: [tenantId], references: [id])
  
  clienteId      String
  cliente        Cliente  @relation(fields: [clienteId], references: [id])
  
  profissionalId String
  profissional   Profissional @relation(fields: [profissionalId], references: [id])
  
  servicoId      String
  servico        Servico      @relation(fields: [servicoId], references: [id])
  
  status         StatusAgendamento @default(PENDENTE)
  dataHoraInicio DateTime
  dataHoraFim    DateTime // Calculado via: Inicio + duracaoMin + tempoLimpezaMin
  
  createdAt      DateTime @default(now())
  
  transacao      Transacao?
}

enum StatusAgendamento {
  PENDENTE
  CONFIRMADO
  EM_ATENDIMENTO
  CONCLUIDO
  CANCELADO
}

// -------------------------------------------------------------------
// ESTOQUE E FICHA TÉCNICA
// -------------------------------------------------------------------

model ProdutoEstoque {
  id             String   @id @default(uuid())
  tenantId       String
  tenant         Tenant   @relation(fields: [tenantId], references: [id])
  nome           String
  quantidadeAtual Decimal
  pontoDePedido  Decimal
  unidadeMedida  String   // Ex: ML, G, UNIDADE
  
  fichaTecnica   FichaTecnicaServico[]
}

model FichaTecnicaServico {
  servicoId String
  servico   Servico @relation(fields: [servicoId], references: [id])
  produtoId String
  produto   ProdutoEstoque @relation(fields: [produtoId], references: [id])
  
  quantidadeNecessaria Decimal // Quanto abate do estoque ao concluir
  @@id([servicoId, produtoId])
}

// -------------------------------------------------------------------
// MÓDULO FINANCEIRO
// -------------------------------------------------------------------

model Transacao {
  id                   String   @id @default(uuid())
  tenantId             String
  tenant               Tenant   @relation(fields: [tenantId], references: [id])
  agendamentoId        String   @unique
  agendamento          Agendamento @relation(fields: [agendamentoId], references: [id])
  
  valorTotal           Decimal @db.Decimal(10, 2)
  taxaInsumosAdmin     Decimal @db.Decimal(10, 2)
  comissaoProfissional Decimal @db.Decimal(10, 2)
  lucroLiquidoClinica  Decimal @db.Decimal(10, 2)
  
  statusPagamento      StatusPagamento @default(PENDENTE)
  metodoPagamento      MetodoPagamento
  
  createdAt            DateTime @default(now())
}

model VoucherPaciente {
  id              String   @id @default(uuid())
  clienteId       String
  cliente         Cliente  @relation(fields: [clienteId], references: [id])
  sessoesFechadas Int
  sessoesUsadas   Int      @default(0)
  servico_alvo    String   // Ref de qual servico o pacote cobre
}

enum StatusPagamento { PENDENTE, PAGO, ESTORNADO }
enum MetodoPagamento { DINHEIRO, CARTAO_CREDITO, CARTAO_DEBITO, PIX, VOUCHER }
```

---

## 3. Lógica do Core Engine (Regras de Negócio)

### 3.1 Motor de Disponibilidade e Drag-and-Drop (Grelha)
- **Consulta via Intersecção**: A API fará requisições filtrando a agenda pela verificação se o _slot solicitado_ (`inicio_solicitado` e `fim_calculado`) conflita com algum `dataHoraInicio` ou `dataHoraFim` existente na tabela `Agendamento` ou com blocos da `gradeHorarios` (Indisponibilidade).
- **Soft Lock (Reserva Temporária)**: Ao cliente clicar no agendamento na Home, uma chave expirável de 5 minutos é salva no **Redis** `(SET EX 300 lock:agendamento:profissionalId:horario)`. Se a chave existir, outro cliente não vê o horário. Se o checkout for concluído, cai no PostgreSQL; se não for, o lock do Redis expira automaticamente, voltando à disponibilidade.

### 3.2 Notification Triggers (Mensageria BullMQ)
O NestJS utiliza Workers para não travar a API. Ao confirmar um agendamento:
1. Envia Job immediato: "Notificação de Reserva" (SMS/Whatsapp).
2. Agenda Job em atraso (Delay): 24h previas usando calculo `dataHoraInicio - 24 horas`.
3. Agenda Job em atraso (Delay): 2h previas `dataHoraInicio - 2 horas`.
Se o agendamento for cancelado/remarcado, usamos o ID do job para localizá-lo na fila do BullMQ e cancelá-lo ou substituí-lo.

### 3.3 Motor Financeiro e Split de Pagamentos
Implementado em uma transação do banco (`$transaction` no Prisma) durante o fechamento:
- Recupera a Senioridade do profissional acoplado e o cadastro do Serviço.
- Utiliza a regra do sistema (ex: Júnior=30%, Sênior=40%) aplicável sobre o (Valor Total - Taxas/Insumos) ou Valor Bruto, salvando as margens diretamente nas colunas `comissaoProfissional` e `lucroLiquidoClinica` na tabela Transação.
- **Caso Voucher:** Se for pacote, a Transação não processa cartão via gateway, aciona o método que debita `sessoesUsadas` no pacote do cliente.

### 3.4 Baixa de Insumos Automática (Estoque Mínimo)
A tabela `FichaTecnicaServico` dita a composição (receita) do serviço.
Quando uma Mutation de alteração de status (`CONCLUIDO`) ocorrer:
1. O Observer/Interceptor do NestJS busca a composição em ingredientes.
2. Atrasa os montantes na tabela `ProdutoEstoque`.
3. Checa: `SE quantidadeAtual <= pontoDePedido` -> Dispara Evento de Estoque Mínimo no EventEmitter do Nest, enfileirando um e-mail para a Administração (via BullMQ/SendGrid).

---

## 4. Segurança, Interoperabilidade e Padrões de Projeto

- **Autenticação Multi-Camadas**: Implementação do módulo `@nestjs/jwt` com `@nestjs/passport`. A Strategy avalia o Enum `Role` do Usuário. Guards e Decorators dedicados limitam rotas. A flag do TenantId garante que a Clínica A não verá os registros da Clínica B via escopo de Row-Level Security (isolamento lógico da query).
- **Documentação e Interoperabilidade**: O `@nestjs/swagger` processa automaticamente os DTOs (Data Transfer Objects) tipados para expor a Swagger UI. Integrado a parceiros como CRMs, Zapiers e Roteadores.
- **Isolamento de Tenant**: Todo Repository ou Service obriga a passagem do `tenantId` retirado do Payload do Token JWT.
