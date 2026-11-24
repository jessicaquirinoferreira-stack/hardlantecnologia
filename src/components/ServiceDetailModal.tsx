import { useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { ServiceItem } from '../data/siteData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestServiceQuote: (serviceTitle: string) => void;
}

export function ServiceDetailModal({
  service,
  onClose,
  onRequestServiceQuote,
}: ServiceDetailModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!service) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#10121B] p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-medium text-[#007BFF] dark:text-[#00D4FF]">
                  Serviço {service.number} · Hard-Lan Tecnologia
                </p>
                <h3
                  id="service-modal-title"
                  className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
                >
                  {service.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar detalhes do serviço"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {service.fullDesc}
            </p>

            <div className="mt-6 border-t border-slate-200 dark:border-white/10 pt-5">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                Escopo técnico e entregas incluídas
              </h4>
              <ul className="mt-3 space-y-2.5">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#007BFF] dark:text-[#00D4FF]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl bg-slate-100 dark:bg-white/[0.04] px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">Indicado para: </span>
              {service.idealFor}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[42px] items-center justify-center rounded-lg border border-slate-300 dark:border-white/15 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={() => onRequestServiceQuote(service.title)}
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00B4E6] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,123,255,0.3)] hover:brightness-110 transition-all cursor-pointer"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
