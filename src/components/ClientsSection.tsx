import { ArrowLeft, Camera, Mic, MoreVertical, Paperclip, Phone, Smile, Video } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CLIENTS, TESTIMONIALS, type Testimonial } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

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

function DoubleCheckReadIcon() {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="inline-block shrink-0"
    >
      <path
        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374l-.337-.273Zm3.621 0a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.2-1.134-.635.78 1.56 1.56a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374l-.361-.273Z"
        fill="#53BDEB"
      />
    </svg>
  );
}

// Subtle WhatsApp dark wallpaper pattern encoded cleanly as an inline SVG data URI
const WHATSAPP_WALLPAPER_BG =
  "url(\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.035' stroke-width='1.2'%3E%3Ccircle cx='22' cy='24' r='7'/%3E%3Cpath d='M75 18h14v10H75z'/%3E%3Cpath d='M52 54l8-6 8 6-3 9h-10z'/%3E%3Cpath d='M18 82c4-5 11-5 15 0'/%3E%3Ccircle cx='96' cy='78' r='6'/%3E%3Cpath d='M62 98l12-6'/%3E%3Cpath d='M95 44l8 8m0-8l-8 8'/%3E%3C/g%3E%3C/svg%3E\")";

function WhatsAppScreenshotCard({ item, index }: { item: Testimonial; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col"
    >
      {/* Realistic Mobile WhatsApp Frame */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-[22px] border border-slate-300 dark:border-white/15 bg-[#0B141A] shadow-xl shadow-black/25">
        {/* Android / Mobile Status Bar Strip */}
        <div className="flex items-center justify-between bg-[#1F2C34] px-4 pt-2 pb-1 text-[10px] font-mono text-slate-300/80 select-none">
          <span>{item.messages[item.messages.length - 1]?.time ?? '16:20'}</span>
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <span className="inline-block h-2.5 w-4 rounded-[2px] border border-slate-300/70 p-[1px]">
              <span className="block h-full w-3/4 bg-slate-200/90" />
            </span>
          </div>
        </div>

        {/* Authentic WhatsApp Chat Header */}
        <div className="flex items-center justify-between gap-2 bg-[#1F2C34] px-3 py-2.5 border-b border-black/20">
          <div className="flex items-center gap-2 min-w-0">
            <ArrowLeft className="h-4 w-4 shrink-0 text-[#E9EDEF]" aria-hidden="true" />
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-slate-700">
              <ResilientImage
                src={item.avatar}
                alt={`Foto de perfil de ${item.name}`}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="truncate text-[13.5px] font-semibold text-[#E9EDEF]">
                {item.contactHeader}
              </div>
              <div className="truncate text-[11px] text-[#8696A0]">
                {item.statusText}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[#E9EDEF]/90 pr-1" aria-hidden="true">
            <Video className="h-4 w-4" />
            <Phone className="h-3.5 w-3.5" />
            <MoreVertical className="h-4 w-4" />
          </div>
        </div>

        {/* Authentic WhatsApp Chat Canvas */}
        <div
          style={{ backgroundImage: WHATSAPP_WALLPAPER_BG }}
          className="flex flex-1 flex-col justify-between gap-2 bg-[#0B141A] px-3 py-3.5"
        >
          <div className="space-y-2">
            {/* Date separator */}
            <div className="flex justify-center pb-1">
              <span className="rounded-md bg-[#182229] px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-[#8696A0] shadow-sm">
                {item.dateLabel}
              </span>
            </div>

            {/* Message Bubbles */}
            {item.messages.map((msg, mIdx) => {
              const isHardLan = msg.from === 'hardlan';
              const prevSameSender = mIdx > 0 && item.messages[mIdx - 1].from === msg.from;

              return (
                <div
                  key={`${item.id}-msg-${mIdx}`}
                  className={`flex ${isHardLan ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`relative max-w-[86%] rounded-lg px-2.5 pt-1.5 pb-1.5 text-[12.5px] leading-[1.38] text-[#E9EDEF] shadow-sm ${
                      isHardLan
                        ? `bg-[#005C4B] ${prevSameSender ? '' : 'rounded-tr-none'}`
                        : `bg-[#202C33] ${prevSameSender ? '' : 'rounded-tl-none'}`
                    }`}
                  >
                    {/* Authentic top corner tail for first message in sequence */}
                    {!prevSameSender && (
                      <span
                        aria-hidden="true"
                        className={`absolute top-0 h-2.5 w-2 ${
                          isHardLan
                            ? '-right-1.5 bg-[#005C4B] [clip-path:polygon(0_0,100%_0,0_100%)]'
                            : '-left-1.5 bg-[#202C33] [clip-path:polygon(0_0,100%_0,100%_100%)]'
                        }`}
                      />
                    )}
                    <span>{msg.text}</span>
                    <span className="float-right ml-2 mt-1 inline-flex items-center gap-1 text-[10px] text-[#8696A0] tabular-nums select-none">
                      <span>{msg.time}</span>
                      {isHardLan && <DoubleCheckReadIcon />}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Authentic Bottom WhatsApp Composer Bar */}
        <div
          aria-hidden="true"
          className="flex items-center gap-1.5 bg-[#0B141A] px-2.5 py-2 border-t border-white/[0.04] select-none"
        >
          <div className="flex flex-1 items-center justify-between rounded-full bg-[#202C33] px-3 py-1.5 text-[#8696A0]">
            <div className="flex items-center gap-2">
              <Smile className="h-4 w-4" />
              <span className="text-[12px]">Mensagem</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Paperclip className="h-3.5 w-3.5" />
              <Camera className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00A884] text-[#0B141A]">
            <Mic className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Clean Unboxed Attribution Below Each Print */}
      <div className="mt-3.5 px-1">
        <div className="font-display text-sm font-bold text-slate-950 dark:text-white">
          {item.name}
        </div>
        <div className="text-xs text-slate-600 dark:text-slate-400">
          {item.role} · {item.company}
        </div>
        <div className="mt-1 text-xs font-mono text-[#007BFF] dark:text-[#00D4FF]">
          {item.contextMetric}
        </div>
      </div>
    </motion.div>
  );
}

export function ClientsSection() {
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
            Do setor bancário com o Itaú a indústrias, clínicas e construtoras — veja o retorno real de quem conta com nossa equipe no dia a dia.
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

        {/* Realistic WhatsApp Print Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <WhatsAppScreenshotCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
