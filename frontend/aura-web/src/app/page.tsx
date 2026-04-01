"use client";

import { useState } from "react";
import Image from "next/image";

// Dados baseados no banco de dados e layout
const servicosDb = [
  { id: 1, name: "Harmonização Facial", price: "R$ 1.200", icon: "face", category: "Premium", min: "60", isPremium: true },
  { id: 2, name: "Drenagem Linfática", price: "R$ 100", icon: "spa", category: "Corporal", min: "60" },
  { id: 3, name: "Massagem Relaxante", price: "R$ 100", icon: "self_improvement", category: "Corporal", min: "60" },
  { id: 4, name: "Limpeza de Pele", price: "R$ 100", icon: "clean_hands", category: "Facial", min: "90" },
  { id: 5, name: "Ventosaterapia", price: "R$ 100", icon: "water_drop", category: "Terapêutico", min: "45" },
  { id: 6, name: "Hidra Gloss", price: "R$ 90", icon: "water", category: "Lábios", min: "30" },
  { id: 7, name: "Brow Lamination", price: "R$ 60", icon: "brush", category: "Sobrancelha", min: "45" },
  { id: 8, name: "Lash Lifting", price: "R$ 60", icon: "visibility", category: "Cílios", min: "45" },
  { id: 9, name: "Spa dos Pés", price: "R$ 50", icon: "footprint", category: "Relaxamento", min: "40" },
  { id: 10, name: "Designer de Sobrancelhas", price: "R$ 25", icon: "content_cut", category: "Sobrancelha", min: "30" },
];

