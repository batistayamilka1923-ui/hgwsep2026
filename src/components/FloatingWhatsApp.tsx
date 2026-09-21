import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_INFO } from '../data/siteInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <p className="font-bold text-slate-900">¿Tienes dudas o deseas comprar?</p>
            <p className="text-slate-500 text-[11px]">Escríbeme por WhatsApp con gusto.</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing FAB */}
      <a
        href={SITE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all"
        aria-label="Contactar a Yamilka Batista por WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
};
