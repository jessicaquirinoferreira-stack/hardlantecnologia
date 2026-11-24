import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { COMPANY } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onExploreServices: () => void;
}

function TechParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || shouldReduceMotion) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }

    const particles: Particle[] = [];
    const particleCount = 46;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.7,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.35)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 145, 255, ${0.14 * (1 - dist / 135)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = window.requestAnimationFrame(render);
    };

    animId = window.requestAnimationFrame(render);
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70 dark:opacity-90"
    />
  );
}

const HERO_PILLARS = [
  { metric: '+23 anos', label: 'Atuação ininterrupta desde 2002' },
  { metric: 'Presencial & Remoto', label: 'São José do Rio Preto e região' },
  { metric: 'Infraestrutura 360°', label: 'Servidores, VM, Redes e Cybersegurança' },
  { metric: 'Padrão Corporativo', label: 'Projetos entregues para Itaú e grandes redes' },
];

export function HeroSection({ onRequestQuote, onExploreServices }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-slate-50 dark:bg-[#0A0A0F]"
    >
      {/* Subtle technological grid & ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_20%,#000_55%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#007BFF]/15 via-[#00D4FF]/12 to-indigo-600/10 blur-3xl"
      />

      <TechParticleCanvas />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Value Proposition */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-xs sm:text-sm font-medium text-[#007BFF] dark:text-[#00D4FF] mb-4">
              {COMPANY.cityState} <span aria-hidden="true" className="mx-1.5 text-slate-400 dark:text-slate-600">·</span> Desde {COMPANY.since}
            </p>

            <h1 className="font-display text-[clamp(2.25rem,3.9vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-slate-950 dark:text-white [text-wrap:balance]">
              Soluções de TI que mantêm sua empresa sempre online desde 2002
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Especialistas em suporte T.I., servidores, virtualização, cybersegurança e Wi-Fi seguro em São José do Rio Preto.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00B4E6] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(0,123,255,0.35)] hover:shadow-[0_0_38px_rgba(0,212,255,0.5)] hover:brightness-110 active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
              >
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-[#007BFF]/50 dark:hover:border-[#00D4FF]/50 hover:bg-slate-100 dark:hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
              >
                Nossos Serviços
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          {/* Right column: High-impact 16:9 Enterprise Infrastructure Photography */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-[#0E1018] shadow-2xl shadow-black/20 dark:shadow-black/60 min-h-[280px] sm:min-h-[360px] lg:h-full">
              <ResilientImage
                src="/src/assets/images/hero_datacenter_rack_1795555501305.jpg"
                alt="Rack de servidores e cabeamento estruturado corporativo em sala técnica de alta disponibilidade"
                priority
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Measured scrim for crisp contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-[#0A0A0F]/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-mono text-[#00D4FF] tracking-wide">
                  ENGENHARIA DE INFRAESTRUTURA · SÃO JOSÉ DO RIO PRETO
                </p>
                <p className="mt-1 text-sm sm:text-base font-medium text-white">
                  Arquitetura física e lógica projetada para continuidade empresarial.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width 4-column architectural trust strip below the hero split */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-200 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HERO_PILLARS.map((item) => (
            <div
              key={item.metric}
              className="bg-white dark:bg-[#0F1118] px-5 py-4 transition-colors duration-150 hover:bg-slate-50 dark:hover:bg-[#131620]"
            >
              <div className="font-display text-base font-bold text-slate-900 dark:text-white tabular-nums">
                {item.metric}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
