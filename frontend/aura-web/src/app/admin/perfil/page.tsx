"use client";

import Image from "next/image";

export default function Perfil() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col pb-24">
      {/* TopAppBar */}
      <header className="glass-header fixed top-0 w-full z-50 flex items-center px-6 h-16 max-w-7xl mx-auto left-0 right-0">
        <div className="flex items-center gap-4">
          <a href="/admin" className="material-symbols-outlined text-[#7a5642] cursor-pointer active:scale-95 duration-200 hover:opacity-80">
            arrow_back
          </a>
          <h1 className="font-headline font-bold tracking-tight text-lg text-[#7a5642]">Meu Perfil</h1>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-32 px-6 max-w-2xl mx-auto w-full animate-fade-in">
        
        {/* Profile Avatar Section */}
        <div className="relative mb-12 flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="w-36 h-36 rounded-full premium-border overflow-hidden shadow-[0_12px_40px_rgba(122,86,66,0.12)] bg-surface-container-highest group-hover:shadow-[0_15px_50px_rgba(220,174,150,0.2)] transition-all">
              <img 
                alt="Avatar do Usuário" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEW6ANQbZgQAITqd65NOVRWcWDvpHc3NkFJkHKKsiaDy8haUkrhCjlhWV3h9bnAJ5FqxFyaIP1naJFQvTECsRwLxdJ1YSj7VXiPzQIjYsGpaYXa5mARBKcLlicCeaJ0CrH_oI4QIP3R7eN9JvcaJdhjgTXoud7BOjyBkaw8YUAziT8nZBQ6oDnOEr7XDAo6yxGvDaFQk9UDp9IHSGxJZ0MslxaLO_XJn-4GnhO54EKAOM5rkOzvFBOfl4i-N6rQhK4gzyZ4a2iYZEH"
              />
            </div>
            <div className="absolute bottom-0 right-0 rose-gold-gradient w-11 h-11 rounded-full flex items-center justify-center text-white border-4 border-surface shadow-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </div>
          </div>
        </div>

        {/* Info Layout */}
        <div className="space-y-10">
          
          {/* Header Group */}
          <div className="border-l-[6px] border-[#dcae96] pl-5 bg-gradient-to-r from-[#dcae96]/5 to-transparent py-2 rounded-r-xl">
            <p className="font-label text-[11px] uppercase tracking-[0.1em] text-on-surface-variant font-bold mb-1">Informações Pessoais</p>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tighter text-[#4F4F4F]">Carolina M. Estevão</h2>
          </div>

          {/* Profile Details Bento Grid */}
          <div className="grid gap-4">
            
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.03)] border border-outline-variant/30 hover:border-[#dcae96]/40 transition-colors group cursor-pointer">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/70 font-bold block mb-3 group-hover:text-[#a37c69] transition-colors">E-mail Corporativo</label>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#dcae96]/10 flex items-center justify-center text-[#a37c69] group-hover:bg-[#dcae96] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <p className="text-[#4F4F4F] font-bold text-sm">carolina.estevao@aura.com</p>
              </div>
            </div>

            <div className="bg-[#f0ece9]/30 p-6 rounded-2xl border border-outline-variant/30 group cursor-pointer hover:border-[#dcae96]/40 transition-colors">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/70 font-bold block mb-3 group-hover:text-[#a37c69] transition-colors">Cargo Atual</label>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#a37c69] shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">badge</span>
                  </div>
                  <p className="text-[#4F4F4F] font-bold text-sm">Administrador Geral</p>
                </div>
                <span className="bg-[#a37c69] text-white px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-sm">Master</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.03)] border border-outline-variant/30 hover:border-[#dcae96]/40 transition-colors group cursor-pointer">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/70 font-bold block mb-3 group-hover:text-[#a37c69] transition-colors">Telefone de Contato</label>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#dcae96]/10 flex items-center justify-center text-[#a37c69] group-hover:bg-[#dcae96] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <p className="text-[#4F4F4F] font-bold text-sm">(11) 98765-4321</p>
              </div>
            </div>

          </div>

          {/* Settings Options */}
          <div className="pt-4 border-t border-outline-variant/30 grid grid-cols-2 gap-4">
             <button className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-[#f0ece9]/50 transition-colors cursor-pointer text-[#4F4F4F] hover:text-[#a37c69]">
                <span className="material-symbols-outlined">payments</span>
                <span className="font-label text-xs font-bold uppercase tracking-widest">Minha Conta</span>
             </button>
             <button className="bg-surface-container-lowest p-4 rounded-xl border border-[#c86161]/20 shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-error-container/50 transition-colors cursor-pointer text-[#c86161]">
                <span className="material-symbols-outlined">logout</span>
                <span className="font-label text-xs font-bold uppercase tracking-widest">Sair</span>
             </button>
          </div>

          {/* Primary Action */}
          <div className="pt-6">
            <button className="w-full rose-gold-gradient text-white font-headline font-bold py-5 px-8 rounded-full shadow-[0_12px_30px_rgba(220,174,150,0.3)] hover:shadow-[0_15px_40px_rgba(220,174,150,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings_heart</span>
              Editar Preferências
            </button>
            <p className="text-center text-on-surface-variant/60 text-[10px] uppercase tracking-widest mt-6 font-bold">
              Membro desde Janeiro de 2024
            </p>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="glass-header fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-safe z-50 rounded-t-3xl md:hidden">
        <a href="/admin" className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-2 hover:text-[#7a5642] transition-colors active:scale-90 duration-300">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-wider mt-1">Início</span>
        </a>
        <a href="/admin/agenda" className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-2 hover:text-[#7a5642] transition-colors active:scale-90 duration-300">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-wider mt-1">Agenda</span>
        </a>
        <a href="/admin/notificacoes" className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-2 hover:text-[#7a5642] transition-colors active:scale-90 duration-300">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-wider mt-1">Alertas</span>
        </a>
        {/* Active Tab: Perfil */}
        <a href="/admin/perfil" className="flex flex-col items-center justify-center bg-[#dcae96] text-white rounded-full px-5 py-1.5 shadow-md active:scale-90 duration-300">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-wider mt-1">Perfil</span>
        </a>
      </nav>
    </div>
  );
}
