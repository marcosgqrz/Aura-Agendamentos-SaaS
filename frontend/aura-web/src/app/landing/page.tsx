"use client";

import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen selection:bg-[#dcae96] selection:text-white overflow-x-hidden">
      
      {/* Editorial Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-header border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="material-symbols-outlined text-[#7a5642] group-hover:rotate-45 transition-transform duration-500" style={{ fontVariationSettings: "'wght' 200, 'opsz' 32" }}>spa</span>
            <span className="font-headline tracking-[0.25em] text-xl font-extrabold text-[#4F4F4F]">AURA</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 font-label text-xs uppercase tracking-widest font-bold text-on-surface-variant">
            <a href="#experiencia" className="hover:text-[#a37c69] transition-colors">A Experiência</a>
            <a href="#tratamentos" className="hover:text-[#a37c69] transition-colors">Tratamentos</a>
            <a href="#sobre" className="hover:text-[#a37c69] transition-colors">Clínica</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/login" className="hidden md:block font-label text-xs uppercase tracking-widest font-bold text-[#4F4F4F] hover:text-[#a37c69] transition-colors">Área do Cliente</a>
            <a href="/" className="rose-gold-gradient text-white px-6 py-3 rounded-full font-label text-xs font-bold uppercase tracking-widest hover:shadow-[0_12px_30px_rgba(220,174,150,0.4)] transition-all active:scale-95 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              Agendar
            </a>
          </div>
        </div>
      </nav>

      <main className="animate-fade-in">
        
        {/* Hero Section: The Curated Canvas Approach */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#dcae96]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f0ece9]/40 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
            
            {/* Typography & Call to Action (Asymmetrical Layout) */}
            <div className="space-y-8 order-2 lg:order-1 pt-12 lg:pt-0">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                <span className="rose-gold-gradient text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">Novo</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Tecnologia Estética Avançada</span>
              </div>
              
              <h1 className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#4F4F4F] leading-[1.05] tracking-tighter">
                Sua beleza,<br/>
                <span className="text-[#a37c69] italic font-medium pr-4">curadoria</span>
                exclusiva.
              </h1>
              
              <p className="font-body text-lg text-on-surface-variant/80 max-w-md leading-relaxed">
                Elevamos o conceito de estética a uma experiência clínica premium, onde ciência e design convergem para revelar sua melhor versão.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <a href="/" className="rose-gold-gradient text-white text-center px-10 py-5 rounded-full font-label text-sm font-bold uppercase tracking-widest hover:shadow-[0_15px_40px_rgba(220,174,150,0.5)] transition-all active:scale-95 w-full sm:w-auto">
                  Agende sua Experiência
                </a>
                <a href="#tratamentos" className="bg-surface-container-lowest border border-outline-variant/30 text-[#4F4F4F] text-center px-10 py-5 rounded-full font-label text-sm font-bold uppercase tracking-widest hover:bg-[#f0ece9]/50 transition-colors w-full sm:w-auto">
                  Ver Protocolos
                </a>
              </div>
              
              <div className="flex items-center gap-6 pt-8 border-t border-outline-variant/20 max-w-md">
                <div className="flex -space-x-4">
                  {[
                    "AB6AXuBMlvO-Io9EBmVHLk_AVH05ZgSt4jzW_6Wh9yBrg3dLuNw-W0x8L6rhl1PzRF8i9XaBU9CdDAZwK3sh7obBb4QheFOp9QS5pFxWcfOrUpz31OTyjXuYPCYDuhjHik0qvL6O_a4QBMj5w1fKs1371slnIp4VSnUqAjraE5MQGxBIQiXNYCfFXK6rP1uQDYRiUIcNnnjV0_pA012Wb6mUVaHyAIqDUYQi3K-KvU3Bhmd7Xb4K8AQ0uXlBYv5gVkAd3M4d_kD01RKQizaw",
                    "AB6AXuDEW6ANQbZgQAITqd65NOVRWcWDvpHc3NkFJkHKKsiaDy8haUkrhCjlhWV3h9bnAJ5FqxFyaIP1naJFQvTECsRwLxdJ1YSj7VXiPzQIjYsGpaYXa5mARBKcLlicCeaJ0CrH_oI4QIP3R7eN9JvcaJdhjgTXoud7BOjyBkaw8YUAziT8nZBQ6oDnOEr7XDAo6yxGvDaFQk9UDp9IHSGxJZ0MslxaLO_XJn-4GnhO54EKAOM5rkOzvFBOfl4i-N6rQhK4gzyZ4a2iYZEH",
                    "AB6AXuClIhOkabMK55GprMcYowMfo5chvBtElLhJXFFQdzb9z2UptaEAB5LmOTtFKrYZkMuGWW9gHsxR47P6UrTU-9ovaCdew2b3o_QV5f-5Rf4twNBASetrWLT8kBPCzN6B4UNY21CRJr6Egf5KUVqAF8JQ3GHRtjkMDLuCo5fY3Q6HNf4Ie9ciHAVPiy3aGH2na8dPYJ5ewcUaamrp8j4ky4bT-d06NvcivbubXUFxVtGTr6_e1q1zqBX4KYwHek7F5nASlNIhBuB2nEiO"
                  ].map((img, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-surface overflow-hidden shadow-sm">
                      <img src={`https://lh3.googleusercontent.com/aida-public/${img}`} className="w-full h-full object-cover" alt="Client"/>
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center shadow-sm z-10">
                    <span className="font-headline font-bold text-xs text-[#7a5642]">4.9</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-[#7a5642] text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                  </div>
                  <p className="font-label text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60">+2.000 clientes satisfeitos</p>
                </div>
              </div>
            </div>

            {/* Immersive Photography (Layered Depth) */}
            <div className="relative order-1 lg:order-2 h-[500px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end">
              {/* Primary Image */}
              <div className="w-[85%] lg:w-[450px] h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(122,86,66,0.15)] relative z-20 transform translate-x-4 lg:-translate-x-12">
                <img 
                  alt="Aesthetic Treatment" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATDAQ8TslLTtAsFRFBSoa7rKXeHrn0vIcpBfW8j8-08DfYB9ZcmITcV3mBGoAiIlxGvmkUOwqUww4Mrj2nER48uKrr-EEY4jEmwQBlPm6oXxBz6JVuNq-1dVlsg9kP1Yef5cMpzQYa9pnYbKNcV74lh3se79cpDI8lPkwCP-rWCY6l8x2eiZfN-2UQZYKgfz6zJMEifx5-0m4ACNdBqHKWTQgCV_EZbRUNXxU_IdbLNDqFT9YP_y3LPS5jLi5mDuc5nInvc9UoyYsH"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Secondary Layered Image */}
              <div className="absolute top-10 right-0 w-[200px] lg:w-[280px] h-[250px] lg:h-[350px] rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-10 border-4 border-surface hidden sm:block">
                <img 
                  alt="Spa Detail" 
                  className="w-full h-full object-cover filter brightness-95" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_q3Xvy0tT9mRKmNa8bQZY-LGHl8ATE4wdnvVti8kI43pxVIMWVM4gT9FeQ7WGdAMPWPzYpMlDDkowjRRQ_m5egynFmSFGAOiWsGwkHA-kWtQHScEMaGtZYwSNJk2ubT0suK8PSEIaIEubGHPzqKaTm8fxmr6UB4xNz5FEpAGzKsX5RoQL2n_1_QYl3lGn9sBTVI-q6Ae4ctiObBYcdSxjNtd6BfULHrUnnxSWQJ79FJoZyAnWINwoKujo2xcWq1kPSsgRbuEf5I6S"
                />
              </div>

              {/* Floating Element */}
              <div className="absolute bottom-12 lg:bottom-28 right-4 lg:-right-4 bg-surface-container-lowest p-6 rounded-2xl shadow-[0_15px_40px_rgba(122,86,66,0.12)] z-30 animate-bounce" style={{animationDuration: "4s"}}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#dcae96]/20 rounded-full flex items-center justify-center text-[#7a5642]">
                     <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-[#4F4F4F]">Especialistas</h4>
                    <p className="font-label text-[10px] uppercase tracking-widest text-[#a37c69] font-bold">Certificação Ouro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature/Philosophy Section (No-Line Rule applied) */}
        <section id="experiencia" className="py-32 bg-surface-container-low mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
             <div className="text-center max-w-2xl mx-auto mb-20">
                <span className="font-label text-xs uppercase tracking-[0.2em] text-[#a37c69] mb-4 block font-bold">Nossa Filosofia</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-[#4F4F4F] tracking-tight">Onde o cuidado pessoal encontra a excelência.</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {/* Feature 1 */}
                <div className="bg-surface-container-lowest p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(122,86,66,0.03)] hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#f0ece9] flex items-center justify-center text-[#7a5642] mb-8">
                     <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: "'wght' 300"}}>psychology</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#4F4F4F] mb-4">Mapeamento Precision</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Não acreditamos em fórmulas prontas. Cada rosto passa por uma análise biométrica completa antes de qualquer intervenção.
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="bg-surface-container-lowest p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(122,86,66,0.03)] hover:-translate-y-2 transition-transform duration-500 delay-100">
                  <div className="w-16 h-16 rounded-full bg-[#f0ece9] flex items-center justify-center text-[#7a5642] mb-8">
                     <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: "'wght' 300"}}>diamond</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#4F4F4F] mb-4">Ativos Premium</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Utilizamos exclusivamente a mais alta linha de dermocosméticos globais, garantindo absorção profunda e resultados duradouros.
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="bg-surface-container-lowest p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(122,86,66,0.03)] hover:-translate-y-2 transition-transform duration-500 delay-200">
                  <div className="w-16 h-16 rounded-full bg-[#f0ece9] flex items-center justify-center text-[#7a5642] mb-8">
                     <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: "'wght' 300"}}>self_improvement</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#4F4F4F] mb-4">Ambiente Curado</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Desde a aromaterapia na recepção até o isolamento acústico das salas. Uma experiência sensorial para mente e corpo.
                  </p>
                </div>
             </div>
          </div>
        </section>

        {/* Sneak Peek Protocolos (Surface hierarchy stack) */}
        <section id="tratamentos" className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-label text-xs uppercase tracking-[0.2em] text-[#a37c69] mb-4 block font-bold">Catálogo de Alto Padrão</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-[#4F4F4F] tracking-tight max-w-lg">
                  Protocolos mais desejados.
                </h2>
              </div>
              <a href="/admin/servicos" className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest font-bold text-[#7a5642] hover:text-[#dcae96] transition-colors border-b-2 border-transparent hover:border-[#dcae96] pb-1 w-fit">
                Explorar Todos <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Protocol 1 */}
               <div className="group rounded-[2rem] overflow-hidden relative aspect-[4/3] shadow-[0_10px_30px_rgba(122,86,66,0.05)] cursor-pointer">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKJs7SHM34OPBi6u29gmor9ES0FLJFzVEHSMrjvFLG2YW-CkZIOXO6bFOjUcm9KULpWldzspeQuiz196ROV8zGm3D344uuK-odp2Oo2fvQIc1_5ArsN6ofWlZzS9GHP4cVqkT0RdYc7syvVEZP0skPBAH9aiTEdu3rii-Rn3IE0Vtbo3Vr0wCEvaI_UyiS1n-QcPRVdV9Q_phQxAUzFuPsgwuLvxm48x9i8WT4Lg2yY_-Wh-lyPHJHqn_jPU2Vwb8YRvLYcxGd6x8l" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Drenagem" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
                    <div className="overflow-hidden">
                      <h3 className="font-headline text-3xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">Drenagem Detoxificadora</h3>
                      <p className="font-body text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6 max-w-sm">
                        Redução imediata de edemas através de manobras manuais rítmicas avançadas.
                      </p>
                      <button className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-6 py-2 rounded-full font-label text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-[#7a5642] transition-colors mt-2">Agendar - R$ 100</button>
                    </div>
                  </div>
               </div>
               {/* Protocol 2 */}
               <div className="group rounded-[2rem] overflow-hidden relative aspect-[4/3] shadow-[0_10px_30px_rgba(122,86,66,0.05)] cursor-pointer">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_q3Xvy0tT9mRKmNa8bQZY-LGHl8ATE4wdnvVti8kI43pxVIMWVM4gT9FeQ7WGdAMPWPzYpMlDDkowjRRQ_m5egynFmSFGAOiWsGwkHA-kWtQHScEMaGtZYwSNJk2ubT0suK8PSEIaIEubGHPzqKaTm8fxmr6UB4xNz5FEpAGzKsX5RoQL2n_1_QYl3lGn9sBTVI-q6Ae4ctiObBYcdSxjNtd6BfULHrUnnxSWQJ79FJoZyAnWINwoKujo2xcWq1kPSsgRbuEf5I6S" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Limpeza" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
                    <div className="absolute top-8 right-8">
                       <span className="rose-gold-gradient text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Premium</span>
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="font-headline text-3xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">Limpeza Deep Glow</h3>
                      <p className="font-body text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6 max-w-sm">
                        Extração indolor associada a nanotecnologia em vitaminas para luminosidade instantânea.
                      </p>
                      <button className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-6 py-2 rounded-full font-label text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-[#7a5642] transition-colors mt-2">Agendar - R$ 100</button>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Footer / CTA Footer */}
        <footer className="bg-surface-container-low border-t border-outline-variant/20 pt-20 pb-10">
           <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-[#dcae96] text-[64px] mb-8" style={{ fontVariationSettings: "'wght' 100" }}>spa</span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-[#4F4F4F] tracking-tight mb-8 max-w-2xl">
                O seu tempo de cuidar de si começa aqui.
              </h2>
              <a href="/" className="rose-gold-gradient text-white px-10 py-5 rounded-full font-label text-sm font-bold uppercase tracking-widest shadow-[0_15px_40px_rgba(220,174,150,0.4)] active:scale-95 transition-all mb-20 animate-pulse-slow">
                Quero Agendar Minha Sessão
              </a>

              <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/30 gap-6">
                <span className="font-headline tracking-[0.2em] font-extrabold text-[#a37c69]">AURA CLINIC SYSTEM</span>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                   © 2024 Aura Agendamentos. Todos os direitos reservados.
                </p>
                <div className="flex gap-4">
                  <a href="/admin" className="font-label text-[10px] uppercase tracking-widest text-[#7a5642] hover:text-[#dcae96] font-bold">Acesso Admin</a>
                </div>
              </div>
           </div>
        </footer>

      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
