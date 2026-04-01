"use client";

import Image from "next/image";

export default function CRMCliente() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen pb-32 overflow-x-hidden selection:bg-primary-container selection:text-white">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 glass-header flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto left-0 right-0">
        <div className="flex items-center gap-4">
          <a href="/admin/clientes" className="material-symbols-outlined text-[#7a5642] cursor-pointer hover:opacity-80 transition-opacity active:scale-95 duration-200 inline-block">
            arrow_back
          </a>
          <h1 className="font-headline font-bold tracking-tight text-[#7a5642] text-lg">Perfil do Cliente</h1>
        </div>
        <div className="flex items-center">
          <button className="material-symbols-outlined text-[#7a5642] cursor-pointer hover:opacity-80 transition-opacity active:scale-95 duration-200">
            more_vert
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto space-y-16 animate-fade-in">
        
        {/* Hero / VIP Header Section */}
        <section className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-[6px] border-surface-container-lowest shadow-[0_12px_40px_rgba(220,174,150,0.2)]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Portrait" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMlvO-Io9EBmVHLk_AVH05ZgSt4jzW_6Wh9yBrg3dLuNw-W0x8L6rhl1PzRF8i9XaBU9CdDAZwK3sh7obBb4QheFOp9QS5pFxWcfOrUpz31OTyjXuYPCYDuhjHik0qvL6O_a4QBMj5w1fKs1371slnIp4VSnUqAjraE5MQGxBIQiXNYCfFXK6rP1uQDYRiUIcNnnjV0_pA012Wb6mUVaHyAIqDUYQi3K-KvU3Bhmd7Xb4K8AQ0uXlBYv5gVkAd3M4d_kD01RKQizaw"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 rose-gold-gradient p-2.5 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
            
            <div className="space-y-1 flex-grow">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-headline text-3xl font-extrabold text-[#4F4F4F] tracking-tight">Helena Cavalcanti</h2>
                <span className="rose-gold-gradient text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">VIP CLIENTE</span>
              </div>
              <p className="text-on-surface-variant font-medium text-sm">ID: #ST-8829 • Cliente desde Jan 2023</p>
              
              <div className="flex gap-4 pt-3">
                <div className="bg-surface-container-lowest px-4 py-2 rounded-xl shadow-[0_4px_15px_rgba(122,86,66,0.05)] border border-outline-variant/30 transition-transform hover:-translate-y-1 duration-300">
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Última Visita</p>
                  <p className="text-[#a37c69] font-bold">12 Out, 2023</p>
                </div>
                <div className="bg-surface-container-lowest px-4 py-2 rounded-xl shadow-[0_4px_15px_rgba(122,86,66,0.05)] border border-outline-variant/30 transition-transform hover:-translate-y-1 duration-300">
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Créditos</p>
                  <p className="text-[#a37c69] font-bold">R$ 450,00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Dados e Preferências */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Dados Pessoais */}
          <section className="md:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-xl font-bold text-[#4F4F4F]">Dados Pessoais</h3>
              <button className="text-[#a37c69] text-sm font-semibold cursor-pointer hover:underline underline-offset-4 transition-all">Editar</button>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_12px_40px_rgba(122,86,66,0.04)] space-y-6 border border-outline-variant/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5 group">
                  <label className="text-[11px] font-bold text-[#4F4F4F] uppercase tracking-wider block group-hover:text-[#a37c69] transition-colors">E-mail</label>
                  <div className="text-on-surface-variant font-medium p-3 bg-surface-container-low rounded-lg border border-transparent group-hover:border-outline-variant/50 transition-colors">helena.c@email.com</div>
                </div>
                <div className="space-y-1.5 group">
                  <label className="text-[11px] font-bold text-[#4F4F4F] uppercase tracking-wider block group-hover:text-[#a37c69] transition-colors">Telefone</label>
                  <div className="text-on-surface-variant font-medium p-3 bg-surface-container-low rounded-lg border border-transparent group-hover:border-outline-variant/50 transition-colors">+55 (11) 98822-1029</div>
                </div>
                <div className="space-y-1.5 group">
                  <label className="text-[11px] font-bold text-[#4F4F4F] uppercase tracking-wider block group-hover:text-[#a37c69] transition-colors">Nascimento</label>
                  <div className="text-on-surface-variant font-medium p-3 bg-surface-container-low rounded-lg border border-transparent group-hover:border-outline-variant/50 transition-colors">15 / 04 / 1985</div>
                </div>
                <div className="space-y-1.5 group">
                  <label className="text-[11px] font-bold text-[#4F4F4F] uppercase tracking-wider block group-hover:text-[#a37c69] transition-colors">Profissão</label>
                  <div className="text-on-surface-variant font-medium p-3 bg-surface-container-low rounded-lg border border-transparent group-hover:border-outline-variant/50 transition-colors">Arquiteta</div>
                </div>
              </div>
              
              <div className="space-y-1.5 pt-2">
                <label className="text-[11px] font-bold text-[#4F4F4F] uppercase tracking-wider block flex items-center gap-1 text-[#c86161]">
                  <span className="material-symbols-outlined text-[14px]">warning</span>
                  Observações Clínicas
                </label>
                <div className="text-on-surface-variant font-medium p-4 bg-error-container/30 rounded-lg leading-relaxed border border-[#c86161]/10">
                  Pele sensível com tendência a rosácea. Alérgica a compostos derivados de iodo. Prefere fragrâncias neutras durante os procedimentos.
                </div>
              </div>
            </div>
          </section>

          {/* Preferências & Tags */}
          <section className="md:col-span-5 space-y-6">
            <h3 className="font-headline text-xl font-bold text-[#4F4F4F]">Preferências</h3>
            <div className="bg-surface-container-low p-8 rounded-2xl space-y-8 border border-outline-variant/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              
              <div>
                <p className="text-[11px] font-bold text-[#4F4F4F] uppercase tracking-widest mb-4 flex items-center gap-1">
                   <span className="material-symbols-outlined text-[14px] text-[#a37c69]">favorite</span> Serviços Favoritos
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#dcae96]/20 text-[#7a5642] rounded-full text-xs font-bold ring-1 ring-[#dcae96]/30">Botox Premium</span>
                  <span className="px-3 py-1.5 bg-[#dcae96]/20 text-[#7a5642] rounded-full text-xs font-bold ring-1 ring-[#dcae96]/30">Peeling Químico</span>
                  <span className="px-3 py-1.5 bg-white border border-outline-variant text-on-surface-variant rounded-full text-xs font-bold shadow-sm">Drenagem</span>
                </div>
              </div>
              
              <div>
                <p className="text-[11px] font-bold text-[#4F4F4F] uppercase tracking-widest mb-4">Atendentes Preferidos</p>
                <div className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/30 shadow-sm cursor-pointer hover:border-[#dcae96]/40 transition-colors">
                  <img className="w-12 h-12 rounded-full object-cover" alt="Dra. Mariana Silva" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClIhOkabMK55GprMcYowMfo5chvBtElLhJXFFQdzb9z2UptaEAB5LmOTtFKrYZkMuGWW9gHsxR47P6UrTU-9ovaCdew2b3o_QV5f-5Rf4twNBASetrWLT8kBPCzN6B4UNY21CRJr6Egf5KUVqAF8JQ3GHRtjkMDLuCo5fY3Q6HNf4Ie9ciHAVPiy3aGH2na8dPYJ5ewcUaamrp8j4ky4bT-d06NvcivbubXUFxVtGTr6_e1q1zqBX4KYwHek7F5nASlNIhBuB2nEiO"/>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#4F4F4F]">Dra. Mariana Silva</span>
                    <span className="text-[10px] font-semibold text-[#a37c69] uppercase tracking-wider">Especialista Facial</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/30">
                <button className="w-full rose-gold-gradient text-white font-bold py-3.5 px-6 rounded-full text-sm shadow-[0_8px_20px_rgba(220,174,150,0.3)] active:scale-95 transition-transform hover:shadow-[0_12px_25px_rgba(220,174,150,0.4)]">
                  Agendar Novo Procedimento
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Histórico de Serviços */}
        <section className="space-y-6 relative z-10">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-xl font-bold text-[#4F4F4F]">Histórico Clínico</h3>
            <button className="p-2 bg-surface-container-lowest shadow-sm rounded-lg hover:bg-surface-container-low transition-colors border border-outline-variant/40 flex items-center gap-1 px-3">
              <span className="material-symbols-outlined text-[#7a5642] text-sm">filter_list</span>
              <span className="text-xs font-bold text-[#7a5642] uppercase tracking-widest hidden sm:inline">Filtrar</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Timeline Item 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 border-l-[6px] border-[#dcae96] shadow-[0_8px_30px_rgba(122,86,66,0.03)] hover:-translate-y-1 transition-transform duration-300">
              <div className="min-w-[120px]">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">12 Out 2023</p>
                <p className="text-sm font-medium text-secondary">14:30h</p>
              </div>
              <div className="flex-grow space-y-1">
                <h4 className="font-bold text-[#4F4F4F] text-lg">Aplicação de Toxina Botulínica - Full Face</h4>
                <p className="text-sm text-on-surface-variant">Realizado por Dra. Mariana Silva • Sala 04 VIP</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-lg font-bold text-[#7a5642]">R$ 1.800,00</p>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase ring-1 ring-emerald-200">Pago</span>
                </div>
                <span className="material-symbols-outlined text-[#dcae96] cursor-pointer hover:translate-x-1 transition-transform">chevron_right</span>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 border-l-[6px] border-outline-variant shadow-[0_8px_30px_rgba(122,86,66,0.03)] hover:-translate-y-1 transition-transform duration-300">
              <div className="min-w-[120px]">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">28 Set 2023</p>
                <p className="text-sm font-medium text-secondary">09:00h</p>
              </div>
              <div className="flex-grow space-y-1">
                <h4 className="font-bold text-[#4F4F4F] text-lg">Limpeza de Pele Profunda + Hidratação</h4>
                <p className="text-sm text-on-surface-variant">Realizado por Esteticista Julia Costa • Sala 02</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-lg font-bold text-[#7a5642]">R$ 350,00</p>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase ring-1 ring-emerald-200">Pago</span>
                </div>
                <span className="material-symbols-outlined text-[#dcae96] cursor-pointer hover:translate-x-1 transition-transform">chevron_right</span>
              </div>
            </div>
          </div>
        </section>

        {/* Arquivos e Documentos */}
        <section className="space-y-6">
          <h3 className="font-headline text-xl font-bold text-[#4F4F4F]">Prontuário & Arquivos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-surface-container-low p-5 rounded-2xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-3 hover:bg-[#dcae96]/5 transition-colors cursor-pointer group hover:border-[#dcae96]/30">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#dcae96]">add</span>
              </div>
              <p className="text-[10px] font-bold text-[#7a5642] uppercase tracking-widest text-center">Ficha / Termo</p>
            </div>
            
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.04)] flex items-center gap-4 border border-outline-variant/30 hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-[#dcae96]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#7a5642]">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-[#4F4F4F] truncate">Anamnese_Focial.pdf</p>
                <p className="text-[10px] text-on-surface-variant font-medium">2.4 MB • 15 Jan 2023</p>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.04)] flex items-center gap-4 border border-outline-variant/30 hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-[#dcae96]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#7a5642]">
                <span className="material-symbols-outlined">image</span>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-[#4F4F4F] truncate">Antes_Botox_Out23.jpg</p>
                <p className="text-[10px] text-on-surface-variant font-medium">4.1 MB • 12 Out 2023</p>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.04)] flex items-center gap-4 border border-outline-variant/30 hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-[#dcae96]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#7a5642]">
                <span className="material-symbols-outlined">history_edu</span>
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-[#4F4F4F] truncate">Termo_Toxina.pdf</p>
                <p className="text-[10px] text-on-surface-variant font-medium">1.1 MB • 12 Out 2023</p>
              </div>
            </div>
            
          </div>
        </section>

      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 glass-header z-50 rounded-t-[2rem] md:hidden">
        <a href="/admin/agenda" className="flex flex-col items-center justify-center text-stone-400 px-5 py-2 scale-90 active:duration-200 hover:text-[#dcae96] transition-colors">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Agenda</span>
        </a>
        <a href="/admin/clientes" className="flex flex-col items-center justify-center bg-orange-100/50 text-[#7a5642] rounded-full px-5 py-2 scale-90 active:duration-200 transition-colors shadow-inner">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Clientes</span>
        </a>
        <a href="/admin/servicos" className="flex flex-col items-center justify-center text-stone-400 px-5 py-2 scale-90 active:duration-200 hover:text-[#dcae96] transition-colors">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Serviços</span>
        </a>
      </nav>
    </div>
  );
}
