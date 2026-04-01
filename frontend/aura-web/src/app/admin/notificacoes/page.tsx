"use client";

import Image from "next/image";

export default function Notificacoes() {
  return (
    <div className="bg-surface font-body text-on-surface-variant min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 glass-header flex items-center px-6 h-16 w-full max-w-7xl mx-auto left-0 right-0">
        <div className="flex items-center gap-4">
          <a href="/admin" className="material-symbols-outlined text-[#7a5642] cursor-pointer active:scale-95 duration-200 hover:opacity-80">
            arrow_back
          </a>
          <h1 className="font-headline font-bold tracking-tight text-lg text-[#7a5642]">Notificações</h1>
        </div>
      </header>

      <main className="pt-24 px-6 space-y-8 max-w-3xl mx-auto animate-fade-in">
        {/* Editorial Header Section */}
        <div className="py-2">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-[#a37c69] mb-2 block font-bold">Centro de Alertas</span>
          <h2 className="font-headline text-3xl font-extrabold text-[#4F4F4F] leading-tight tracking-tighter">
            Fique por dentro das novidades.
          </h2>
        </div>

        {/* Notifications List */}
        <div className="space-y-6">
          
          {/* Category: Today */}
          <div className="pt-2">
            <p className="font-label text-[11px] font-bold text-[#7a5642] uppercase tracking-widest mb-4">Hoje</p>
            
            <div className="space-y-4">
              {/* Notification Card: Novo Agendamento */}
              <div className="bg-surface-container-lowest rounded-2xl p-5 flex gap-4 shadow-[0_4px_20px_rgba(122,86,66,0.03)] border border-outline-variant/30 hover:border-[#dcae96]/50 transition-colors relative overflow-hidden group cursor-pointer">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#dcae96]"></div>
                <div className="w-12 h-12 rounded-full rose-gold-gradient flex items-center justify-center flex-shrink-0 text-white shadow-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_add_on</span>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-headline text-sm font-bold text-[#4F4F4F] tracking-tight group-hover:text-[#a37c69] transition-colors">Novo Agendamento VIP</h3>
                  <p className="text-xs leading-relaxed mt-1 text-on-surface-variant">Sessão de Harmonização Facial confirmada com sucesso.</p>
                  <span className="text-[10px] text-[#a37c69] mt-2 font-bold tracking-wider">10:45 AM</span>
                </div>
              </div>

              {/* Notification Card: Promoção VIP */}
              <div className="bg-[linear-gradient(45deg,#ffffff,#fdfaf8)] rounded-2xl p-5 flex gap-4 shadow-[0_8px_30px_rgba(220,174,150,0.08)] border border-[#dcae96]/30 relative overflow-hidden cursor-pointer group hover:shadow-[0_12px_40px_rgba(220,174,150,0.15)] transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#dcae96] rounded-full blur-[60px] opacity-10 pointer-events-none"></div>
                <div className="w-12 h-12 rounded-full border border-[#dcae96] bg-white flex items-center justify-center flex-shrink-0 text-[#7a5642] shadow-inner group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                </div>
                <div className="flex flex-col justify-center relative z-10">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline text-sm font-bold text-[#4F4F4F] tracking-tight group-hover:text-[#a37c69] transition-colors">Aviso Premium</h3>
                    <span className="bg-[#dcae96] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">Sistema</span>
                  </div>
                  <p className="text-xs leading-relaxed mt-1 text-on-surface-variant font-medium">Split de comissão da Dra. Mariana processado com sucesso. (R$ 450,00).</p>
                  <span className="text-[10px] text-[#a37c69] mt-2 font-bold tracking-wider">08:30 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category: Earlier */}
          <div className="pt-4">
            <p className="font-label text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-4">Ontem</p>
            
            <div className="space-y-4">
              {/* Notification Card: Alerta de Estoque */}
              <div className="bg-surface-container-lowest rounded-2xl p-5 flex gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-outline-variant/20 hover:border-[#c86161]/30 transition-colors relative overflow-hidden cursor-pointer group">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#c86161]"></div>
                <div className="w-12 h-12 rounded-full bg-error-container/50 border border-[#c86161]/20 flex items-center justify-center flex-shrink-0 text-[#c86161] group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined">inventory_2</span>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-headline text-sm font-bold text-[#4F4F4F] tracking-tight group-hover:text-[#c86161] transition-colors">Alerta de Estoque Crítico</h3>
                  <p className="text-xs leading-relaxed mt-1 text-on-surface-variant">Atenção: Ácido Hialurônico 50ml está com apenas 02 unidades restantes.</p>
                  <span className="text-[10px] text-on-surface-variant/60 mt-2 font-bold tracking-wider">11:20 AM</span>
                </div>
              </div>

              {/* Notification Card: Lembrete */}
              <div className="bg-surface-container-lowest opacity-70 rounded-2xl p-5 flex gap-4 shadow-sm border border-outline-variant/20 hover:opacity-100 transition-opacity cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-surface-container-low border border-outline-variant/50 flex items-center justify-center flex-shrink-0 text-[#4F4F4F]">
                  <span className="material-symbols-outlined">alarm</span>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-headline text-sm font-bold text-on-surface-variant tracking-tight group-hover:text-[#4F4F4F] transition-colors">Lembrete do Sistema</h3>
                  <p className="text-xs leading-relaxed mt-1 text-on-surface-variant">Backup diário do banco de dados (PostgreSQL) concluído.</p>
                  <span className="text-[10px] text-on-surface-variant/60 mt-2 font-bold tracking-wider">23:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-[2rem] overflow-hidden mt-8 group shadow-[0_12px_40px_rgba(122,86,66,0.1)]">
          <img 
            alt="Novo Protocolo" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1c4jOWqD4Afsqf6ZM59ZPo1emw-7uxyPU87a4468MJumO2Wfp8coaJwGLI8AJk-uyDhbkiNhUIoVBUGxVXNlSZZPpzQnibuGBzQ3anBgdm7pNtsBGVXrAN8d0DgvdbhrHXaf_6xDx2NN4_OR8s0Amf1yMNA360cbcgwPsMWGkl6fslHU6eJ56s1dCzXtLpIL-m-fAo_hHRPqbZUEYTpteAPgLghcn-xHMML3JBtYNXQYIZ9OVgsvEhNel8RQU5kD6CSGPDKM0El2W"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4F4F4F]/90 via-[#7a5642]/40 to-transparent flex flex-col justify-end p-6 md:p-8">
            <span className="text-white/90 font-label text-[10px] uppercase tracking-widest mb-2 font-bold drop-shadow-sm">Novidades da Clínica</span>
            <h4 className="font-headline text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">Novo Protocolo de Rejuvenescimento Estrela</h4>
            <button className="bg-white/90 backdrop-blur-md text-[#7a5642] px-6 py-2.5 rounded-full font-label text-[11px] font-bold w-fit uppercase active:scale-95 transition-all shadow-lg hover:bg-white">Ler Artigo</button>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-safe glass-header rounded-t-3xl z-50 md:hidden">
        <a href="/admin" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-[#7a5642] transition-colors active:scale-90 duration-300">
          <span className="material-symbols-outlined mb-1">home</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-wider">Início</span>
        </a>
        <a href="/admin/agenda" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-[#7a5642] transition-colors active:scale-90 duration-300">
          <span className="material-symbols-outlined mb-1">calendar_today</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-wider">Agenda</span>
        </a>
        <a href="/admin/notificacoes" className="flex flex-col items-center justify-center bg-[#dcae96] text-white rounded-full px-5 py-1.5 shadow-md active:scale-90 duration-300">
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-wider">Alertas</span>
        </a>
        <a href="/admin/perfil" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-[#7a5642] transition-colors active:scale-90 duration-300">
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-wider">Perfil</span>
        </a>
      </nav>
    </div>
  );
}