const profissionaisDb = [
  { id: 1, name: "Dra. Marina Costa", role: "Especialista Exclusiva", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUpBNN0DH5ByW4h5ljeO6biMApd3p-zRvjOmQDd1FPB1mIn92A3dTudXPB1HSSNiSjwYaUHkL6SseLKQGlP9WShfmRGbBo38nz7kxMcQuiEkFeEMHQ9ktcVM-whI17InPxsOlc-hhf1RA6IoL7i3jCvDZWytg6R7Cl6BL6nlCWbtLpRZeZiMEOkH3He3CNdyQYKdDGkPovdjVykkRBtEqHji7BERLbSYkiGI9Lp_fE9Kh1MxyroYc3W54-aWa4Uf8HnG4RbMyscksu", featured: true },
  { id: 2, name: "Dra. Helena Vaz", role: "Biomédica", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCauMq_OpCZzxjlHgNTfRbEQvtncJVROS3Vz7IUjgncGQXxwlu49NBAQpeDbNSgpk8R7YCKD5tHJ9eIhgemptYJgL56S_y5apdc3OEPe3ubUK0DGAzwIUsUBxRR649rqztOtmkzpBTazPKO71ZMBENGG-3uPeXDgKWF2-cqm23lfz0UlWx_gY9MTOdil8xERv5zKbcz1N6c2gcl60UwRg5ly3OmM8RFDPg_IgDW486vOlCfTfi1-fghPCI7iMEVPXnk4Zp-LC64Tboj" },
];

const disponibilidades = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedProf, setSelectedProf] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 glass-header">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-md mx-auto">
          <button
            onClick={currentStep > 1 ? handleBack : undefined}
            className={`text-[#7a5642] hover:opacity-70 transition-opacity active:scale-95 duration-150 ${currentStep === 1 && "opacity-0 pointer-events-none"}`}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          
          <h1 className="font-headline font-bold text-lg tracking-tight text-[#7a5642]">
            {currentStep === 1 && "Agendamento"}
            {currentStep === 2 && "Profissional"}
            {currentStep === 3 && "Data & Hora"}
          </h1>
          <div className="w-6"></div>
        </div>
        
        {/* Progress Bar Header */}
        <div className="w-full bg-surface-container-low h-1 max-w-md mx-auto">
           <div 
             className="bg-[#dcae96] h-1 transition-all duration-500 ease-in-out" 
             style={{ width: `${(currentStep / 3) * 100}%` }}
           ></div>
        </div>
      </header>

      <main className="pt-24 pb-32 max-w-md mx-auto px-6 space-y-10">
        
        {/* Passo 1 - Serviço */}
        {currentStep === 1 && (
          <section className="animate-[fadeIn_0.4s_ease-out_forwards]">
            <div className="mb-6">
              <span className="font-label text-[10px] uppercase tracking-widest font-semibold text-primary mb-1 block">
                Passo 01
              </span>
              <h2 className="font-headline text-2xl font-extrabold text-on-surface leading-tight">
                Escolha o seu Tratamento
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {servicosDb.map((servico) => (
                <div
                  key={servico.id}
                  onClick={() => { setSelectedService(servico.id); handleNextStep(); }}
                  className={`cursor-pointer rounded-full p-1 transition-all hover:scale-[1.02] ${
                    servico.isPremium 
                      ? 'premium-border shadow-[0_-12px_40px_rgba(122,86,66,0.06)] bg-surface-container-lowest' 
                      : 'bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-transparent hover:border-primary-container/30'
                  } ${selectedService === servico.id ? 'ring-2 ring-primary-container ring-offset-2 ring-offset-surface' : ''}`}
                >
                  <div className="flex items-center justify-between px-5 py-3">
                    <div className="flex items-center gap-4">
                      <div className={`${servico.isPremium ? 'rose-gold-gradient text-white' : 'bg-surface-container-low text-primary'} w-12 h-12 rounded-full flex items-center justify-center shadow-sm`}>
                        <span className="material-symbols-outlined" style={servico.isPremium ? { fontVariationSettings: "'FILL' 1" } : {}}>
                          {servico.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-on-surface">
                          {servico.name}
                        </h3>
                        <p className="text-xs text-on-surface-variant">
                          {servico.min} min • {servico.category}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-2">
                      <span className={`font-headline font-bold ${servico.isPremium ? 'text-primary' : 'text-on-surface'} mr-1`}>{servico.price}</span>
                      <button className={`w-8 h-8 rounded-full flex justify-center items-center transition-colors ${selectedService === servico.id ? 'bg-[#dcae96] text-white' : (servico.isPremium ? 'bg-primary-container text-white' : 'border border-primary-container text-primary-container')}`}>
                        <span className="material-symbols-outlined text-sm">{selectedService === servico.id ? 'check' : 'add'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Passo 2 - Profissional */}
        {currentStep === 2 && (
          <section className="animate-[fadeIn_0.5s_ease-out_forwards]">
            <div className="mb-6">
              <span className="font-label text-[10px] uppercase tracking-widest font-semibold text-primary mb-1 block">
                Passo 02
              </span>
              <h2 className="font-headline text-2xl font-extrabold text-on-surface leading-tight">
                Com quem deseja agendar?
              </h2>
            </div>
            <div className="flex overflow-x-auto pb-6 gap-6 no-scrollbar pt-2 px-2 -mx-2">
              {profissionaisDb.map((prof) => (
                <div 
                  key={prof.id} 
                  onClick={() => { setSelectedProf(prof.id); handleNextStep(); }}
                  className={`flex-shrink-0 w-44 cursor-pointer group p-3 rounded-2xl transition-all ${selectedProf === prof.id ? 'bg-surface-container-low shadow-inner' : 'hover:bg-surface-container-low/50'}`}
                >
                  <div className="relative">
                    <div className={`aspect-[3/4] rounded-[2rem] overflow-hidden mb-3 transition-all ${prof.featured ? 'border-2 border-[#dcae96]' : ''} ${selectedProf === prof.id ? 'ring-4 ring-primary-container ring-offset-2 shadow-lg' : ''}`}>
                      <img
                        src={prof.img}
                        alt={prof.name}
                        className={`w-full h-full object-cover transition-all duration-500 ${selectedProf !== prof.id && !prof.featured ? 'grayscale group-hover:grayscale-0' : ''} group-hover:scale-110`}
                      />
                    </div>
                    {prof.featured && (
                      <div className="absolute top-4 right-4 rose-gold-gradient w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      </div>
                    )}
                     {selectedProf === prof.id && (
                      <div className="absolute bottom-4 right-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <span className="material-symbols-outlined text-sm">check</span>
                      </div>
                    )}
                  </div>
                  <h3 className={`font-headline text-center transition-all ${selectedProf === prof.id ? 'font-black text-primary' : 'font-bold text-on-surface'}`}>
                    {prof.name}
                  </h3>
                  <p className="text-[10px] text-center font-label uppercase tracking-widest text-[#dcae96] font-bold mt-1">
                    {prof.role}
                  </p>
                </div>
              ))}
               <div 
                  onClick={() => { setSelectedProf(99); handleNextStep(); }}
                  className={`flex-shrink-0 w-44 cursor-pointer group p-3 rounded-2xl transition-all ${selectedProf === 99 ? 'bg-surface-container-low shadow-inner' : 'hover:bg-surface-container-low/50'}`}
                >
                  <div className="relative">
                    <div className={`aspect-[3/4] rounded-[2rem] overflow-hidden mb-3 bg-surface-container-lowest border border-dashed border-stone-300 flex justify-center items-center transition-all ${selectedProf === 99 ? 'ring-4 ring-primary-container ring-offset-2' : ''}`}>
                      <div className="w-16 h-16 rounded-full bg-surface-variant flex justify-center items-center group-hover:bg-[#dcae96] group-hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-2xl">event_available</span>
                      </div>
                    </div>
                  </div>
                  <h3 className={`font-headline text-center opacity-70 group-hover:opacity-100 transition-all ${selectedProf === 99 ? 'font-black text-primary opacity-100' : 'font-bold text-on-surface'}`}>
                    Primeiro Disponível
                  </h3>
                  <p className="text-[10px] text-center font-label uppercase tracking-widest text-on-surface-variant opacity-70 group-hover:opacity-100 mt-1">
                    Qualquer profissional
                  </p>
                </div>
            </div>
          </section>
        )}

        {/* Passo 3 - Agenda */}
        {currentStep === 3 && (
          <section className="animate-[fadeIn_0.5s_ease-out_forwards]">
            <div className="mb-6">
              <span className="font-label text-[10px] uppercase tracking-widest font-semibold text-primary mb-1 block">
                Passo 03
              </span>
              <h2 className="font-headline text-2xl font-extrabold text-on-surface leading-tight">
                Quando deseja vir?
              </h2>
            </div>
            
             {/* Resumo da Seleção Atual */}
             <div className="bg-surface-container-low rounded-2xl p-4 mb-6 flex items-center justify-between shadow-sm">
                <div>
                  <p className="text-xs text-on-surface-variant font-label uppercase tracking-widest mb-1">Serviço</p>
                  <p className="font-headline font-bold text-sm text-primary">{servicosDb.find(s => s.id === selectedService)?.name}</p>
                </div>
                <div className="text-right border-l border-stone-300 pl-4">
                  <p className="text-xs text-on-surface-variant font-label uppercase tracking-widest mb-1">Profissional</p>
                  <p className="font-headline font-bold text-sm text-primary">{selectedProf === 99 ? 'Qualquer' : profissionaisDb.find(p => p.id === selectedProf)?.name.split(' ')[0]}</p>
                </div>
             </div>

            <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-[0_-12px_40px_rgba(122,86,66,0.06)] mb-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-headline font-bold text-primary">Maio, 2026</h4>
                <div className="flex gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low text-primary hover:bg-[#dcae96] hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low text-primary hover:bg-[#dcae96] hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-y-4 text-center">
                {["D", "S", "T", "Q", "Q", "S", "S"].map((day) => (
                  <span key={day} className="text-[10px] font-bold text-[#dcae96] tracking-widest uppercase">
                    {day}
                  </span>
                ))}
                
                {/* Dummy Dates */}
                <span className="text-sm font-semibold opacity-30 py-2">12</span>
                <span className="text-sm font-semibold opacity-30 py-2">13</span>
                {[14, 15, 16, 17, 18].map(date => (
                  <div key={date} onClick={() => setSelectedDate(date)} className="relative flex flex-col items-center cursor-pointer py-1">
                    <span className={`text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                      selectedDate === date 
                        ? 'bg-[#dcae96] text-white shadow-lg scale-110' 
                        : 'text-on-surface hover:bg-surface-container-low'
                    }`}>
                      {date}
                    </span>
                    {date === 15 && selectedDate !== 15 && (
                      <div className="absolute bottom-1 w-1 h-1 bg-[#dcae96] rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Time Slots (Mostrados apenas se uma data foi escolhida) */}
            {selectedDate && (
               <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
                  <h4 className="font-headline font-bold text-primary mb-4 text-sm">Horários Disponíveis</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {disponibilidades.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-2 rounded-full text-sm font-bold transition-all active:scale-95 border ${
                          selectedTime === time
                            ? "bg-[#dcae96] text-white border-[#dcae96] shadow-lg"
                            : "bg-transparent text-on-surface-variant border-surface-container-high hover:border-[#dcae96] hover:text-[#dcae96]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
               </div>
            )}
          </section>
        )}

        {/* Floating Confirm Button (Step 3 only) */}
        {currentStep === 3 && selectedDate && selectedTime && (
          <div className="fixed bottom-24 left-0 w-full px-6 max-w-md mx-auto z-40 bg-gradient-to-t from-surface to-transparent pt-10 pb-4 animate-[fadeIn_0.5s_ease-out_forwards]">
            <button 
              onClick={() => alert(`Agendamento Confirmado!\nServiço: ${servicosDb.find(s=> s.id === selectedService)?.name}\nProfissional: ${selectedProf === 99 ? 'Qualquer' : profissionaisDb.find(p=>p.id === selectedProf)?.name}\nDia ${selectedDate} às ${selectedTime}`)}
              className="w-full bg-[#7a5642] text-white font-headline font-bold text-lg py-5 rounded-full shadow-[0_20px_50px_rgba(122,86,66,0.4)] hover:shadow-xl hover:opacity-95 active:scale-95 transition-all outline-none flex justify-center items-center gap-2"
            >
              <span className="material-symbols-outlined">event_available</span>
              Confirmar Reserva
            </button>
          </div>
        )}
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-2xl rounded-t-[2rem] z-50 border-t border-stone-100 shadow-[0_-12px_40px_rgba(122,86,66,0.06)] flex justify-around items-center px-6 pb-6 pt-2 max-w-md mx-auto right-0">
        <a href="#" className="flex flex-col items-center justify-center text-stone-400 p-3 hover:text-[#7a5642] transition-colors">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Início</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-stone-400 p-3 hover:text-[#7a5642] transition-colors">
          <span className="material-symbols-outlined">search</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Explorar</span>
        </a>
        <a href="#" onClick={() => { setCurrentStep(1); setSelectedService(null); setSelectedProf(null); setSelectedDate(null); setSelectedTime(null); window.scrollTo(0,0); }} className="flex flex-col items-center justify-center bg-[#dcae96] text-white rounded-[1.2rem] p-4 active:scale-90 transition-transform duration-300 shadow-md transform -translate-y-4">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-stone-400 p-3 hover:text-[#7a5642] transition-colors">
          <span className="material-symbols-outlined">event</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Sessões</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-stone-400 p-3 hover:text-[#7a5642] transition-colors">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-semibold mt-1">Perfil</span>
        </a>
      </nav>
    </div>
  );
}
