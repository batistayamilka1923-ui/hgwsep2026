import React from 'react';
import { 
  X, 
  Trash2, 
  ExternalLink,
  MessageCircle, 
  ArrowRight, 
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  Download
} from 'lucide-react';
import { CartItem, PageRoute } from '../types';
import { SITE_INFO } from '../data/siteInfo';
import { ProductImage } from './ProductImage';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const generateWhatsAppOrderText = () => {
    let text = `👋 *¡Hola Yamilka Indira Batista Aguila! Deseo consultar y adquirir los siguientes productos HGW (Código: Yamilka507):*\n\n`;
    items.forEach((item, index) => {
      text += `${index + 1}. *${item.product.title}* (Cantidad: ${item.quantity})\n`;
    });
    text += `\n📍 *Por favor indícame la disponibilidad y precios según mi país. Deseo aprovechar el 30% de descuento al activarme.* ¡Muchas gracias!`;
    return encodeURIComponent(text);
  };

  const whatsappCheckoutUrl = `${SITE_INFO.whatsappUrl}?text=${generateWhatsAppOrderText()}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Tu Lista de Selección</h2>
                <p className="text-xs text-slate-500">
                  {items.length} {items.length === 1 ? 'producto seleccionado' : 'productos seleccionados'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
              aria-label="Cerrar selección"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-800">No has seleccionado productos</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Explora nuestro catálogo con más de 25 productos de bienestar, cafés funcionales y turmalina.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate({ name: 'shop' });
                  }}
                  className="mt-5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              <>
                {/* 30% discount banner */}
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs text-emerald-900">
                  <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div>
                    <strong className="block font-bold">¡Descuento del 30% al activarse!</strong>
                    <span>Regístrate con el código de patrocinador <strong>{SITE_INFO.hgwSponsorCode}</strong>.</span>
                  </div>
                </div>

                {items.map((item) => (
                  <div 
                    key={item.product.id}
                    className="flex gap-3.5 p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl"
                  >
                    {/* Thumbnail */}
                    <div className="w-18 h-18 bg-white border border-slate-100 rounded-xl p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                      <ProductImage
                        src={item.product.thumbnailUrl}
                        alt={item.product.title}
                        category={item.product.primaryCategory}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Info & Quantity */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                            {item.product.title}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                            title="Eliminar producto"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-emerald-700 font-semibold inline-block mt-0.5">
                          30% Desc. al activarte
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/50">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-100 font-bold"
                          >
                            -
                          </button>
                          <span className="px-2.5 py-1 text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-100 font-bold"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-[11px] text-slate-500 font-medium">
                          {item.product.netContent || 'Presentación original'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer with Purchase Actions */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3.5">
              {/* Country and Price Note */}
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-slate-700 space-y-1">
                <p className="font-bold flex items-center gap-1 text-slate-900">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{SITE_INFO.priceNote}</span>
                </p>
                <p className="text-[11px] text-slate-600">
                  Países: {SITE_INFO.availableCountries.join(', ')}.
                </p>
              </div>

              {/* Main CTA: Redirect to Official HGW Store */}
              <a
                href={SITE_INFO.hgwReferralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-center"
              >
                <span>Comprar en HGW Oficial</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Secondary WhatsApp consultation */}
              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Consultar pedido por WhatsApp</span>
              </a>

              {/* Catalogs Link */}
              <a
                href={SITE_INFO.driveCatalogsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 text-center text-xs text-emerald-800 hover:text-emerald-950 font-bold flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ver Catálogos Oficiales en Google Drive</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <button
                  onClick={onClearCart}
                  className="hover:text-rose-600 transition-colors"
                >
                  Vaciar lista
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate({ name: 'shop' });
                  }}
                  className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Seguir explorando</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
