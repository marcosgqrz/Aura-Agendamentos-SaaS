"use client";

import Image from "next/image";

export default function AgendaMestra() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen pb-24">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/20 shadow-sm shadow-orange-900/5 flex justify-between items-center px-6 py-4 w-full">
        <div className="flex items-center gap-4">
          <button className="hover:opacity-80 transition-opacity scale-95 active:duration-150">
            <span className="material-symbols-outlined text-stone-800">menu</span>
          </button>
          <h1 className="text-xl font-bold text-stone-800 tracking-tighter font-headline">Stética Agendamentos</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center space-x-8 font-label text-stone-400 uppercase tracking-widest text-[10px] font-semibold">
            <a className="hover:text-[#dcae96] transition-colors" href="/admin">Início</a>
            <a className="text-[#dcae96] font-bold" href="/admin/agenda">Agenda</a>
            <a className="hover:text-[#dcae96] transition-colors" href="/admin/clientes">Clientes</a>
            <a className="hover:text-[#dcae96] transition-colors" href="/admin/financas">Finanças</a>
          </div>
          <button className="hover:opacity-80 transition-opacity scale-95 active:duration-150">
            <span className="material-symbols-outlined text-stone-800">settings</span>
          </button>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Dashboard Header / Control Bar */}
        <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-[fadeIn_0.4s_ease-out_forwards]">
          <div className="space-y-2">
            <span className="text-[#dcae96] font-label text-[10px] uppercase tracking-[0.15rem] font-bold">Agenda Mestra</span>
            <h2 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight">Ocupação Clínica</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {/* Date Picker UI */}
            <div className="bg-surface-container-low px-5 py-2.5 rounded-full flex items-center gap-3 shadow-sm border border-outline-variant/10 cursor-pointer hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined text-[#7a5642] scale-90">calendar_today</span>
              <span className="font-label text-sm font-bold tracking-tight">Hoje, 14 Mai</span>
              <span className="material-symbols-outlined text-on-surface-variant text-xs">expand_more</span>
            </div>
            <button className="bg-[#dcae96] text-white font-label text-sm font-bold py-3 px-8 rounded-full hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 shadow-md hover:shadow-lg">
              <span className="material-symbols-outlined text-lg">add</span>
              + Novo Agendamento
            </button>
          </div>
        </section>

        {/* Master Schedule Grid */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(122,86,66,0.06)] overflow-hidden border border-outline-variant/10 animate-[fadeIn_0.6s_ease-out_forwards]">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="p-6 border-r border-outline-variant/10 w-24 text-left font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold sticky left-0 bg-surface-container-low z-10 backdrop-blur-md">
                    Horário
                  </th>
                  {/* Profession Column 1 */}
                  <th className="p-6 border-r border-outline-variant/10 min-w-[280px]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-dim">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaqnB4_U8kap0vjSpFUXowRcgbi_R4C8qT-YtTVVNERPXbXh7KuKO4JTzM6DMssb4KC2D4PTMNvzhyEihwL8F2hgjwD97bI1mNjlXZgqFqjACWaUpCCxQL5XUscrXjMQGTgzTPk9XjKNtzD_ocITw0-LnAktm0EkhgaR10KD38dAGmVEQz8XSYzxQyXQds1Tt5g3Zv-lK4Kf5G1-4KhAD_iRuQ5rYc5H0hF8IlZQ-OJfKhaQFF2EnrY0gP-AHG-3Y00OuOHCYJsvhI" alt="Dra. Ana"/>
                      </div>
                      <div className="text-left">
                        <div className="font-headline font-bold text-on-surface">Dra. Ana Silva</div>
                        <div className="font-label text-xs text-on-surface-variant/70">Dermatologia</div>
                      </div>
                    </div>
                  </th>
                  {/* Profession Column 2 */}
                  <th className="p-6 border-r border-outline-variant/10 min-w-[280px]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-dim">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Vnx4UgmtrCo-8-RPBM_Z_M0_at29TR3zIL6_rOrC7Kfi7BsKNfVf3x6yEVAQHKhizK6fgtCKgr6lJTuaQzHIOhp1Hm0ObnIpiqg1hnJAfWxzz5gF0HG82m8Cfr5l53ww7O2ncYcaDxx8ZdlYKCvun79hOVLDDnqMfLNvSPoA-RlmS9AUt2QQiDjF2v-oZa4WXrFiLGHHSfdCOmSljzg_Llo1smNGN2By8XqSfrtbcD1qS7j17oMEFvnlWs4gcs80qGAraDFdBBbS" alt="Dr. Lucas"/>
                      </div>
                      <div className="text-left">
                        <div className="font-headline font-bold text-on-surface">Dr. Lucas Vaz</div>
                        <div className="font-label text-xs text-on-surface-variant/70">Estética Avançada</div>
                      </div>
                    </div>
                  </th>
                  {/* Profession Column 3 */}
                  <th className="p-6 min-w-[280px]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-dim">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-zXXkkuvHFyiq-YzKdhY2SOPSiC8AX-sQcrJjdZ_5646wSo_R42YwVpU1mWUK61zBoSD8mEn2w6vs5LxsuVcEJx-shq0S3UwmDEjjRpc5xk3or-S-N5eQahLnmLBkxOQgsrLo_l2Te_fC9K5LU7-jznWn39A1I0v2Ia86ugPHvaxQzr31EuFCv5gXsXYqPgqCI3JuTZCIwo6YVM8FvfOLIjolvP_GgDiEIHCbNl7HAVsOrsAEy0Y88X01ijrfjVeSRdN5f4ua5DL3" alt="Dra. Clara"/>
                      </div>
                      <div className="text-left">
                        <div className="font-headline font-bold text-on-surface">Dra. Clara Mello</div>
                        <div className="font-label text-xs text-on-surface-variant/70">Biomedicina</div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 08:00 */}
                <tr className="border-t border-outline-variant/10">
                  <td className="p-6 border-r border-outline-variant/10 font-headline font-bold text-on-surface-variant sticky left-0 bg-surface z-10">08:00</td>
                  <td className="p-4 border-r border-outline-variant/10 bg-surface/30">
                    <div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-emerald-300 shadow-sm relative group cursor-pointer hover:shadow-md transition-all hover:scale-[1.01]">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-headline font-bold text-sm">Beatriz Lopes</span>
                        <span className="text-[9px] font-label font-bold uppercase tracking-widest px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full">Confirmado</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mb-2">Limpeza de Pele</p>
                      <div className="flex items-center gap-2 text-[10px] text-on-surface-variant/60 font-bold">
                        <span className="material-symbols-outlined text-xs">schedule</span> 90 min
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-r border-outline-variant/10 bg-surface/30">
                    <div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-[#dcae96] rose-gold-gradient bg-opacity-10 shadow-sm relative group cursor-pointer transition-transform hover:scale-[1.01]">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-headline font-bold text-sm">Mariana Costa</span>
                        <span className="text-[9px] font-label font-bold uppercase tracking-widest px-2 py-0.5 bg-[#dcae96]/20 text-[#7a5642] rounded-full">VIP</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mb-2">Harmonização Facial</p>
                      <div className="flex items-center gap-2 text-[10px] text-on-surface-variant/60 font-bold">
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> Ultra Premium
                      </div>
                    </div>
                  </td>
                  <td className="p-4 bg-surface/30"></td>
                </tr>
                {/* 09:00 */}
                <tr className="border-t border-outline-variant/10">
                  <td className="p-6 border-r border-outline-variant/10 font-headline font-bold text-on-surface-variant sticky left-0 bg-surface z-10">09:00</td>
                  <td className="p-4 border-r border-outline-variant/10 bg-surface/30">
                     <div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-blue-300 shadow-sm relative group cursor-pointer transition-transform hover:scale-[1.01]">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-headline font-bold text-sm">Ricardo S.</span>
                        <span className="text-[9px] font-label font-bold uppercase tracking-widest px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full animate-pulse">Em Atendimento</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mb-2">Drenagem Linfática</p>
                      <div className="flex items-center gap-2 text-[10px] text-on-surface-variant/60 font-bold">
                        <span className="material-symbols-outlined text-xs">clinical_notes</span> Sala Corporal
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-r border-outline-variant/10 bg-surface/30"></td>
                  <td className="p-4 bg-surface/30">
                    <div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-stone-300 shadow-sm opacity-60 relative group cursor-pointer hover:opacity-100 transition-opacity">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-headline font-bold text-sm line-through text-stone-400">Julia F.</span>
                        <span className="text-[9px] font-label font-bold uppercase tracking-widest px-2 py-0.5 bg-stone-100 text-stone-500 rounded-full">Cancelado</span>
                      </div>
                      <p className="text-xs text-stone-400 mb-2">Designer de Sobrancelhas</p>
                    </div>
                  </td>
                </tr>
                {/* 10:00 */}
                <tr className="border-t border-outline-variant/10">
                   <td className="p-6 border-r border-outline-variant/10 font-headline font-bold text-on-surface-variant sticky left-0 bg-surface z-10">10:00</td>
                   <td className="p-4 border-r border-outline-variant/10 bg-surface/30"></td>
                   <td className="p-4 border-r border-outline-variant/10 bg-surface/30">
                      <div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-emerald-300 shadow-sm relative group cursor-pointer hover:shadow-md transition-all hover:scale-[1.01]">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-headline font-bold text-sm">Helena P.</span>
                          <span className="text-[9px] font-label font-bold uppercase tracking-widest px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full">Confirmado</span>
                        </div>
                        <p className="text-xs text-on-surface-variant mb-2">Hidra Gloss</p>
                      </div>
                   </td>
                   <td className="p-4 bg-surface/30">
                      <div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-emerald-300 shadow-sm relative group cursor-pointer hover:shadow-md transition-all hover:scale-[1.01]">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-headline font-bold text-sm">Carlos Lima</span>
                          <span className="text-[9px] font-label font-bold uppercase tracking-widest px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full">Confirmado</span>
                        </div>
                        <p className="text-xs text-on-surface-variant mb-2">Ventosaterapia</p>
                      </div>
                   </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Secondary Info Cards */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-[fadeIn_0.8s_ease-out_forwards]">
          <div className="bg-surface-container-low p-6 rounded-xl space-y-4 border border-outline-variant/10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#7a5642]">groups</span>
              <h3 className="font-headline font-bold text-lg">Fluxo de Pacientes</h3>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-4xl font-extrabold font-headline text-[#7a5642]">24</p>
                <p className="font-label text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest">Atendimentos hoje</p>
              </div>
              <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded">+12% vs ontem</span>
            </div>
          </div>
          
          <div className="bg-[#dcae96]/10 p-6 rounded-xl space-y-4 border border-[#dcae96]/20">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#7a5642]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <h3 className="font-headline font-bold text-lg text-[#7a5642]">Experiência VIP</h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Existem <strong className="text-[#7a5642]">3 pacientes VIP</strong> agendados para a tarde. Prepare o Kit de Boas-vindas Aura.
            </p>
            <div className="flex -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD87VO4GFBW81auIbTdzqY9_WzAyyC4D_yGKl5yNbFNiOipzruul7iMPzyYRGGJzjshwH4Uf2eR6CKrDz6_pQcv1LjSRGq-AXxZ-rMJzqiN8OQeol6_4KIRXZdPnTJ9yTAe0ydA_sG2y4ntoN1rxC12Dw6eiUNMnzAgRhGC49CFVbFvaZ7_kGDOlHQuF5AtfLQkWYtgmakBDDjkPssZgA0cDu1g2B62Rzw_-UKwHiYBqdRtGSjx7U5W_s1VKNigOBoeOfEPRM8CDx2I" alt=""/>
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDty9nWX1NRzmEP2pUD9yoFrjlcxd0qdEZanOK0NAx8kCJg40hrO4HfJ4MK_5z6cGnxUzndJQ4cQcMLMlzRY7cQm2-5J366hkTvHbNTqtKZKQ286P4tXq6muZRO7EspEzPNIRZ-gYWl3_alCOJDo83Il5xwuAVdehJ2Ls4STqpSWwmwe2k6sIpIpJkF6XlXAN4w1KHWIzIcVp_yME5C-QiaEAigV3s2UEm10-KTv0BDeprNmWmG0GPh_ydy5mi_FEdr37BdEKCorrX" alt=""/>
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSeTw8kNxylQFrKnNI8TEohQB7Pg-RF1QDBZ49OW1ZU3ICz4aE5PM5bYJxDNDjAMVh6eMdWLKl9pgpd3Y3_CBEcogC6uBgGhKJVpwwKBN8__UWkaShhM7mPtjm1hC_7XWIRgAoslNqNrKg7N83RMr6D3-wKeCayEnwAuep84oE0DSst1UVar0hZyBtaogyEkoMPpZiL62IsGYp7M3IcDvvn9Sm8mbajnO3MHw8nok3-XoMmFTGITfRV_oqcRdltD-3TGO2ZjGjFxw" alt=""/>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm flex flex-col justify-center">
            <div className="text-center space-y-2">
              <p className="font-label text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest">Capacidade Clínica</p>
              <div className="w-full bg-surface-container rounded-full h-2">
                <div className="bg-[#7a5642] h-2 rounded-full" style={{ width: "78%" }}></div>
              </div>
              <p className="font-headline font-bold text-2xl text-[#7a5642]">78%</p>
            </div>
          </div>
        </section>
      </main>

      {/* FAB for Mobile */}
      <button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-[#dcae96] text-white rounded-full shadow-[0_10px_25px_rgba(220,174,150,0.4)] flex items-center justify-center z-50 active:scale-95 transition-transform hover:opacity-90">
        <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>add</span>
      </button>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-2xl z-50 rounded-t-[2rem] shadow-[0_-12px_40px_rgba(122,86,66,0.06)] md:hidden">
        <a href="/admin" className="flex flex-col items-center justify-center text-stone-400 px-5 py-2 scale-90 active:duration-200 hover:text-[#dcae96] transition-colors">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Início</span>
        </a>
        <a href="/admin/agenda" className="flex flex-col items-center justify-center bg-orange-100/50 text-[#7a5642] rounded-full px-5 py-2 scale-90 active:duration-200 transition-colors shadow-inner">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Agenda</span>
        </a>
        <a href="/admin/clientes" className="flex flex-col items-center justify-center text-stone-400 px-5 py-2 scale-90 active:duration-200 hover:text-[#dcae96] transition-colors">
          <span className="material-symbols-outlined">group</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Clientes</span>
        </a>
        <a href="/admin/financas" className="flex flex-col items-center justify-center text-stone-400 px-5 py-2 scale-90 active:duration-200 hover:text-[#dcae96] transition-colors">
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Finanças</span>
        </a>
      </nav>
    </div>
  );
}
