import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Instagram, MessageCircle, Send, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { COMPANY } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  showSocialActions?: boolean;
}

const QUICK_TOPICS = [
  { label: 'Quais serviços vocês fazem?', query: 'servicos' },
  { label: 'Endereço e horário', query: 'endereco' },
  { label: 'Suporte para empresas e servidores', query: 'servidores' },
  { label: 'Redes sociais e orçamento', query: 'redes' },
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'assistant',
    text: 'Olá! Eu sou a Helena Costa, da Hard-Lan Tecnologia. Desde 2002 ajudamos empresas em São José do Rio Preto e região a manterem sua T.I. sempre segura e online. Como posso te ajudar hoje?',
    showSocialActions: true,
  },
];

function getAssistantReply(rawInput: string): { text: string; showSocialActions: boolean } {
  const q = rawInput
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (q.includes('endereco') || q.includes('onde') || q.includes('local') || q.includes('horario') || q.includes('abre')) {
    return {
      text: `Estamos na ${COMPANY.address}. Atendemos de ${COMPANY.hours}. Você pode ligar no fixo ${COMPANY.phoneDisplay} ou chamar no WhatsApp ${COMPANY.whatsappDisplay}.`,
      showSocialActions: true,
    };
  }

  if (q.includes('servidor') || q.includes('virtualiz') || q.includes('proxmox') || q.includes('vmware') || q.includes('hyper')) {
    return {
      text: 'Projetamos, instalamos e mantemos servidores corporativos Windows/Linux e clusters virtualizados (VMware, Hyper-V e Proxmox) com alta disponibilidade e backup. Quer falar com um engenheiro no WhatsApp ou acompanhar nossas entregas no Instagram?',
      showSocialActions: true,
    };
  }

  if (q.includes('wifi') || q.includes('wi-fi') || q.includes('rede') || q.includes('cyber') || q.includes('segur') || q.includes('firewall') || q.includes('backup')) {
    return {
      text: 'Implantamos redes corporativas, Wi-Fi seguro segmentado por VLAN, firewalls de próxima geração, proteção contra ransomware e rotinas de backup 3-2-1. Chame nossa equipe no WhatsApp para avaliarmos o seu ambiente!',
      showSocialActions: true,
    };
  }

  if (q.includes('servic') || q.includes('fazem') || q.includes('suporte') || q.includes('pc') || q.includes('computador')) {
    return {
      text: 'Atuamos com Suporte Técnico Presencial e Remoto, Servidores, Virtualização, Cybersegurança, Wi-Fi Corporativo Seguro, Montagem e Upgrade de PCs/Workstations, Infraestrutura completa e Backup. Posso te direcionar agora para o nosso WhatsApp ou Instagram!',
      showSocialActions: true,
    };
  }

  if (q.includes('orcamento') || q.includes('preco') || q.includes('valor') || q.includes('contato') || q.includes('whats') || q.includes('insta') || q.includes('rede') || q.includes('falar') || q.includes('telefone')) {
    return {
      text: `Nosso WhatsApp é ${COMPANY.whatsappDisplay} e o telefone fixo é ${COMPANY.phoneDisplay}. Você também pode conferir nossos projetos reais (incluindo cases como o Itaú) no Instagram ${COMPANY.instagramHandle}!`,
      showSocialActions: true,
    };
  }

  if (q.includes('itau') || q.includes('cliente') || q.includes('projeto')) {
    return {
      text: 'Temos mais de 23 anos de experiência atendendo empresas exigentes, incluindo projetos de infraestrutura de rede para unidades do Itaú, clínicas e indústrias. Veja as fotos reais aqui no site ou no nosso Instagram!',
      showSocialActions: true,
    };
  }

  return {
    text: `Entendi! Para atendimento imediato, fale com a gente no WhatsApp ${COMPANY.whatsappDisplay} ou no fixo ${COMPANY.phoneDisplay}. Também publicamos nossos bastidores e projetos no Instagram ${COMPANY.instagramHandle}.`,
    showSocialActions: true,
  };
}

