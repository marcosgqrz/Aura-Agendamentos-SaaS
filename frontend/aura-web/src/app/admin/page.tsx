"use client";

import Image from "next/image";

export default function AdminDashboard() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen pb-24">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/20 shadow-sm shadow-orange-900/5">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-stone-800 hover:opacity-80 transition-opacity cursor-pointer">
              menu
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-stone-800 tracking-tighter font-headline">
                Stética Agendamentos
              </span>
              <span className="hidden md:inline text-[10px] uppercase tracking-widest font-semibold text-primary px-2 py-0.5 bg-primary-container/20 rounded-full">
                Admin Shell
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 items-center text-sm font-label">
              <a className="text-[#dcae96] font-bold hover:opacity-80 transition-opacity" href="#">
                Visão Geral
              </a>
              <a className="text-stone-400 hover:opacity-80 transition-opacity" href="#">
                Relatórios
              </a>
              <a className="text-stone-400 hover:opacity-80 transition-opacity" href="#">
                Configurações
              </a>
            </div>
            <span className="material-symbols-outlined text-stone-800 hover:opacity-80 transition-opacity cursor-pointer">
              settings
            </span>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Welcome Header - Editorial Style */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-2 opacity-80 animate-[fadeIn_0.4s_ease-out_forwards]">
            Dashboard Central
          </p>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface leading-none mb-4 animate-[fadeIn_0.5s_ease-out_forwards]">
            Olá, Admin. <span className="text-primary-container italic font-normal">Sua clínica hoje.</span>
          </h1>
          <div className="h-1 w-24 rose-gold-gradient rounded-full animate-[fadeIn_0.6s_ease-out_forwards]"></div>
        </section>

        {/* Bento Grid Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-[fadeIn_0.7s_ease-out_forwards]">
          {/* Faturamento do Dia */}
          <div className="md:col-span-2 bg-surface-container-lowest premium-border shadow-[0_12px_40px_rgba(122,86,66,0.06)] p-8 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant/60">
                  Faturamento do Dia
                </span>
                <div className="p-2 bg-primary-container/10 rounded-full">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    payments
                  </span>
                </div>
              </div>
              <h2 className="text-4xl font-headline font-bold text-on-surface">R$ 4.280,00</h2>
              <p className="text-sm text-green-600 font-semibold mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span> +12% em relação a ontem
              </p>
            </div>
            <div className="mt-8 flex gap-2">
              <span className="text-[10px] font-bold text-primary uppercase tracking-tighter bg-primary-container/20 px-2 py-1 rounded">
                Projeção Mensal: R$ 85.000
              </span>
            </div>
          </div>

          {/* Agendamentos Confirmados */}
          <div className="bg-surface-container-lowest shadow-[0_12px_40px_rgba(122,86,66,0.06)] p-8 rounded-xl flex flex-col justify-between border border-transparent hover:border-primary-container/30 transition-colors">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant/60">
                  Confirmados
                </span>
                <div className="p-2 bg-stone-100 rounded-full">
                  <span className="material-symbols-outlined text-stone-500">event_available</span>
                </div>
              </div>
              <h2 className="text-4xl font-headline font-bold text-on-surface">18</h2>
              <p className="text-xs text-on-surface-variant mt-2">De um total de 22 agendados</p>
            </div>
            <div className="mt-4 w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[81%] shadow-inner"></div>
            </div>
          </div>

          {/* Faltas */}
          <div className="bg-surface-container-lowest shadow-[0_12px_40px_rgba(122,86,66,0.06)] p-8 rounded-xl flex flex-col justify-between border border-transparent hover:border-error/30 transition-colors">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant/60">
                  Faltas
                </span>
                <div className="p-2 bg-error-container/10 rounded-full">
                  <span className="material-symbols-outlined text-error">person_off</span>
                </div>
              </div>
              <h2 className="text-4xl font-headline font-bold text-error">02</h2>
              <p className="text-xs text-on-surface-variant mt-2">9% taxa de ausência hoje</p>
            </div>
            <button className="text-[10px] text-error font-bold uppercase tracking-widest hover:underline text-left mt-4 inline-flex items-center gap-1">
              Contatar Clientes <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Second Section: Alerts & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start animate-[fadeIn_0.8s_ease-out_forwards]">
          
          {/* Stock Alerts */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline text-2xl font-bold tracking-tight text-[#7a5642]">
                <span className="material-symbols-outlined align-middle mr-2">inventory_2</span> 
                Alertas de Estoque
              </h3>
              <button className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-container transition-colors">
                Ver Inventário
              </button>
            </div>
            <div className="space-y-4">
              {/* Crítico */}
              <div className="group bg-surface-container-low/50 hover:bg-surface-container-lowest transition-all p-5 rounded-xl flex items-center justify-between border-l-2 border-transparent hover:border-error shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex justify-center items-center text-stone-500 overflow-hidden">
                     <span className="material-symbols-outlined">vaccines</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Ácido Hialurônico 50ml</h4>
                    <p className="text-xs text-on-surface-variant">Linha Premium Platinum</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-error uppercase block mb-1 flex items-center justify-end gap-1">
                    <span className="material-symbols-outlined text-[10px]">warning</span> Crítico
                  </span>
                  <span className="text-xs text-on-surface-variant">02 unidades restantes</span>
                </div>
              </div>

              {/* Baixo */}
              <div className="group bg-surface-container-low/50 hover:bg-surface-container-lowest transition-all p-5 rounded-xl flex items-center justify-between border-l-2 border-transparent hover:border-orange-400 shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex justify-center items-center text-stone-500 overflow-hidden">
                     <span className="material-symbols-outlined">medical_mask</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Kit Luvas de Nitrilo (M)</h4>
                    <p className="text-xs text-on-surface-variant">Descartáveis Hospitalares</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-orange-400 uppercase block mb-1">Baixo</span>
                  <span className="text-xs text-on-surface-variant">15 unidades restantes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Quick Actions / Stats */}
          <div className="bg-stone-900 text-white p-8 rounded-[2rem] relative overflow-hidden shadow-2xl">
            {/* Visual Texture Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 rose-gold-gradient rounded-bl-full opacity-20 -mr-16 -mt-16"></div>
            
            <h3 className="font-headline text-xl font-bold mb-8 relative z-10 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#dcae96]">star</span>
              Próximos VIPs
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-stone-800 p-2 -ml-2 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-full border-2 border-primary-container p-0.5">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5q2-u6QdPVUbYe8RvnMJ38_pytPBpu3hdBahro3Wk7L49naJMLyrAJ6jBGjmUk86KRk8A3tegYZLXzLX0KycV2CbDlUuarxnq0EWajY8mfc7LlMuh6iptbTkvxGppkRvSQ-OHKPwT6Sueidpc8vbWHokWhBBJnF4D_GJ4R9hDiHz80VSU44PEjgWZHbVxT05kqErK6O6wlPp3SuCkSuJXhy7fCXy_XBdPLAtcLikMH1i9-oYQ6IfyYcjDrz4z1AbHWPgG19IW1-v5"
                    alt="Helena Mendes"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold group-hover:text-[#dcae96] transition-colors">Helena Mendes</p>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest">Protocolo Facial • 14:30</p>
                </div>
              </div>

              <div className="flex items-center gap-4 opacity-70 group cursor-pointer hover:bg-stone-800 hover:opacity-100 p-2 -ml-2 rounded-xl transition-all">
                <div className="w-10 h-10 rounded-full border border-stone-700 p-0.5">
                  <img
                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBileCyKKKnQS-wbROfSnvTn78ZiWAb_iyKbjc7xMfU-cvW-2-jmoWOHyTqg_REmc-_Y7fXCOfWy5H4-D76Oxj0ZUZ78lO9iUiKHqHl3kgXPkXKE_hTcc_DpJGEsNbXeabQ5ROUua9dt9Pte8Ha9gOLlYA8sbjxNbuCBImB9pbTUL1neklcllF2I2cD1SfWcLvKrAuX17dqejOLpg7vpCoXKA1DHRj85lyXGUcRD4CgQkYA0QjL8YNgxkjz6_ZpCfGLzicTstOys_Px"
                    alt="Ricardo Santos"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold group-hover:text-[#dcae96] transition-colors">Ricardo Santos</p>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest">Botox Full Face • 16:00</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <button className="w-full py-4 rounded-full rose-gold-gradient text-white font-bold text-sm tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all shadow-[0_10px_30px_rgba(220,174,150,0.3)]">
                + Nova Venda Fixa
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-2xl z-50 rounded-t-[2rem] shadow-[0_-12px_40px_rgba(122,86,66,0.06)] max-w-7xl mx-auto right-0">
        {/* Active Tab: Inicio */}
        <a
          href="/admin"
          className="flex flex-col items-center justify-center bg-orange-100/50 text-[#7a5642] rounded-full px-5 py-2 scale-90 active:duration-200 transition-colors shadow-inner"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            dashboard
          </span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">
            Início
          </span>
        </a>
        <a
          href="/admin/agenda"
          className="flex flex-col items-center justify-center text-stone-400 px-5 py-2 scale-90 active:duration-200 hover:text-[#dcae96] transition-colors"
        >
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">
            Agenda
          </span>
        </a>
        <a
          href="/admin/clientes"
          className="flex flex-col items-center justify-center text-stone-400 px-5 py-2 scale-90 active:duration-200 hover:text-[#dcae96] transition-colors"
        >
          <span className="material-symbols-outlined">group</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">
            Clientes
          </span>
        </a>
        <a
          href="/admin/financas"
          className="flex flex-col items-center justify-center text-stone-400 px-5 py-2 scale-90 active:duration-200 hover:text-[#dcae96] transition-colors"
        >
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">
            Finanças
          </span>
        </a>
      </nav>
    </div>
  );
}
