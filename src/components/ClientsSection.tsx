import { Quote } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CLIENTS, TESTIMONIALS } from '../data/siteData';

function ItauWordmark() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EC7000] text-[#FFFF00] font-display text-xs font-extrabold tracking-tight shadow-sm"
      >
        Itaú
      </span>
      <span className="font-display text-base font-bold tracking-tight text-slate-900 dark:text-white">
        Itaú
      </span>
    </span>
  );
}

export function ClientsSection() {
  const shouldReduceMotion = useReducedMotion();
  const marqueeItems = [...CLIENTS, ...CLIENTS];

  return (
    <section
      id="clientes"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A0A0F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#007BFF] dark:text-[#00D4FF] mb-3">
            Clientes e Confiança
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white [text-wrap:balance]">
            Empresas que confiam sua infraestrutura à Hard-Lan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Do setor bancário com o Itaú a indústrias, clínicas e escritórios corporativos que exigem disponibilidade contínua.
          </p>
        </div>

        {/* Infinite Marquee Logo Wall */}
        <div className="marquee-wrapper relative mt-12 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10121B] py-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-white dark:from-[#10121B] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-white dark:from-[#10121B] to-transparent"
          />

          <div className="animate-marquee items-center gap-6 px-3">
            {marqueeItems.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex min-w-[220px] items-center justify-between gap-4 rounded-xl border border-slate-200/80 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02] px-5 py-3.5"
              >
                <div>
                  {client.name === 'Itaú' ? (
                    <ItauWordmark />
                  ) : (
                    <span className="font-display text-sm sm:text-base font-bold tracking-tight text-slate-800 dark:text-slate-100 whitespace-nowrap">
                      {client.name}
                    </span>
                  )}
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {client.sector}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <motion.blockquote
              key={item.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10121B] p-6 sm:p-7"
            >
              <div>
                <Quote
                  className="h-6 w-6 text-[#007BFF]/60 dark:text-[#00D4FF]/60"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                  “{item.quote}”
                </p>
              </div>

              <footer className="mt-6 pt-5 border-t border-slate-100 dark:border-white/[0.06]">
                <div className="flex items-center gap-3.5">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#007BFF]/25 dark:border-[#00D4FF]/25 bg-gradient-to-br from-[#007BFF]/15 to-[#00D4FF]/10 font-display text-sm font-bold text-[#007BFF] dark:text-[#00D4FF]"
                  >
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-sm font-bold text-slate-950 dark:text-white truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {item.role} · {item.company}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs font-mono text-[#007BFF] dark:text-[#00D4FF]">
                  {item.contextMetric}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
