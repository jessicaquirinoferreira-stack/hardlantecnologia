import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { COMPANY } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ target, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(shouldReduceMotion ? target : 0);

  useEffect(() => {
    if (!inView || shouldReduceMotion) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    const duration = 900;
    let rafId = 0;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [inView, target, shouldReduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

const ABOUT_STATS = [
  {
    id: 'years',
    renderValue: () => <AnimatedCounter target={23} prefix="+" />,
    unit: 'anos de mercado',
    detail: 'Operação contínua em São José do Rio Preto desde 2002.',
  },
  {
    id: 'projects',
    renderValue: () => <AnimatedCounter target={450} prefix="+" />,
    unit: 'projetos entregues',
    detail: 'Servidores, virtualização, redes estruturadas e Wi-Fi seguro.',
  },
  {
    id: 'clients',
    renderValue: () => <span>Itaú</span>,
    unit: 'e grandes empresas',
    detail: 'Projetos executados sob rigorosos padrões corporativos.',
  },
  {
    id: 'support',
    renderValue: () => <AnimatedCounter target={100} suffix="%" />,
    unit: 'suporte especializado',
    detail: 'Atendimento técnico presencial e remoto sem intermediários.',
  },
];

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="sobre"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C0D14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: Institutional Story & Bio */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-xs font-semibold tracking-wide text-[#007BFF] dark:text-[#00D4FF] mb-3">
              Sobre a Hard-Lan Tecnologia
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white [text-wrap:balance]">
              Mais de duas décadas mantendo operações críticas seguras e produtivas
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {COMPANY.bio}. Fundada em {COMPANY.since} no Jardim América, em São José do Rio Preto, a Hard-Lan nasceu com foco técnico profundo em hardware, redes e servidores corporativos.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Ao longo de mais de 23 anos de trajetória, evoluímos junto às exigências do mercado corporativo: de estações de trabalho e cabeamento estruturado à virtualização de servidores, firewalls avançados, Wi-Fi segmentado e continuidade de negócios para instituições financeiras como o Itaú, clínicas, indústrias e escritórios regionais.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Sede própria:</span>{' '}
                {COMPANY.street}
              </div>
              <div className="font-mono text-xs sm:text-sm tabular-nums">
                <span className="font-sans font-semibold text-slate-900 dark:text-white">CNPJ:</span>{' '}
                {COMPANY.cnpj}
              </div>
            </div>
          </motion.div>

          {/* Right: Documentary Team & Hardware Photography */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-[#0F1118] min-h-[280px] sm:min-h-[340px] lg:h-full">
              <ResilientImage
                src="/src/assets/images/about_hardlan_team_uniform_1795556862561.jpg"
                alt="Especialistas da Hard-Lan Tecnologia uniformizados realizando diagnóstico técnico em rack de servidores"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/85 via-[#0A0A0F]/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-mono text-[#00D4FF]">
                  ENGENHARIA PRESENCIAL &amp; REMOTA
                </p>
                <p className="mt-1 text-sm sm:text-base font-medium text-white">
                  Diagnóstico preciso, execução limpa e acompanhamento direto com quem entende do seu ambiente.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Animated Counter Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#11131C] p-6 transition-colors duration-200 hover:border-[#007BFF]/40 dark:hover:border-[#00D4FF]/40"
            >
              <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white group-hover:text-[#007BFF] dark:group-hover:text-[#00D4FF] transition-colors duration-200">
                {stat.renderValue()}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                {stat.unit}
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
