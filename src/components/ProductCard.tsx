import React from 'react';
import { Eye, ExternalLink, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';
import { SITE_INFO } from '../data/siteInfo';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
}) => {
  const handleOfficialBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(SITE_INFO.hgwReferralUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={() => onSelect(product)}
      className="group relative bg-white border border-slate-200/80 hover:border-emerald-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col cursor-pointer"
    >
      {/* Category Pill & Brand */}
      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1">
        <span className="bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">
          {product.primaryCategory}
        </span>
      </div>

      {/* 30% discount badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          -30% al activarte
        </span>
      </div>

      {/* Product Image Area */}
      <div className="w-full h-56 bg-slate-50 p-4 border-b border-slate-100 relative flex items-center justify-center">
        <ProductImage 
          src={product.thumbnailUrl} 
          alt={product.title}
          category={product.primaryCategory}
          className="w-full h-full max-h-48"
        />
        
        {/* Quick View overlay on desktop hover */}
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={() => onSelect(product)}
            className="px-4 py-2 bg-white/95 text-slate-800 text-sm font-bold rounded-xl shadow-md hover:bg-white flex items-center gap-1.5 transition-transform hover:scale-105"
          >
            <Eye className="w-4 h-4 text-emerald-600" />
            <span>Ver detalles</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
            {product.title}
          </h3>
          <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.excerpt}
          </p>
        </div>

        {/* Benefits & Actions Section */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="mb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-lg">
              <span className="text-xs font-bold text-emerald-800">
                Descuento del 30% al activarse
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Precio según país y moneda local
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Details */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(product);
              }}
              className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Eye className="w-4 h-4 text-slate-600" />
              <span>Ver Info</span>
            </button>

            {/* Direct Official Buy Link */}
            <button
              type="button"
              onClick={handleOfficialBuy}
              className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
              title="Comprar en el sitio oficial HGW de Yamilka Batista"
            >
              <span>Comprar HGW</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

