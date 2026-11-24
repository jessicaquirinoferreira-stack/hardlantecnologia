import {
  Award,
  Building2,
  Clock,
  FileText,
  ShieldAlert,
  Wrench,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { DIFFERENTIATORS } from '../data/siteData';

const DIFF_ICON_MAP = {
  Award,
  Clock,
  ShieldAlert,
  Wrench,
  FileText,
  Building2,
} as const;

export function WhyChooseSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="por-que-escolher-titulo"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C0D14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#007BFF] dark:text-[#00D4FF] mb-3">
            Diferenciais Hard-Lan
          </p>
          <h2
            id="por-que-escolher-titulo"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white [text-wrap:balance]"
          >
            Por que empresas escolhem a Hard-Lan desde 2002
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Combinamos experiência prática em hardware e redes com rigor corporativo em segurança e continuidade.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((item, idx) => {
            const Icon = DIFF_ICON_MAP[item.iconName];
            return (
              <motion.div
                key={item.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#11131C] p-6 sm:p-7 transition-colors duration-200 hover:border-[#007BFF]/40 dark:hover:border-[#00D4FF]/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-[#007BFF] dark:text-[#00D4FF]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500 tabular-nums">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
