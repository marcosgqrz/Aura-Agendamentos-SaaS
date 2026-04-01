"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin");
  };

  return (
    <div className="bg-surface font-body text-on-surface-variant selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Login Container: Centered Layout */}
      <main className="min-h-screen flex items-center justify-center p-6 bg-surface-dim relative overflow-hidden animate-[fadeIn_0.5s_ease-out_forwards]">
        
        {/* Content Card */}
        <section className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(122,86,66,0.1)] overflow-hidden z-10 relative">
          
          {/* Branding Header */}
          <div className="px-10 pt-16 pb-8 text-center">
            <div className="flex flex-col items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center rose-gold-gradient text-white shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  spa
                </span>
              </div>
              <div className="space-y-1">
                <h1 className="font-headline text-3xl font-extrabold tracking-tighter text-on-surface">
                  Aura Agendamentos
                </h1>
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-semibold">
                  Exclusividade & Bem-Estar
                </p>
              </div>
            </div>
            
            <h2 className="font-headline text-xl font-bold text-on-surface-variant mb-2">
              Bem-vindo à sua clínica
            </h2>
            <p className="font-body text-sm text-on-surface-variant/70">
              Acesse sua agenda profissional e gestão de clientes.
            </p>
          </div>

          {/* Login Form */}
          <form className="px-10 pb-16 space-y-6" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="space-y-2 group">
              <label 
                className="font-label text-[10px] uppercase tracking-widest font-bold text-on-surface-variant px-1 group-focus-within:text-primary transition-colors" 
                htmlFor="email"
              >
                Email Profissional
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-lg group-focus-within:text-primary transition-colors">
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="exemplo@clinica.com"
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcae96]/50 focus:border-[#dcae96] focus:bg-surface-container-lowest text-on-surface transition-all placeholder:text-outline-variant font-medium"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2 group">
              <div className="flex justify-between items-center px-1">
                <label 
                  className="font-label text-[10px] uppercase tracking-widest font-bold text-on-surface-variant group-focus-within:text-primary transition-colors" 
                  htmlFor="password"
                >
                  Senha
                </label>
                <a className="font-label text-[10px] uppercase tracking-widest font-bold text-[#dcae96] hover:text-[#7a5642] transition-colors" href="#">
                  Esqueci minha senha
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-lg group-focus-within:text-primary transition-colors">
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcae96]/50 focus:border-[#dcae96] focus:bg-surface-container-lowest text-on-surface transition-all placeholder:text-outline-variant font-medium"
                  required
                  defaultValue="aura123"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-[#dcae96] text-white font-headline font-bold py-4 px-6 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 parent-group focus:outline-none focus:ring-4 focus:ring-[#dcae96]/30 overflow-hidden relative"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] hover:animate-[shimmer_1.5s_infinite]"></div>
                Entrar
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Assistance */}
            <div className="pt-8 text-center">
              <p className="font-body text-xs text-on-surface-variant/50">
                Não possui uma conta?{" "}
                <a className="text-[#7a5642] font-bold hover:underline decoration-[#dcae96] underline-offset-4 transition-colors" href="#">
                  Contatar suporte
                </a>
              </p>
            </div>
          </form>

          {/* Footer Branding */}
          <div className="bg-surface-container-low py-4 px-10 text-center border-t border-outline-variant/10">
            <p className="font-headline text-[11px] font-bold text-on-surface-variant tracking-tight">
              Stética Agendamentos © {new Date().getFullYear()}
            </p>
          </div>
        </section>

        {/* Decorative Elements for "Editorial" Feel */}
        <div className="absolute top-12 left-12 hidden lg:block opacity-5 pointer-events-none z-0">
          <span className="font-headline text-[12rem] font-extrabold leading-none tracking-tighter text-[#7a5642] select-none">
            AURA
          </span>
        </div>
        
        <div className="absolute bottom-12 right-12 hidden lg:block text-right opacity-40 pointer-events-none z-0">
          <p className="font-headline text-lg font-bold text-[#7a5642]">01 / ESTÉTICA</p>
          <div className="w-24 h-1 bg-[#dcae96] mt-2 ml-auto shadow-sm"></div>
        </div>
        
        {/* Subtle Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#dcae96] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7a5642] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      </main>
    </div>
  );
}
