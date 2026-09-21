import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink,
  MessageCircle, 
  Share2, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Clock, 
  AlertCircle,
  Download
} from 'lucide-react';
import { Product, PageRoute } from '../types';
import { ProductImage } from './ProductImage';
import { SITE_INFO } from '../data/siteInfo';
import { PRODUCTS } from '../data/products';

interface ProductDetailProps {
  product: Product;
  onNavigate: (route: PageRoute) => void;
  onAddToCart?: (product: Product, quantity: number) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.title} - HGW`,
          text: product.excerpt,
          url: url
        });
      } catch {
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappInquiryUrl = `${SITE_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hola Yamilka Indira Batista Aguila, deseo consultar y comprar el producto: *${product.title}* de HGW. Mi código de patrocinador es Yamilka507.`
  )}`;

  // Find related products in the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categories.some((cat) => product.categories.includes(cat))
  ).slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <nav className="flex items-center space-x-2 text-sm text-slate-500 font-medium">
            <button 
              onClick={() => onNavigate({ name: 'home' })} 
              className="hover:text-emerald-700 transition-colors"
            >
              Inicio
            </button>
            <span>/</span>
            <button 
              onClick={() => onNavigate({ name: 'shop' })} 
              className="hover:text-emerald-700 transition-colors"
            >
              Catálogo
            </button>
            <span>/</span>
            <button 
              onClick={() => onNavigate({ name: 'category', slug: product.categories[0].toLowerCase().replace(/\s+/g, '-') })}
              className="hover:text-emerald-700 transition-colors"
            >
              {product.categories[0]}
            </button>
            <span>/</span>
            <span className="text-slate-900 truncate max-w-xs">{product.title}</span>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE_INFO.driveCatalogsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
            >
              <Download className="w-4 h-4 text-emerald-600" />
              <span>Catálogos PDF</span>
            </a>

            <button
              onClick={() => onNavigate({ name: 'shop' })}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al catálogo
            </button>
          </div>
        </div>

        {/* Main Product Details Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            
            {/* Left Column: Image Display */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-8 flex items-center justify-center min-h-[340px] sm:min-h-[420px]">
                <ProductImage
                  src={product.thumbnailUrl}
                  alt={product.title}
                  category={product.primaryCategory}
                  className="w-full max-h-[380px]"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <Sparkles className="w-3 h-3" />
                    30% Descto. al activarse
                  </span>
                </div>
              </div>

              {/* Verified Quality & Distributor Badge */}
              <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-emerald-700 shrink-0" />
                <div className="text-sm">
                  <p className="font-bold text-emerald-950">Garantía de Autenticidad HGW</p>
                  <p className="text-emerald-800 text-xs mt-0.5">
                    Distribuidor Oficial: <strong>{SITE_INFO.advisorName}</strong> (Código: <strong>{SITE_INFO.hgwSponsorCode}</strong>).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Details & Purchasing */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Categories */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {product.categories.map((cat, idx) => (
                    <span 
                      key={idx}
                      className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-md"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Title & Subtitle */}
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                  {product.title}
                </h1>
                {product.subtitle && (
                  <p className="text-base font-semibold text-emerald-800 mt-1">
                    {product.subtitle}
                  </p>
                )}

                {/* Activation Discount & Country Price Notice Box */}
                <div className="mt-5 p-5 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/50 border border-emerald-200 rounded-2xl shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-200/70">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-emerald-600 text-white rounded-xl">
                        <Sparkles className="w-5 h-5" />
                      </span>
                      <div>
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                          Beneficio Especial
                        </span>
                        <p className="text-xl font-extrabold text-emerald-950 leading-tight">
                          Descuento del 30% al activarse
                        </p>
                      </div>
                    </div>

                    {product.netContent && (
                      <div className="sm:text-right">
                        <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                          Presentación
                        </span>
                        <p className="text-sm font-bold text-slate-900 mt-0.5">
                          {product.netContent}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{SITE_INFO.priceNote}</span>
                    </p>
                    <div className="mt-2.5">
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                        Países disponibles HGW:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {SITE_INFO.availableCountries.map((country, cIdx) => (
                          <span 
                            key={cIdx} 
                            className="bg-white/80 border border-emerald-200 text-emerald-900 text-xs font-medium px-2 py-0.5 rounded-full"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Excerpt Description */}
                <div className="mt-5 text-slate-700 leading-relaxed space-y-3">
                  <p>{product.excerpt}</p>
                </div>

                {/* Purchase Controls & Redirect */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Official HGW Buy Button (Mandatory Redirect) */}
                    <a
                      href={SITE_INFO.hgwReferralUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-center"
                    >
                      <span>Comprar en HGW Oficial</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>

                    {/* WhatsApp Inquiries button with updated phone +50767788375 */}
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base flex items-center justify-center gap-2 shadow-xs transition-all text-center"
                    >
                      <MessageCircle className="w-5 h-5 text-emerald-400" />
                      <span>Consultar por WhatsApp</span>
                    </a>
                  </div>

                  {/* Drive Catalogs & Sponsor info */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
                    <a
                      href={SITE_INFO.driveCatalogsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:underline"
                    >
                      <Download className="w-4 h-4" />
                      <span>Ver / Descargar Catálogos en Google Drive</span>
                    </a>

                    <button
                      onClick={handleShare}
                      className="inline-flex items-center gap-1.5 hover:text-emerald-700 transition-colors font-medium py-1"
                    >
                      <Share2 className="w-4 h-4" />
                      {copied ? '¡Enlace copiado!' : 'Compartir este producto'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Sponsor Banner with Yamilka507 */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs font-bold rounded-md uppercase">
                      Patrocinador Oficial
                    </span>
                    <span className="text-xs text-emerald-200">
                      Código: <strong>{SITE_INFO.hgwSponsorCode}</strong>
                    </span>
                  </div>
                  <p className="text-base font-bold mt-1">
                    {SITE_INFO.advisorName}
                  </p>
                  <p className="text-xs text-emerald-200">
                    {SITE_INFO.discountNote} como socio independiente.
                  </p>
                </div>
                <a
                  href={SITE_INFO.hgwReferralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white text-emerald-900 font-bold text-sm rounded-xl hover:bg-emerald-50 transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5"
                >
                  <span>Registrarme en HGW</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Deep Content Sections (Ventajas, Beneficios, Ingredientes, Modo de Uso) */}
          <div className="border-t border-slate-200 bg-slate-50/50 p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Ventajas */}
              {product.advantages && product.advantages.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <span>Ventajas Principales</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {product.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                        <span className="text-sm sm:text-base leading-relaxed">{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Beneficios */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Beneficios para la Salud</span>
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-slate-700">
                        {benefit.title && (
                          <strong className="block text-slate-900 font-bold text-sm sm:text-base mb-0.5">
                            {benefit.title}
                          </strong>
                        )}
                        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                          {benefit.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ingredientes */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <span>Ingredientes y Componentes</span>
                  </h3>
                  <ul className="space-y-2">
                    {product.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0"></span>
                        <span className="text-sm sm:text-base">{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modo de Uso */}
              {product.howToUse && product.howToUse.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <span>Modo de Empleo y Uso</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {product.howToUse.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Precauciones */}
              {product.precautions && product.precautions.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs md:col-span-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Recomendaciones y Precauciones</span>
                  </h3>
                  <ul className="space-y-2">
                    {product.precautions.map((prec, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-slate-600 flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{prec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products Section (Without Prices) */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Productos Relacionados
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Otros productos destacados en {product.categories[0]}
                </p>
              </div>

              <button
                onClick={() => onNavigate({ name: 'shop' })}
                className="text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
              >
                <span>Ver todo el catálogo</span>
                <span>→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct.id}
                  onClick={() => {
                    onNavigate({ name: 'product', slug: relProduct.slug });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white border border-slate-200/80 hover:border-emerald-400 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full h-40 bg-slate-50 rounded-xl p-3 mb-3 flex items-center justify-center">
                      <ProductImage
                        src={relProduct.thumbnailUrl}
                        alt={relProduct.title}
                        category={relProduct.primaryCategory}
                        className="w-full h-full max-h-36"
                      />
                    </div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      {relProduct.primaryCategory}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 line-clamp-2 leading-snug">
                      {relProduct.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      -30% al activarse
                    </span>
                    <span className="text-xs font-bold text-slate-800 hover:text-emerald-700">
                      Ver detalles →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
