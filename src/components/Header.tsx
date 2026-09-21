import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Search, 
  PhoneCall, 
  Sparkles, 
  Coffee, 
  ShieldCheck, 
  Award,
  ChevronDown,
  UserPlus
} from 'lucide-react';
import { SITE_INFO } from '../data/siteInfo';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  cartCount: number;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  cartCount,
  onOpenCart,
  onSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onNavigate({ name: 'shop', query: searchTerm.trim() });
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  const isActive = (name: string, extraSlug?: string) => {
    if (currentRoute.name === name) {
      if (extraSlug && 'slug' in currentRoute) {
        return currentRoute.slug === extraSlug;
      }
      return true;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top Notification Bar */}
      <div className="bg-emerald-900 text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold">
              Distribuidor Oficial: {SITE_INFO.advisorName} (Código: {SITE_INFO.hgwSponsorCode}) • {SITE_INFO.discountNote}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-emerald-100">
            <a 
              href={SITE_INFO.driveCatalogsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1 font-bold text-emerald-300 underline"
            >
              Catálogos Drive (PDF)
            </a>
            <span>•</span>
            <a 
              href={SITE_INFO.hgwReferralUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <UserPlus className="w-3.5 h-3.5" />
              Tienda Oficial HGW
            </a>
            <span>•</span>
            <a 
              href={SITE_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              WhatsApp: {SITE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <button 
            onClick={() => onNavigate({ name: 'home' })}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Ir a Inicio"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              YB
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                  Yamilka Batista
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                  HGW
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-normal mt-0.5">
                Asesor Independiente Latinoamerica
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-600">
            <button
              onClick={() => onNavigate({ name: 'home' })}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('home') 
                  ? 'text-emerald-700 bg-emerald-50 font-semibold' 
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Inicio
            </button>

            <button
              onClick={() => onNavigate({ name: 'shop' })}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('shop') && !('category' in currentRoute && currentRoute.category)
                  ? 'text-emerald-700 bg-emerald-50 font-semibold' 
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Catálogo Completo
            </button>

            {/* Categories Dropdown */}
            <div className="relative" onMouseLeave={() => setCategoriesDropdown(false)}>
              <button
                onClick={() => setCategoriesDropdown(!categoriesDropdown)}
                onMouseEnter={() => setCategoriesDropdown(true)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <span>Categorías</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {categoriesDropdown && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setCategoriesDropdown(true)}
                >
                  <button
                    onClick={() => {
                      onNavigate({ name: 'category', slug: 'serie-cafes-saludables' });
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 hover:text-emerald-700"
                  >
                    <Coffee className="w-4 h-4 text-amber-700" />
                    <span>Serie Cafés Saludables</span>
                  </button>
                  <button
                    onClick={() => {
                      onNavigate({ name: 'category', slug: 'cuidado-personal' });
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 hover:text-emerald-700"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Cuidado Personal & Turmalina</span>
                  </button>
                  <button
                    onClick={() => {
                      onNavigate({ name: 'category', slug: 'serie-candys-funcionales-hgw' });
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 hover:text-emerald-700"
                  >
                    <Award className="w-4 h-4 text-orange-600" />
                    <span>Candys Funcionales HGW</span>
                  </button>
                  <button
                    onClick={() => {
                      onNavigate({ name: 'category', slug: 'accesorios' });
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 hover:text-emerald-700"
                  >
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>Accesorios de Turmalina</span>
                  </button>
                  <button
                    onClick={() => {
                      onNavigate({ name: 'category', slug: 'alimentos' });
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 hover:text-emerald-700"
                  >
                    <Award className="w-4 h-4 text-emerald-700" />
                    <span>Alimentos, Proteínas y Colágeno</span>
                  </button>
                  <button
                    onClick={() => {
                      onNavigate({ name: 'category', slug: 'equipo' });
                      setCategoriesDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 hover:text-emerald-700"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyan-600" />
                    <span>Equipo y Termos Waterson</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate({ name: 'opportunity' })}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('opportunity') 
                  ? 'text-emerald-700 bg-emerald-50 font-semibold' 
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Únete a HGW
            </button>

            <button
              onClick={() => onNavigate({ name: 'about' })}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('about') 
                  ? 'text-emerald-700 bg-emerald-50 font-semibold' 
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Sobre Yamilka
            </button>

            <button
              onClick={() => onNavigate({ name: 'contact' })}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('contact') 
                  ? 'text-emerald-700 bg-emerald-50 font-semibold' 
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Contacto
            </button>

            <a
              href={SITE_INFO.driveCatalogsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg transition-colors text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-bold flex items-center gap-1"
            >
              <span>Catálogos PDF</span>
            </a>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Buscar productos"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors flex items-center"
              aria-label="Ver carrito"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Comprar en HGW Oficial Button */}
            <a
              href={SITE_INFO.hgwReferralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all"
            >
              <span>Comprar en HGW Oficial</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Expandable Search Input */}
        {searchOpen && (
          <div className="py-3 border-t border-slate-100 animate-in fade-in duration-200">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por producto (ej: café ganoderma, pasta de turmalina, colágeno, etc.)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-24 py-2.5 bg-slate-100/80 hover:bg-slate-100 focus:bg-white rounded-xl text-sm border border-transparent focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Buscar
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center mb-3">
            <Search className="absolute left-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar productos HGW..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-20 py-2.5 bg-slate-100 rounded-xl text-sm border-0 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-1.5 px-3 py-1 bg-emerald-700 text-white text-xs font-semibold rounded-lg"
            >
              Buscar
            </button>
          </form>

          <div className="flex flex-col space-y-1 text-base font-medium text-slate-700">
            <button
              onClick={() => {
                onNavigate({ name: 'home' });
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              Inicio
            </button>
            <button
              onClick={() => {
                onNavigate({ name: 'shop' });
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              Catálogo de Productos
            </button>
            
            <div className="py-2 pl-3 border-l-2 border-emerald-200 my-1 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Categorías</span>
              <button
                onClick={() => {
                  onNavigate({ name: 'category', slug: 'serie-cafes-saludables' });
                  setMobileMenuOpen(false);
                }}
                className="text-left w-full py-1 text-sm text-slate-600 hover:text-emerald-700"
              >
                ☕ Cafés Saludables
              </button>
              <button
                onClick={() => {
                  onNavigate({ name: 'category', slug: 'cuidado-personal' });
                  setMobileMenuOpen(false);
                }}
                className="text-left w-full py-1 text-sm text-slate-600 hover:text-emerald-700"
              >
                ✨ Cuidado Personal & Higiene
              </button>
              <button
                onClick={() => {
                  onNavigate({ name: 'category', slug: 'accesorios' });
                  setMobileMenuOpen(false);
                }}
                className="text-left w-full py-1 text-sm text-slate-600 hover:text-emerald-700"
              >
                🛡️ Turmalina & Accesorios
              </button>
              <button
                onClick={() => {
                  onNavigate({ name: 'category', slug: 'serie-candys-funcionales-hgw' });
                  setMobileMenuOpen(false);
                }}
                className="text-left w-full py-1 text-sm text-slate-600 hover:text-emerald-700"
              >
                🍬 Candys Funcionales
              </button>
              <button
                onClick={() => {
                  onNavigate({ name: 'category', slug: 'alimentos' });
                  setMobileMenuOpen(false);
                }}
                className="text-left w-full py-1 text-sm text-slate-600 hover:text-emerald-700"
              >
                🌿 Alimentos y Colágeno
              </button>
              <button
                onClick={() => {
                  onNavigate({ name: 'category', slug: 'equipo' });
                  setMobileMenuOpen(false);
                }}
                className="text-left w-full py-1 text-sm text-slate-600 hover:text-emerald-700"
              >
                💧 Termos & Equipos
              </button>
            </div>

            <button
              onClick={() => {
                onNavigate({ name: 'opportunity' });
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 text-emerald-700 font-semibold"
            >
              Oportunidad HGW / Afíliate
            </button>
            <button
              onClick={() => {
                onNavigate({ name: 'about' });
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              Sobre Yamilka Batista
            </button>
            <button
              onClick={() => {
                onNavigate({ name: 'contact' });
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              Contacto
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={SITE_INFO.hgwReferralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Comprar en HGW Oficial (Yamilka507)
            </a>
            <a
              href={SITE_INFO.driveCatalogsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-emerald-50 text-emerald-800 rounded-xl font-bold text-sm hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              Ver Catálogos en Google Drive
            </a>
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 border border-slate-300 text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-50 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {SITE_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
