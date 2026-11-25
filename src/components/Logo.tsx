import { useState } from 'react';

interface LogoProps {
  className?: string;
  showSubtext?: boolean;
}

const OFFICIAL_LOGO_LOCAL = '/src/assets/images/hardlan-logo-oficial.png';
const OFFICIAL_LOGO_URL = 'https://i.postimg.cc/h4QcF88H/Emblema-3D-brilhante-Hard-Lan.png';

export function Logo({ className = '', showSubtext = false }: LogoProps) {
  const [src, setSrc] = useState<string>(OFFICIAL_LOGO_LOCAL);
  const [useFallbackSvg, setUseFallbackSvg] = useState(false);

  const handleError = () => {
    if (src === OFFICIAL_LOGO_LOCAL) {
      setSrc(OFFICIAL_LOGO_URL);
    } else {
      setUseFallbackSvg(true);
    }
  };

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 bg-transparent ${className}`}>
      {!useFallbackSvg ? (
        <img
          src={src}
          alt="Emblema oficial Hard-Lan Tecnologia"
          referrerPolicy="no-referrer"
          onError={handleError}
          className={`${
            showSubtext ? 'h-12' : 'h-10'
          } w-auto object-contain bg-transparent select-none shrink-0 drop-shadow-[0_2px_8px_rgba(0,123,255,0.22)]`}
        />
      ) : (
        <svg
          width="38"
          height="38"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          <defs>
            <linearGradient id="hardlan-circle-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="55%" stopColor="#007BFF" />
              <stop offset="100%" stopColor="#0044B8" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="18.5" fill="url(#hardlan-circle-grad)" />
          <path
            d="M12.5 11.5H16.6V18.1H23.4V11.5H27.5V28.5H23.4V21.7H16.6V28.5H12.5V11.5Z"
            fill="#FFFFFF"
          />
        </svg>
      )}
      <span className="inline-flex items-center leading-none">
        <span className="font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
          Hard-Lan Tecnologias
        </span>
      </span>
    </span>
  );
}
