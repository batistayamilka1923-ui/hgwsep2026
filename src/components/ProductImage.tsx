import React, { useState } from 'react';
import { Coffee, Sparkles, HeartPulse, Apple, ShieldCheck, Flame, Wine, Pill, Package } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = '',
  category = 'Alimentos'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getCategoryIcon = () => {
    switch (category) {
      case 'Serie Cafés Saludables':
        return <Coffee className="w-12 h-12 text-amber-700" />;
      case 'Cuidado personal':
        return <Sparkles className="w-12 h-12 text-emerald-600" />;
      case 'Accesorios':
        return <ShieldCheck className="w-12 h-12 text-teal-600" />;
      case 'Equipo':
        return <Flame className="w-12 h-12 text-cyan-600" />;
      case 'Suplementos':
        return <Pill className="w-12 h-12 text-emerald-700" />;
      case 'Licores':
        return <Wine className="w-12 h-12 text-purple-700" />;
      default:
        return <Apple className="w-12 h-12 text-emerald-600" />;
    }
  };

  const getCategoryBg = () => {
    switch (category) {
      case 'Serie Cafés Saludables':
        return 'from-amber-50 to-orange-100/60 border-amber-200/60 text-amber-900';
      case 'Cuidado personal':
        return 'from-emerald-50 to-teal-100/60 border-emerald-200/60 text-emerald-900';
      case 'Accesorios':
        return 'from-slate-100 to-teal-50 border-slate-200 text-slate-800';
      case 'Equipo':
        return 'from-cyan-50 to-sky-100/60 border-cyan-200/60 text-cyan-900';
      case 'Suplementos':
        return 'from-teal-50 to-emerald-100 border-teal-200 text-teal-900';
      case 'Licores':
        return 'from-purple-50 to-pink-100/60 border-purple-200/60 text-purple-900';
      default:
        return 'from-emerald-50 to-emerald-100/60 border-emerald-200/60 text-emerald-900';
    }
  };

  if (hasError) {
    return (
      <div className={`relative flex flex-col items-center justify-center bg-gradient-to-br ${getCategoryBg()} p-6 border rounded-2xl ${className}`}>
        <div className="w-16 h-16 rounded-full bg-white/90 shadow-sm flex items-center justify-center mb-3">
          {getCategoryIcon()}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider opacity-75">HGW Original</span>
        <span className="text-xs text-center font-medium mt-1 line-clamp-1 px-2">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden flex items-center justify-center bg-white ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
          <Package className="w-8 h-8 text-slate-300" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};