export function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const sendQuestion = (questionText: string) => {
    const trimmed = questionText.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: trimmed,
    };

    const reply = getAssistantReply(trimmed);
    const assistantMsg: ChatMessage = {
      id: `a-${Date.now() + 1}`,
      sender: 'assistant',
      text: reply.text,
      showSocialActions: reply.showSocialActions,
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendQuestion(input);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            aria-label="Assistente virtual Helena Costa — Hard-Lan Tecnologia"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 flex w-[calc(100vw-2.5rem)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#10121B] shadow-2xl shadow-black/40"
          >
            {/* Assistant Header with Humanized Photo & Name */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141724] px-4 py-3.5">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#007BFF]/40 dark:border-[#00D4FF]/40 bg-slate-900">
                  <ResilientImage
                    src="/src/assets/images/assistant_helena_avatar_1795558738885.jpg"
                    alt="Helena Costa — Assistente Virtual da Hard-Lan Tecnologia"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-bold text-slate-950 dark:text-white truncate">
                    Helena Costa
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    Atendimento Digital · Hard-Lan
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar assistente virtual"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Thread */}
            <div
              ref={scrollRef}
              className="max-h-[300px] space-y-3 overflow-y-auto px-4 py-4 text-sm"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#007BFF] text-white rounded-br-sm'
                        : 'bg-slate-100 dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'assistant' && msg.showSocialActions && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      <a
                        href={COMPANY.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[34px] items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-slate-950 hover:brightness-105 transition-all"
                      >
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        Chamar no WhatsApp
                      </a>
                      <a
                        href={COMPANY.instagramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[34px] items-center gap-1.5 rounded-lg border border-slate-300 dark:border-white/15 bg-white dark:bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:border-[#007BFF]/50 dark:hover:border-[#00D4FF]/50 transition-colors"
                      >
                        <Instagram className="h-3.5 w-3.5 text-[#DD2A7B]" aria-hidden="true" />
                        Ver Instagram
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Suggested Questions */}
            <div className="border-t border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] px-3 py-2.5">
              <div className="flex flex-wrap gap-1.5">
                {QUICK_TOPICS.map((topic) => (
                  <button
                    key={topic.label}
                    type="button"
                    onClick={() => sendQuestion(topic.label)}
                    className="rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161926] px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:border-[#007BFF]/50 dark:hover:border-[#00D4FF]/50 hover:text-[#007BFF] dark:hover:text-[#00D4FF] transition-colors cursor-pointer"
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D0F17] p-2.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua dúvida simples..."
                aria-label="Digite sua dúvida para a assistente Helena Costa"
                className="min-h-[38px] flex-1 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141724] px-3 py-1.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#007BFF] dark:focus:border-[#00D4FF] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Enviar pergunta"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#007BFF] text-white hover:bg-[#0066D6] transition-colors cursor-pointer"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Compact Launcher Button on Bottom-Left */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={
          isOpen
            ? 'Fechar atendimento virtual com Helena Costa'
            : 'Falar com Helena Costa, assistente virtual da Hard-Lan'
        }
        className="group flex items-center gap-2.5 rounded-full border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-[#111420]/95 p-1.5 pr-4 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md hover:border-[#007BFF]/55 dark:hover:border-[#00D4FF]/55 active:scale-[0.98] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
      >
        <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#007BFF]/40 dark:border-[#00D4FF]/40 bg-slate-900">
          <ResilientImage
            src="/src/assets/images/assistant_helena_avatar_1795558738885.jpg"
            alt="Foto de Helena Costa"
            className="h-full w-full object-cover object-top"
          />
        </span>
        <span className="text-left leading-tight">
          <span className="block font-display text-xs font-bold text-slate-900 dark:text-white">
            Helena Costa
          </span>
          <span className="block text-[11px] font-medium text-[#007BFF] dark:text-[#00D4FF]">
            {isOpen ? 'Fechar chat' : 'Tirar dúvidas'}
          </span>
        </span>
      </button>
    </div>
  );
}
