import { useState } from 'react';
import { Server } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-[#0E1525] to-[#08101C] text-slate-300 p-6 text-center ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00D4FF]/25 bg-[#007BFF]/10 text-[#00D4FF]">
          <Server className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="max-w-xs text-xs font-medium text-slate-400">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
