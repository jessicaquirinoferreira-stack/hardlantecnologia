import { Instagram } from 'lucide-react';
import { COMPANY } from '../data/siteData';

export function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      {/* Floating Instagram button above WhatsApp */}
      <a
        href={COMPANY.instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguir a Hard-Lan Tecnologia no Instagram"
        title="Instagram @hardlantecnologia"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-[0_8px_24px_rgba(221,42,123,0.38)] hover:scale-105 hover:shadow-[0_10px_30px_rgba(221,42,123,0.52)] active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
      >
        <Instagram className="h-5 w-5" aria-hidden="true" />
      </a>

      {/* Floating WhatsApp button */}
      <a
        href={COMPANY.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Hard-Lan Tecnologia pelo WhatsApp (17) 98178-1288"
        title="WhatsApp (17) 98178-1288"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-slate-950 shadow-[0_8px_30px_rgba(37,211,102,0.38)] hover:scale-105 hover:shadow-[0_10px_34px_rgba(37,211,102,0.55)] active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM17.85 16.1C17.61 16.78 16.43 17.4 15.88 17.48C15.38 17.55 14.74 17.58 14.04 17.36C13.61 17.22 13.06 17.04 12.36 16.74C9.42 15.47 7.5 12.5 7.35 12.3C7.21 12.1 6.15 10.71 6.15 9.27C6.15 7.83 6.9 7.13 7.17 6.83C7.44 6.53 7.76 6.46 7.96 6.46C8.16 6.46 8.35 6.46 8.52 6.47C8.7 6.48 8.95 6.4 9.19 6.98C9.44 7.57 10.03 9.02 10.1 9.17C10.17 9.32 10.22 9.49 10.12 9.69C10.02 9.89 9.97 10.01 9.83 10.18C9.68 10.35 9.52 10.56 9.39 10.69C9.24 10.84 9.09 11 9.26 11.3C9.43 11.59 10.03 12.58 10.92 13.37C12.07 14.39 13.03 14.71 13.33 14.86C13.62 15 13.8 14.98 13.97 14.78C14.14 14.58 14.71 13.91 14.91 13.61C15.11 13.31 15.3 13.36 15.58 13.46C15.85 13.56 17.31 14.28 17.6 14.43C17.9 14.58 18.1 14.65 18.17 14.78C18.24 14.9 18.24 15.5 17.85 16.1Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
