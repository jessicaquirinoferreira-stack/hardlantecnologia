import {
  ArrowUpRight,
  Cpu,
  DatabaseBackup,
  Headphones,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Wifi,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SERVICES, type ServiceItem } from '../data/siteData';

const ICON_MAP = {
  Headphones,
  Server,
  Layers,
  ShieldCheck,
  Wifi,
  Cpu,
  Network,
  DatabaseBackup,
} as const;

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="servicos"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A0A0F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#007BFF] dark:text-[#00D4FF] mb-3">
              Capacidades e Soluções
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white [text-wrap:balance]">
              Infraestrutura de TI projetada para desempenho, segurança e escala
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Do suporte diário às estações ao projeto completo de servidores, virtualização e defesa cibernética.
          </p>
        </div>

        {/* Asymmetric bento-aware 12-column grid for the 8 services */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName];
            // First two flagship services span 6 cols each on desktop; remaining 6 span 4 cols each
            const spanClass = service.featured ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <motion.article
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.05, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className={`${spanClass} group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10121B] p-6 sm:p-7 transition-colors duration-200 hover:border-[#007BFF]/45 dark:hover:border-[#00D4FF]/45`}
              >
                {/* Subtle controlled top-right hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#00D4FF]/0 blur-2xl transition-opacity duration-300 group-hover:bg-[#00D4FF]/12"
                />

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] text-[#007BFF] dark:text-[#00D4FF] transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-medium text-slate-400 dark:text-slate-500 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#007BFF] dark:text-[#00D4FF] hover:underline underline-offset-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded px-1 -ml-1 whitespace-nowrap"
                  >
                    Saiba mais
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
