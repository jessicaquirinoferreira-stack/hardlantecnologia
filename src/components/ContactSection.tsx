import { useEffect, useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { COMPANY, SERVICES } from '../data/siteData';

interface ContactSectionProps {
  preselectedService: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function formatBrPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection({ preselectedService }: ContactSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    serviceType: preselectedService || SERVICES[0].title,
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, serviceType: preselectedService }));
      setSubmitted(false);
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo ou empresa.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    }
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp com DDD.';
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = 'Descreva brevemente sua necessidade técnica (mínimo 10 caracteres).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const buildWhatsAppInquiryUrl = () => {
    const text = `Olá Hard-Lan Tecnologia! Me chamo ${form.name || 'Cliente'}, tenho interesse em ${form.serviceType}. E-mail: ${form.email || '-'} | Telefone: ${form.phone || '-'}. Mensagem: ${form.message || 'Gostaria de solicitar um orçamento.'}`;
    return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="contato"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A0A0F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#007BFF] dark:text-[#00D4FF] mb-3">
            Contato e Orçamentos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white [text-wrap:balance]">
            Fale diretamente com nossa equipe técnica
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Solicite uma avaliação de infraestrutura, orçamento de servidores ou atendimento presencial em São José do Rio Preto e região.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Form */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10121B] p-6 sm:p-8"
          >
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="flex flex-col items-start justify-center py-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-slate-950 dark:text-white">
                  Solicitação registrada com sucesso
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Obrigado, <span className="font-semibold">{form.name}</span>. Nossa equipe analisará sua demanda de{' '}
                  <span className="font-semibold text-[#007BFF] dark:text-[#00D4FF]">
                    {form.serviceType}
                  </span>{' '}
                  e retornará pelo telefone <span className="font-mono">{form.phone}</span> ou e-mail{' '}
                  <span className="font-mono">{form.email}</span>.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppInquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-slate-950 hover:brightness-105 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Enviar resumo agora pelo WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        serviceType: SERVICES[0].title,
                        message: '',
                      });
                    }}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 dark:border-white/15 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                    >
                      Nome ou Empresa
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ex.: Carlos Eduardo · Indústria Paulista"
                      aria-invalid={Boolean(errors.name)}
                      className="w-full min-h-[44px] rounded-lg border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-[#0A0A0F] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#007BFF] dark:focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/25 transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                    >
                      E-mail corporativo
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="contato@suaempresa.com.br"
                      aria-invalid={Boolean(errors.email)}
                      className="w-full min-h-[44px] rounded-lg border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-[#0A0A0F] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#007BFF] dark:focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/25 transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: formatBrPhone(e.target.value) })
                      }
                      placeholder="(17) 99999-9999"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full min-h-[44px] rounded-lg border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-[#0A0A0F] px-3.5 py-2.5 text-sm font-mono tabular-nums text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#007BFF] dark:focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/25 transition-colors"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                    >
                      Tipo de serviço
                    </label>
                    <select
                      id="contact-service"
                      name="serviceType"
                      value={form.serviceType}
                      onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                      className="w-full min-h-[44px] rounded-lg border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-[#0A0A0F] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#007BFF] dark:focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/25 transition-colors"
                    >
                      {SERVICES.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="Projeto Personalizado / Consultoria">
                        Projeto Personalizado / Consultoria
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                  >
                    Mensagem e contexto técnico
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Conte-nos quantas estações ou servidores sua empresa possui e qual desafio deseja resolver."
                    aria-invalid={Boolean(errors.message)}
                    className="w-full rounded-lg border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-[#0A0A0F] px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#007BFF] dark:focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/25 transition-colors resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Resposta em horário comercial · Dados protegidos
                  </span>
                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00B4E6] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,123,255,0.3)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
                  >
                    Enviar solicitação
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right: Direct Action Buttons, Address & Google Maps */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Big Direct Channels */}
            <div className="grid grid-cols-1 gap-3">
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] items-center justify-between rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-3.5 text-slate-900 dark:text-white hover:bg-[#25D366]/20 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0 text-[#19A952] dark:text-[#25D366]" aria-hidden="true" />
                  <span className="flex flex-col leading-tight">
                    <span className="font-semibold text-sm sm:text-base">
                      WhatsApp · <span className="font-mono tabular-nums">{COMPANY.whatsappDisplay}</span>
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      Atendimento rápido e orçamentos
                    </span>
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400" aria-hidden="true" />
              </a>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={COMPANY.phoneHref}
                  className="flex min-h-[54px] items-center justify-between rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10121B] px-4 py-3 text-slate-900 dark:text-white hover:border-[#007BFF]/45 dark:hover:border-[#00D4FF]/45 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-[#007BFF] dark:text-[#00D4FF]" aria-hidden="true" />
                    <span className="flex flex-col leading-tight">
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        Telefone Fixo
                      </span>
                      <span className="text-sm font-semibold font-mono tabular-nums">
                        {COMPANY.phoneDisplay}
                      </span>
                    </span>
                  </span>
                </a>

                <a
                  href={COMPANY.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[54px] items-center justify-between rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10121B] px-4 py-3 text-slate-900 dark:text-white hover:border-[#007BFF]/45 dark:hover:border-[#00D4FF]/45 transition-colors"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <Instagram className="h-4 w-4 shrink-0 text-[#007BFF] dark:text-[#00D4FF]" aria-hidden="true" />
                    <span className="flex flex-col leading-tight min-w-0">
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        Instagram
                      </span>
                      <span className="text-sm font-semibold truncate">
                        {COMPANY.instagramHandle}
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Address & Business Hours */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10121B] p-5 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#007BFF] dark:text-[#00D4FF]" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Endereço</p>
                  <p className="text-slate-600 dark:text-slate-400">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#007BFF] dark:text-[#00D4FF]" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Horário de atendimento</p>
                  <p className="text-slate-600 dark:text-slate-400">{COMPANY.hours}</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-200 dark:bg-[#10121B]">
              <iframe
                title="Localização da Hard-Lan Tecnologia em São José do Rio Preto"
                src={COMPANY.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 grayscale-[20%] contrast-[1.05]"
              />
              <div className="flex items-center justify-between px-4 py-2.5 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-[#10121B] border-t border-slate-200 dark:border-white/10">
                <span>Jardim América · São José do Rio Preto</span>
                <a
                  href={COMPANY.mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#007BFF] dark:text-[#00D4FF] hover:underline"
                >
                  Abrir no Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
