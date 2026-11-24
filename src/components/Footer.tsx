import { Instagram, Moon, Phone, Sun } from 'lucide-react';
import { COMPANY } from '../data/siteData';
import { Logo } from './Logo';

interface FooterProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const FOOTER_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
];

export function Footer({ isDark, onToggleTheme }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#08090D] text-slate-600 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Bio */}
          <div className="lg:col-span-5">
            <a
              href="#inicio"
              aria-label="Hard-Lan Tecnologia — Voltar ao topo"
              className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
            >
              <Logo showSubtext />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {COMPANY.bio}.
            </p>
            <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-500 tabular-nums">
              CNPJ: {COMPANY.cnpj}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-slate-950 dark:text-white">
              Navegação rápida
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#007BFF] dark:hover:text-[#00D4FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-sm font-bold text-slate-950 dark:text-white">
              Unidade São José do Rio Preto
            </h3>
            <address className="mt-4 not-italic text-sm leading-relaxed space-y-2">
              <p>{COMPANY.address}</p>
              <p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 font-mono font-medium text-slate-900 dark:text-slate-200 hover:text-[#007BFF] dark:hover:text-[#00D4FF] transition-colors tabular-nums"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {COMPANY.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={COMPANY.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-slate-900 dark:text-slate-200 hover:text-[#007BFF] dark:hover:text-[#00D4FF] transition-colors"
                >
                  <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                  {COMPANY.instagramHandle}
                </a>
              </p>
            </address>

            <div className="mt-5">
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
                className="inline-flex min-h-[38px] items-center gap-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#007BFF]/40 dark:hover:border-[#00D4FF]/40 transition-colors cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-[#00D4FF]" aria-hidden="true" />
                    Tema claro
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-[#007BFF]" aria-hidden="true" />
                    Tema escuro
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 dark:border-white/10 pt-6 text-xs text-slate-500 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p>Desenvolvido com tecnologia de ponta</p>
        </div>
      </div>
    </footer>
  );
}
