"use client";

import Image from "next/image";

export default function VitrineServicos() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen selection:bg-[#dcae96] selection:text-white pb-32 overflow-x-hidden">
      {/* Top Navigation Shell */}
      <header className="glass-header fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <a href="/admin" className="material-symbols-outlined text-[#7a5642] cursor-pointer hover:opacity-80 transition-opacity active:scale-95 duration-200 inline-block">
              arrow_back
            </a>
            <span className="font-headline tracking-[0.2em] text-xl font-bold text-[#4F4F4F]">VITRINI</span>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest border border-outline-variant/50 shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
            <img className="w-full h-full object-cover" alt="Clinic Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyBh8fFktPrRXtqN1oUZOqGmd6CLeHItMOGAZYNPWs9tbsm5VdQteLfCuMImXu7JP0-GwOVFoYJmuyYOnrnIbdQH3B8J6USDcD-OQvoGBSG9U67mKAYdmsf3UVzHMVaselos7v7Qvq0PtMvp6GdEXroLqiurggB84r0wAyG8L5xz-sDddLBM7iwW-9AcXp_hHY-5oailLmkarPaOqYwVepphh1S3hZXjo9emLXnQ1MEaITTYQ7cnRxnAzv-Lme5Vt_sSpPtCunnLh_"/>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-32 animate-fade-in max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative h-[450px] w-full overflow-hidden mb-12 lg:rounded-b-[3rem] shadow-[0_20px_50px_rgba(122,86,66,0.08)]">
          <img className="w-full h-full object-cover transform scale-105 animate-[kenBurns_20s_ease-in-out_infinite_alternate]" alt="Luxurious spa interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATDAQ8TslLTtAsFRFBSoa7rKXeHrn0vIcpBfW8j8-08DfYB9ZcmITcV3mBGoAiIlxGvmkUOwqUww4Mrj2nER48uKrr-EEY4jEmwQBlPm6oXxBz6JVuNq-1dVlsg9kP1Yef5cMpzQYa9pnYbKNcV74lh3se79cpDI8lPkwCP-rWCY6l8x2eiZfN-2UQZYKgfz6zJMEifx5-0m4ACNdBqHKWTQgCV_EZbRUNXxU_IdbLNDqFT9YP_y3LPS5jLi5mDuc5nInvc9UoyYsH"/>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          <div className="absolute bottom-12 left-6 right-6 md:left-16">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-[#a37c69] mb-2 font-bold drop-shadow-sm">Exclusive Care</p>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#4F4F4F] leading-none max-w-lg mb-4">
              Stética Agendamentos
            </h1>
            <p className="font-body text-sm md:text-base text-on-surface-variant font-medium max-w-md">
              Transformando o autocuidado em uma experiência clínica premium por meio de tratamentos estéticos especializados.
            </p>
            <div className="mt-6 flex gap-3">
              <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#7a5642] shadow-sm">Premium</span>
              <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#7a5642] shadow-sm">Tech</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 md:px-16 space-y-12">
          <div className="flex items-baseline justify-between border-b border-outline-variant/50 pb-4">
            <h2 className="font-headline text-3xl font-bold text-[#4F4F4F]">Vitrine de Serviços</h2>
            <span className="font-label text-xs uppercase tracking-widest text-[#7a5642] font-bold bg-[#dcae96]/10 px-3 py-1 rounded-full">9 Opções</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Service: Drenagem Linfática - Featured */}
            <div className="group flex flex-col gap-5 lg:col-span-2 flex-row md:flex-row bg-surface-container-lowest p-6 rounded-[2rem] shadow-[0_12px_40px_rgba(122,86,66,0.04)] border border-outline-variant/30 hover:shadow-[0_20px_50px_rgba(220,174,150,0.1)] transition-all">
              <div className="relative overflow-hidden aspect-[16/9] md:aspect-square md:w-1/2 rounded-[1.5rem] bg-surface-container-low shadow-inner">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lymphatic drainage massage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKJs7SHM34OPBi6u29gmor9ES0FLJFzVEHSMrjvFLG2YW-CkZIOXO6bFOjUcm9KULpWldzspeQuiz196ROV8zGm3D344uuK-odp2Oo2fvQIc1_5ArsN6ofWlZzS9GHP4cVqkT0RdYc7syvVEZP0skPBAH9aiTEdu3rii-Rn3IE0Vtbo3Vr0wCEvaI_UyiS1n-QcPRVdV9Q_phQxAUzFuPsgwuLvxm48x9i8WT4Lg2yY_-Wh-lyPHJHqn_jPU2Vwb8YRvLYcxGd6x8l"/>
                <div className="absolute top-4 left-4">
                  <span className="rose-gold-gradient text-white text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-lg">Special</span>
                </div>
              </div>
              <div className="flex flex-col justify-center md:w-1/2 md:pl-8 space-y-6">
                <div>
                  <h3 className="font-headline text-3xl font-bold text-[#4F4F4F] mb-2">Drenagem Linfática</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">Reduzindo a retenção de líquidos e melhorando a circulação. Uma massagem terapêutica que estimula o sistema linfático para eliminar toxinas do corpo suavemente.</p>
                </div>
                <div className="flex justify-between items-end border-t border-outline-variant/30 pt-4">
                  <div>
                    <p className="font-headline text-2xl font-extrabold text-[#a37c69]">R$ 100<span className="text-sm">,00</span></p>
                    <p className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-widest flex items-center gap-1 mt-1"><span className="material-symbols-outlined text-[12px]">schedule</span> 60 min</p>
                  </div>
                  <button className="py-3 px-8 rose-gold-gradient text-white font-bold rounded-full hover:shadow-[0_8px_25px_rgba(220,174,150,0.4)] active:scale-95 transition-all shadow-md uppercase tracking-widest text-xs">Agendar</button>
                </div>
              </div>
            </div>

            {/* Service: Limpeza de Pele - Featured */}
            <div className="group flex flex-col gap-4 bg-surface-container-lowest p-5 rounded-[2rem] shadow-[0_12px_40px_rgba(122,86,66,0.04)] border border-outline-variant/30 hover:shadow-[0_15px_40px_rgba(220,174,150,0.1)] transition-all">
              <div className="relative overflow-hidden aspect-[16/9] rounded-[1.5rem] bg-surface-container-low shadow-inner">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Deep facial cleansing treatment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_q3Xvy0tT9mRKmNa8bQZY-LGHl8ATE4wdnvVti8kI43pxVIMWVM4gT9FeQ7WGdAMPWPzYpMlDDkowjRRQ_m5egynFmSFGAOiWsGwkHA-kWtQHScEMaGtZYwSNJk2ubT0suK8PSEIaIEubGHPzqKaTm8fxmr6UB4xNz5FEpAGzKsX5RoQL2n_1_QYl3lGn9sBTVI-q6Ae4ctiObBYcdSxjNtd6BfULHrUnnxSWQJ79FJoZyAnWINwoKujo2xcWq1kPSsgRbuEf5I6S"/>
                <div className="absolute top-4 left-4">
                  <span className="bg-stone-800 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-md">Premium</span>
                </div>
              </div>
              <div className="flex justify-between items-start pt-2 px-2">
                <div className="space-y-1 w-2/3">
                  <h3 className="font-headline text-xl font-bold text-[#4F4F4F]">Limpeza de Pele</h3>
                  <p className="font-body text-xs text-on-surface-variant font-medium leading-relaxed">Extração profunda e revitalização cutânea.</p>
                </div>
                <div className="text-right">
                  <p className="font-headline text-xl font-extrabold text-[#7a5642]">R$ 100</p>
                  <p className="font-label text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">90 min</p>
                </div>
              </div>
              <button className="w-full py-4 bg-surface-container-low text-[#4F4F4F] font-bold rounded-full hover:bg-[#dcae96] hover:text-white active:scale-95 transition-all tracking-widest text-[11px] uppercase border border-outline-variant mt-2">Agendar Agora</button>
            </div>
          </div>

          {/* Secondary Grid for other services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            {/* Massagem Relaxante */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.03)] flex flex-col justify-between border-l-4 border-transparent hover:border-[#dcae96] transition-all group">
              <div>
                <h4 className="font-headline font-bold text-[#4F4F4F] text-lg mb-1 group-hover:text-[#a37c69] transition-colors">Massagem Relaxante</h4>
                <p className="font-body text-xs font-medium text-on-surface-variant mb-6">Alívio completo do estresse corporal.</p>
              </div>
              <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
                <span className="font-headline font-bold text-[#7a5642] text-xl">R$ 100,00</span>
                <button className="bg-surface-container-low p-2.5 rounded-full hover:bg-[#dcae96] transition-colors">
                  <span className="material-symbols-outlined text-[#7a5642] hover:text-white transition-colors text-sm">add</span>
                </button>
              </div>
            </div>

            {/* Ventosaterapia */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.03)] flex flex-col justify-between border-l-4 border-transparent hover:border-[#dcae96] transition-all group">
              <div>
                <h4 className="font-headline font-bold text-[#4F4F4F] text-lg mb-1 group-hover:text-[#a37c69] transition-colors">Ventosaterapia</h4>
                <p className="font-body text-xs font-medium text-on-surface-variant mb-6">Terapia de sucção para tensão muscular profunda.</p>
              </div>
              <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
                <span className="font-headline font-bold text-[#7a5642] text-xl">R$ 100,00</span>
                <button className="bg-surface-container-low p-2.5 rounded-full hover:bg-[#dcae96] transition-colors">
                  <span className="material-symbols-outlined text-[#7a5642] hover:text-white transition-colors text-sm">add</span>
                </button>
              </div>
            </div>

            {/* Hidra Gloss */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_8px_30px_rgba(122,86,66,0.05)] flex flex-col justify-between border-l-[6px] border-[#dcae96] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#dcae96]/10 rounded-bl-full"></div>
              <div className="flex justify-between relative z-10">
                <h4 className="font-headline font-bold text-[#4F4F4F] text-lg mb-1 group-hover:text-[#a37c69] transition-colors">Hidra Gloss</h4>
                <span className="rose-gold-gradient text-white text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest h-fit shadow-sm">Hot</span>
              </div>
              <p className="font-body text-xs font-medium text-on-surface-variant mb-6 relative z-10">Hidratação intensa e volume labial estético.</p>
              <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4 relative z-10">
                <span className="font-headline font-bold text-[#7a5642] text-xl">R$ 90,00</span>
                <button className="bg-[#dcae96]/20 p-2.5 rounded-full hover:bg-[#dcae96] transition-colors">
                  <span className="material-symbols-outlined text-[#7a5642] hover:text-white transition-colors text-sm">add</span>
                </button>
              </div>
            </div>

            {/* Brow Lamination */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.03)] flex flex-col justify-between border-l-4 border-transparent hover:border-[#dcae96] transition-all group">
              <div>
                <h4 className="font-headline font-bold text-[#4F4F4F] text-lg mb-1 group-hover:text-[#a37c69] transition-colors">Brow Lamination</h4>
                <p className="font-body text-xs font-medium text-on-surface-variant mb-6">Sobrancelhas mais cheias, alinhadas e definidas.</p>
              </div>
              <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
                <span className="font-headline font-bold text-[#7a5642] text-xl">R$ 60,00</span>
                <button className="bg-surface-container-low p-2.5 rounded-full hover:bg-[#dcae96] transition-colors">
                  <span className="material-symbols-outlined text-[#7a5642] hover:text-white transition-colors text-sm">add</span>
                </button>
              </div>
            </div>

            {/* Lash Lifting */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.03)] flex flex-col justify-between border-l-4 border-transparent hover:border-[#dcae96] transition-all group">
              <div>
                <h4 className="font-headline font-bold text-[#4F4F4F] text-lg mb-1 group-hover:text-[#a37c69] transition-colors">Lash Lifting</h4>
                <p className="font-body text-xs font-medium text-on-surface-variant mb-6">Curvatura e alongamento natural dos cílios.</p>
              </div>
              <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
                <span className="font-headline font-bold text-[#7a5642] text-xl">R$ 60,00</span>
                <button className="bg-surface-container-low p-2.5 rounded-full hover:bg-[#dcae96] transition-colors">
                  <span className="material-symbols-outlined text-[#7a5642] hover:text-white transition-colors text-sm">add</span>
                </button>
              </div>
            </div>

            {/* Spa dos Pés */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.03)] flex flex-col justify-between border-l-4 border-transparent hover:border-[#dcae96] transition-all group">
              <div>
                <h4 className="font-headline font-bold text-[#4F4F4F] text-lg mb-1 group-hover:text-[#a37c69] transition-colors">Spa dos Pés</h4>
                <p className="font-body text-xs font-medium text-on-surface-variant mb-6">Esfoliação, hidratação e relaxamento plantar.</p>
              </div>
              <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
                <span className="font-headline font-bold text-[#7a5642] text-xl">R$ 50,00</span>
                <button className="bg-surface-container-low p-2.5 rounded-full hover:bg-[#dcae96] transition-colors">
                  <span className="material-symbols-outlined text-[#7a5642] hover:text-white transition-colors text-sm">add</span>
                </button>
              </div>
            </div>

            {/* Designer de Sobrancelhas */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.03)] flex flex-col justify-between border-l-4 border-transparent hover:border-[#dcae96] transition-all group">
              <div>
                <h4 className="font-headline font-bold text-[#4F4F4F] text-lg mb-1 group-hover:text-[#a37c69] transition-colors">Designer de Sobrancelhas</h4>
                <p className="font-body text-xs font-medium text-on-surface-variant mb-6">Mapeamento facial preciso e design personalizado.</p>
              </div>
              <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
                <span className="font-headline font-bold text-[#7a5642] text-xl">R$ 25,00</span>
                <button className="bg-surface-container-low p-2.5 rounded-full hover:bg-[#dcae96] transition-colors">
                  <span className="material-symbols-outlined text-[#7a5642] hover:text-white transition-colors text-sm">add</span>
                </button>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Decorative Custom Animations Added to Global if needed */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenBurns {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.15) translate(-1%, -1%); }
        }
      `}} />

      {/* Decorative elements */}
      <div className="fixed top-1/4 right-0 p-8 opacity-5 pointer-events-none z-0">
        <span className="font-headline text-[150px] font-extrabold text-[#dcae96] rotate-90 block leading-none select-none">VITRINI</span>
      </div>

      {/* Bottom Navigation Shell (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-end pb-6 px-4 glass-header z-50 rounded-t-[2rem] shadow-[0_-12px_40px_rgba(122,86,66,0.06)] h-20 md:hidden">
        <a className="flex flex-col items-center justify-center rose-gold-gradient text-white rounded-full w-12 h-12 mb-1 shadow-md" href="/admin/servicos">
          <span className="material-symbols-outlined">auto_awesome</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#aa9c95] hover:text-[#7a5642] transition-colors" href="/admin/agenda">
          <span className="material-symbols-outlined">calendar_month</span>
          <span className="font-label text-[9px] font-bold uppercase tracking-widest mt-1">Agenda</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#aa9c95] hover:text-[#7a5642] transition-colors" href="/admin/clientes">
          <span className="material-symbols-outlined">group</span>
          <span className="font-label text-[9px] font-bold uppercase tracking-widest mt-1">Clientes</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#aa9c95] hover:text-[#7a5642] transition-colors" href="/admin">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label text-[9px] font-bold uppercase tracking-widest mt-1">Painel</span>
        </a>
      </nav>
    </div>
  );
}
