import React from 'react';
import { 
  Sparkles, 
  Coffee, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  Heart, 
  Star, 
  CheckCircle2, 
  UserPlus,
  Flame,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react';
import { Product, PageRoute } from '../types';
import { ProductCard } from './ProductCard';
import { SITE_INFO } from '../data/siteInfo';
import { CATEGORIES_DATA } from '../data/products';

interface HomeViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onNavigate: (route: PageRoute) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onNavigate,
}) => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);
  const coffeeProducts = products.filter((p) => p.categories.includes('Serie Cafés Saludables')).slice(0, 4);

  return (
    <div className="bg-slate-50 flex flex-col">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-850 to-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-700/60 text-emerald-200 text-xs font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Asesoría y Distribución Oficial en Latinoamérica</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Salud, Bienestar y Prosperidad con{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
                  Health Green World
                </span>
              </h1>

              <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Bienvenido al portal oficial de <strong>Yamilka Batista</strong>. Descubre la más alta tecnología natural en cafés funcionales con Ganoderma y Cordyceps, pastas dentales de turmalina sin flúor, colágenos con arándanos y bienestar integral.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href={SITE_INFO.hgwReferralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <span>Comprar en HGW Oficial</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={SITE_INFO.driveCatalogsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm transition-all"
                >
                  <span>Ver Catálogos (PDF)</span>
                </a>

                <a
                  href={SITE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 text-emerald-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 underline decoration-emerald-400/50 underline-offset-4"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp: {SITE_INFO.phone}</span>
                </a>
              </div>

              {/* Special Activation Discount & Country Availability Badge */}
              <div className="pt-2">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-left space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-emerald-500 text-slate-950 text-xs font-black rounded-lg uppercase">
                      Beneficio Exclusivo
                    </span>
                    <span className="text-emerald-300 text-xs font-bold">
                      Descuento del 30% al activarse
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100/90 leading-relaxed">
                    <strong>Países disponibles HGW:</strong> {SITE_INFO.availableCountries.join(', ')}. {SITE_INFO.priceNote}
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-emerald-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="text-2xl font-black text-white">25+</p>
                  <p className="text-xs text-emerald-200/80 font-medium">Productos Originales</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">100%</p>
                  <p className="text-xs text-emerald-200/80 font-medium">Ingredientes Naturales</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">Panamá</p>
                  <p className="text-xs text-emerald-200/80 font-medium">& Latinoamérica</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/15">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-black text-2xl text-emerald-300">
                    YB
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white leading-tight">
                      {SITE_INFO.advisorName}
                    </h3>
                    <p className="text-xs text-emerald-300 font-medium mt-0.5">
                      Asesor Independiente Health Green World
                    </p>
                    <span className="text-[11px] text-emerald-100/80 block">
                      Código Patrocinador: <strong className="text-white">{SITE_INFO.hgwSponsorCode}</strong>
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-emerald-100/90">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Atención personalizada:</strong> Te guío en la selección del producto adecuado para tu salud o la de tu familia.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>30% de Descuento:</strong> Al activarte como socio con el código {SITE_INFO.hgwSponsorCode}.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Cobertura internacional:</strong> Asesoría en Panamá, México, Colombia, Perú, Ecuador, Bolivia, España y más.</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/15 flex flex-col gap-2.5">
                  <a
                    href={SITE_INFO.hgwReferralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm text-center"
                  >
                    <span>Comprar / Afiliarse en HGW Oficial</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={SITE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-300" />
                    <span>Chatear por WhatsApp ({SITE_INFO.phone})</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars of HGW Wellness */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Pilares de Vanguardia
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ingredientes y Tecnologías que Marcan la Diferencia
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1.5">Turmalina & Aniones</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mineral natural que libera iones negativos y calor infrarrojo lejano. Presente en pastas dentales sin flúor, protectores íntimos, cuelleras y plantillas.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1.5">Ganoderma Lucidum</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                El legendario hongo Reishi, potente antioxidante que modula el sistema inmunitario, reduce el estrés oxidativo y revitaliza las células.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1.5">Arándanos & Antocianinas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fruto con poder antioxidante 50 veces mayor que la vitamina E. Protege la agudeza visual, apoya la regeneración de colágeno y la memoria.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1.5">Cordyceps Sinensis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Micelio milenario para la resistencia física, energía celular ATP y fortalecimiento de las vías respiratorias y función renal.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                Catálogo Exclusivo
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Productos Destacados HGW
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Los productos más solicitados por nuestros clientes en Panamá y Latinoamérica.
              </p>
            </div>

            <button
              onClick={() => onNavigate({ name: 'shop' })}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-2xs hover:shadow transition-all self-start sm:self-auto"
            >
              <span>Ver todos los 25 productos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Healthy Coffees Special Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full uppercase tracking-wider">
                ☕ Serie Cafés Saludables HGW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                El Placer del Café con Beneficios que se Sienten
              </h2>
              <p className="text-sm text-amber-100/80 leading-relaxed">
                Nuestros cafés solubles fusionan el sabor de granos selectos con hongos adaptógenos y superalimentos: Ganoderma lucidum, Cordyceps sinensis, Ashwagandha, Té Negro y Arándanos. Fórmulas con y sin azúcar.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={SITE_INFO.hgwReferralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-md transition-all text-center"
                >
                  Comprar en HGW Oficial
                </a>
                <a
                  href={SITE_INFO.driveCatalogsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs rounded-xl transition-all text-center"
                >
                  Ver Catálogos PDF
                </a>
              </div>
            </div>

            {/* Mini Grid of Coffees */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coffeeProducts.map((coffee) => (
                <div 
                  key={coffee.id}
                  onClick={() => onSelectProduct(coffee)}
                  className="bg-stone-900/80 border border-amber-500/20 hover:border-amber-400/50 p-4 rounded-2xl flex items-center gap-3 cursor-pointer transition-all hover:-translate-y-0.5"
                >
                  <div className="w-16 h-16 bg-white rounded-xl p-1 shrink-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src={coffee.thumbnailUrl} 
                      alt={coffee.title} 
                      className="w-full h-full object-contain"
                      loading="lazy" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{coffee.title}</h4>
                    <p className="text-[11px] text-amber-200/70 line-clamp-1 mt-0.5">{coffee.netContent}</p>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full mt-1.5 inline-block">
                      -30% al activarse
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Explora por Categoría
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Líneas de Productos para Cada Necesidad
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES_DATA.filter(c => c.slug !== 'todos').map((cat) => (
              <div
                key={cat.id}
                onClick={() => onNavigate({ name: 'category', slug: cat.slug })}
                className="group p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shadow-2xs group-hover:scale-105 transition-transform">
                      {cat.slug === 'serie-cafes-saludables' && <Coffee className="w-6 h-6 text-amber-700" />}
                      {cat.slug === 'cuidado-personal' && <Sparkles className="w-6 h-6 text-emerald-600" />}
                      {cat.slug === 'accesorios' && <ShieldCheck className="w-6 h-6 text-teal-600" />}
                      {cat.slug === 'serie-candys-funcionales-hgw' && <Award className="w-6 h-6 text-orange-600" />}
                      {cat.slug === 'alimentos' && <Award className="w-6 h-6 text-emerald-700" />}
                      {cat.slug === 'equipo' && <Flame className="w-6 h-6 text-cyan-600" />}
                      {cat.slug === 'suplementos' && <Award className="w-6 h-6 text-teal-700" />}
                      {cat.slug === 'licores' && <Award className="w-6 h-6 text-purple-700" />}
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {cat.itemCount} items
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>Ver productos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Opportunity Callout */}
      <section className="py-16 bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold rounded-full uppercase tracking-wider">
                Membresía & Negocio Independiente
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                ¿Te gustaría afiliarte a HGW con 30% a 50% de descuento?
              </h2>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Únete a mi equipo internacional de distribuidores y socios Health Green World. Obtén precio mayorista desde tu primera compra, bonos de patrocinio, ganancias por comercialización directa y apoyo continuo de Yamilka Batista.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-emerald-200">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sin compras forzadas mensuales</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Plan de Ganancia Mutua HGW</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Plataforma global en 40+ países</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <a
                href={SITE_INFO.hgwReferralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-sm rounded-xl text-center shadow-lg transition-transform hover:scale-105"
              >
                Registrarme en HGW Oficial
              </a>
              <button
                onClick={() => onNavigate({ name: 'opportunity' })}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs rounded-xl text-center transition-colors"
              >
                Conocer más del plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Trust / Testimonials */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Experiencias Reales
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Lo que Dicen Quienes Ya Disfrutan HGW
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                &quot;La pasta dental de turmalina negra me cambió por completo el cuidado bucal. Cero sensibilidad, encías sanas y una frescura natural que dura todo el día. Totalmente recomendada.&quot;
              </p>
              <div>
                <p className="font-bold text-xs text-slate-900">María Elena C.</p>
                <p className="text-[11px] text-slate-500">Ciudad de Panamá</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                &quot;El café de Ganoderma y el café de Ashwagandha son mis favoritos para la oficina. Dan energía sin provocar ansiedad ni aceleración cardíaca. Yamilka me atendió rapidísimo por WhatsApp.&quot;
              </p>
              <div>
                <p className="font-bold text-xs text-slate-900">Carlos R.</p>
                <p className="text-[11px] text-slate-500">Chiriquí, Panamá</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                &quot;El protector de cintura de turmalina me alivia el dolor lumbar después de tantas horas sentado en el computador. Es impresionante el calor natural que genera.&quot;
              </p>
              <div>
                <p className="font-bold text-xs text-slate-900">Sandra V.</p>
                <p className="text-[11px] text-slate-500">Colón, Panamá</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
