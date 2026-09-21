import React from 'react';
import { 
  ArrowUp, 
  MessageCircle, 
  Mail, 
  PhoneCall, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  UserPlus 
} from 'lucide-react';
import { PageRoute } from '../types';
import { SITE_INFO } from '../data/siteInfo';
import { CATEGORIES_DATA } from '../data/products';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Pre-Footer Bar */}
      <div className="bg-emerald-950/60 border-b border-emerald-900/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
              HGW
            </div>
            <div>
              <p className="text-white text-sm font-bold">¿Listo para mejorar tu salud o generar ingresos?</p>
              <p className="text-xs text-emerald-300/80">Comunícate directamente con Yamilka Batista para atención personalizada.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Directo</span>
            </a>

            <a
              href={SITE_INFO.hgwReferralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-all flex items-center gap-1.5"
            >
              <UserPlus className="w-4 h-4" />
              <span>Afíliate</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                YB
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  {SITE_INFO.name}
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold tracking-wider block">
                  Asesor Independiente Health Green World
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Distribuidora autorizada de productos de bienestar, nutrición y bio-energía HGW. Asesoría personalizada en Panamá y registro de nuevos socios en toda América Latina.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Panamá / Cobertura en Latinoamérica</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={SITE_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  {SITE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-emerald-400">
                  {SITE_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate({ name: 'home' })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ name: 'shop' })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Catálogo Completo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ name: 'opportunity' })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Oportunidad de Negocio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ name: 'about' })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate({ name: 'contact' })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contacto Directo
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Category shortcuts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Categorías Principales
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES_DATA.filter(c => c.slug !== 'todos').slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate({ name: 'category', slug: cat.slug })}
                    className="hover:text-emerald-400 transition-colors flex items-center justify-between w-full"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-500">({cat.itemCount})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Sponsor & Trust */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Patrocinio Oficial
            </h4>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs space-y-2">
              <p className="text-slate-400">Código de Patrocinador:</p>
              <p className="text-lg font-black text-emerald-400">{SITE_INFO.hgwSponsorCode}</p>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Ingresa este código para registrarte en el portal oficial y obtener 30%-50% de descuento.
              </p>
              <a
                href={SITE_INFO.hgwReferralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-emerald-400 font-bold hover:underline"
              >
                <span>Ir a Tienda Oficial HGW</span>
                <span>→</span>
              </a>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href={SITE_INFO.driveCatalogsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-300 font-bold hover:underline text-[11px]"
                >
                  <span>📁 Descargar Catálogos PDF (Drive)</span>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Volver arriba</span>
            </button>
          </div>

        </div>

        {/* Available Countries & Disclaimer Note */}
        <div className="mt-8 p-4 bg-slate-900/80 border border-slate-800 rounded-2xl text-xs space-y-1 text-slate-400">
          <p className="text-emerald-400 font-bold">
            Países disponibles HGW: <span className="text-slate-300 font-normal">{SITE_INFO.availableCountries.join(', ')}.</span>
          </p>
          <p className="text-slate-400 text-[11px]">
            {SITE_INFO.priceNote}
          </p>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {SITE_INFO.name}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para el bienestar y salud en Latinoamérica</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
