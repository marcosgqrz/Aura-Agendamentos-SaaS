"use client";

import Image from "next/image";
import { useState } from "react";

export default function Configuracoes() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [syncCalendar, setSyncCalendar] = useState(true);

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="glass-header fixed top-0 w-full z-50 flex items-center px-6 h-16 max-w-7xl mx-auto left-0 right-0">
        <div className="flex items-center gap-4">
          <a href="/admin/perfil" className="material-symbols-outlined text-[#7a5642] cursor-pointer hover:opacity-80 transition-opacity active:scale-95 duration-200">
            arrow_back
          </a>
          <h1 className="font-headline font-bold tracking-tight text-lg text-[#7a5642]">Configurações</h1>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-3xl mx-auto animate-fade-in">
        
        {/* Profile Anchor */}
        <section className="mb-10">
          <div className="flex items-center gap-6 p-5 bg-surface-container-lowest rounded-2xl shadow-[0_4px_20px_rgba(122,86,66,0.04)] border border-outline-variant/20 hover:border-[#dcae96]/30 transition-colors">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#dcae96]">
              <img 
                alt="User Profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA73bZ5b8wGgorc8rri-RYP9HWEnbnrxiLGv31AVWaiXPBsEM6WJmYe9LCV8fmf1EUy9_mKela9WpmopsPJO6QBaqf3i3zN8d5GaVM3unFCP4DksQlVJUpJhp5Bw0VVvbTHRliQEUJGJ8WR8qLuKEYglHDl6fwZ97TrVaq1UIm86FSsnEn3IEu7kD81W8p8ACpexS6-BTWpRmDS6RhxtcN863Kbm0EACGxzT-RH4m5LaZgIT1RSBNmHU7aXwGSvfO7TDq4V7_shYI4t"
              />
            </div>
            <div>
              <h2 className="font-headline font-bold text-xl text-[#4F4F4F] tracking-tight">Julia Martins</h2>
              <p className="font-body text-sm text-on-surface-variant/80 font-medium">Plano Premium Aesthetic</p>
            </div>
          </div>
        </section>

        {/* Preferences Group */}
        <div className="space-y-6">
          <h3 className="font-label text-[11px] font-bold uppercase tracking-[0.1em] text-[#a37c69] ml-2">Preferências Gerais</h3>
          
          <div className="bg-surface-container-low rounded-3xl p-2 space-y-1 shadow-sm border border-outline-variant/20">
            
            {/* Toggle Item 1 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl shadow-sm border border-transparent hover:border-[#dcae96]/20 transition-colors cursor-pointer" onClick={() => setNotifications(!notifications)}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#dcae96]/10 flex items-center justify-center text-[#7a5642]">
                  <span className="material-symbols-outlined">notifications</span>
                </div>
                <span className="font-body font-bold text-[#4F4F4F]">Notificações Push</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer pointer-events-none">
                <input type="checkbox" checked={notifications} readOnly className="sr-only peer" />
                <div className="w-12 h-7 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#7a5642] shadow-inner"></div>
              </label>
            </div>

            {/* Toggle Item 2 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl shadow-sm border border-transparent hover:border-[#dcae96]/20 transition-colors cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#dcae96]/10 flex items-center justify-center text-[#7a5642]">
                  <span className="material-symbols-outlined">dark_mode</span>
                </div>
                <span className="font-body font-bold text-[#4F4F4F]">Modo Escuro</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer pointer-events-none">
                <input type="checkbox" checked={darkMode} readOnly className="sr-only peer" />
                <div className="w-12 h-7 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#7a5642] shadow-inner"></div>
              </label>
            </div>

            {/* Toggle Item 3 */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl shadow-sm border border-transparent hover:border-[#dcae96]/20 transition-colors cursor-pointer" onClick={() => setSyncCalendar(!syncCalendar)}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#dcae96]/10 flex items-center justify-center text-[#7a5642]">
                  <span className="material-symbols-outlined">sync</span>
                </div>
                <span className="font-body font-bold text-[#4F4F4F]">Sincronizar Agenda</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer pointer-events-none">
                <input type="checkbox" checked={syncCalendar} readOnly className="sr-only peer" />
                <div className="w-12 h-7 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#7a5642] shadow-inner"></div>
              </label>
            </div>

          </div>
        </div>

        {/* Security Section */}
        <div className="mt-10 space-y-6">
          <h3 className="font-label text-[11px] font-bold uppercase tracking-[0.1em] text-[#a37c69] ml-2">Segurança</h3>
          <div className="bg-surface-container-low rounded-3xl p-2 space-y-1 shadow-sm border border-outline-variant/20">
            
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-[#dcae96]/10 transition-colors cursor-pointer group shadow-sm">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#7a5642]">lock</span>
                <span className="font-body font-bold text-[#4F4F4F]">Alterar Senha</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 group-hover:text-[#a37c69] transition-all">chevron_right</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-[#dcae96]/10 transition-colors cursor-pointer group shadow-sm">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#7a5642]">fingerprint</span>
                <span className="font-body font-bold text-[#4F4F4F]">Autenticação Biométrica</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 group-hover:text-[#a37c69] transition-all">chevron_right</span>
            </div>

          </div>
        </div>

        {/* Privacy Section */}
        <div className="mt-10 space-y-6">
          <h3 className="font-label text-[11px] font-bold uppercase tracking-[0.1em] text-[#a37c69] ml-2">Privacidade</h3>
          <div className="bg-surface-container-low rounded-3xl p-2 space-y-1 shadow-sm border border-outline-variant/20">
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-[#dcae96]/10 transition-colors cursor-pointer group shadow-sm">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#7a5642]">visibility_off</span>
                <span className="font-body font-bold text-[#4F4F4F]">Visibilidade do Perfil</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 group-hover:text-[#a37c69] transition-all">chevron_right</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-[#dcae96]/10 transition-colors cursor-pointer group shadow-sm">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#7a5642]">description</span>
                <span className="font-body font-bold text-[#4F4F4F]">Políticas de Dados</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 group-hover:text-[#a37c69] transition-all">chevron_right</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-10 mb-10 space-y-6">
          <h3 className="font-label text-[11px] font-bold uppercase tracking-[0.1em] text-[#a37c69] ml-2">Sobre o Sistema</h3>
          <div className="bg-surface-container-low rounded-3xl p-2 space-y-1 shadow-sm border border-outline-variant/20">
             <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl shadow-sm">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#7a5642]">info</span>
                <span className="font-body font-bold text-[#4F4F4F]">Versão do App</span>
              </div>
              <span className="text-xs font-bold font-label text-white bg-[#a37c69] px-3 py-1 rounded-full shadow-sm">v2.4.0</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-[#dcae96]/10 transition-colors cursor-pointer group shadow-sm">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#7a5642]">star</span>
                <span className="font-body font-bold text-[#4F4F4F]">Avalie nossa Solução</span>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 group-hover:text-[#a37c69] transition-all">open_in_new</span>
            </div>
          </div>
        </div>

        {/* Logout Action */}
        <button className="w-full mt-10 py-4 border border-[#c86161]/50 text-[#c86161] hover:bg-error-container/50 font-bold font-label tracking-widest uppercase text-sm rounded-full active:scale-95 transition-all flex items-center justify-center gap-3">
          <span className="material-symbols-outlined">logout</span>
          Sair da Conta
        </button>

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
        <a href="/admin/perfil" className="flex flex-col items-center justify-center bg-[#dcae96] text-white rounded-full px-5 py-1.5 shadow-md active:scale-90 duration-300">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-label font-bold text-[10px] uppercase tracking-wider mt-1">Perfil</span>
        </a>
      </nav>
    </div>
  );
}
