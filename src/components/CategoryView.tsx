import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Coffee, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  X,
  Flame,
  Pill,
  Wine,
  Apple,
  LayoutGrid
} from 'lucide-react';
import { Product, PageRoute } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES_DATA } from '../data/products';
import { SITE_INFO } from '../data/siteInfo';

interface CategoryViewProps {
  products: Product[];
  initialCategory?: string;
  initialQuery?: string;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onNavigate: (route: PageRoute) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  products,
  initialCategory = 'todos',
  initialQuery = '',
  onSelectProduct,
  onAddToCart,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [sortBy, setSortBy] = useState<'default' | 'name-asc' | 'name-desc'>('default');

  // Update state when props change
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  React.useEffect(() => {
    if (initialQuery !== undefined) {
      setSearchQuery(initialQuery);
    }
  }, [initialQuery]);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category filter
    if (selectedCategory && selectedCategory !== 'todos') {
      const targetCatObj = CATEGORIES_DATA.find(c => c.slug === selectedCategory);
      const targetName = targetCatObj ? targetCatObj.name : selectedCategory;

      list = list.filter((p) => {
        if (selectedCategory === 'serie-cafes-saludables') {
          return p.categories.includes('Serie Cafés Saludables');
        }
        if (selectedCategory === 'cuidado-personal') {
          return p.categories.includes('Cuidado personal');
        }
        if (selectedCategory === 'serie-candys-funcionales-hgw') {
          return p.categories.includes('Serie Candys Funcionales HGW');
        }
        if (selectedCategory === 'accesorios') {
          return p.categories.includes('Accesorios');
        }
        if (selectedCategory === 'alimentos') {
          return p.categories.includes('Alimentos');
        }
        if (selectedCategory === 'equipo') {
          return p.categories.includes('Equipo');
        }
        if (selectedCategory === 'suplementos') {
          return p.categories.includes('Suplementos');
        }
        if (selectedCategory === 'licores') {
          return p.categories.includes('Licores');
        }
        return p.categories.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
      });
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          (p.keywords && p.keywords.toLowerCase().includes(q)) ||
          p.categories.some(c => c.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === 'name-asc') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'name-desc') {
      list.sort((a, b) => b.title.localeCompare(a.title));
    }

    return list;
  }, [products, selectedCategory, searchQuery, sortBy]);

  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case 'serie-cafes-saludables':
        return <Coffee className="w-3.5 h-3.5" />;
      case 'cuidado-personal':
        return <Sparkles className="w-3.5 h-3.5" />;
      case 'accesorios':
        return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'serie-candys-funcionales-hgw':
        return <Award className="w-3.5 h-3.5" />;
      case 'alimentos':
        return <Apple className="w-3.5 h-3.5" />;
      case 'equipo':
        return <Flame className="w-3.5 h-3.5" />;
      case 'suplementos':
        return <Pill className="w-3.5 h-3.5" />;
      case 'licores':
        return <Wine className="w-3.5 h-3.5" />;
      default:
        return <LayoutGrid className="w-3.5 h-3.5" />;
    }
  };

  const currentCategoryInfo = CATEGORIES_DATA.find(c => c.slug === selectedCategory) || CATEGORIES_DATA[0];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentCategoryInfo.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl">
            {currentCategoryInfo.description}. Todos los productos son 100% originales con garantía y asesoría directa de {SITE_INFO.advisorName}.
          </p>

          {/* Special Discount & Drive Catalogs Notice */}
          <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-emerald-950">
            <div>
              <p className="font-bold flex items-center gap-1.5 text-sm text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Descuento del 30% al activarse</span>
              </p>
              <p className="text-slate-600 text-xs mt-0.5">
                Regístrate con el código <strong>{SITE_INFO.hgwSponsorCode}</strong>. {SITE_INFO.priceNote}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href={SITE_INFO.driveCatalogsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white border border-emerald-300 text-emerald-800 font-bold rounded-xl hover:bg-emerald-100 transition-colors shadow-2xs text-xs"
              >
                Descargar Catálogos PDF
              </a>
              <a
                href={SITE_INFO.hgwReferralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-2xs text-xs"
              >
                Comprar en HGW Oficial
              </a>
            </div>
          </div>
        </div>

        {/* Category Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {CATEGORIES_DATA.map((category) => {
            const isSelected = selectedCategory === category.slug;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.slug);
                  if (category.slug === 'todos') {
                    onNavigate({ name: 'shop' });
                  } else {
                    onNavigate({ name: 'category', slug: category.slug });
                  }
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all shadow-2xs ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {getCategoryIcon(category.slug)}
                <span>{category.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {category.itemCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search, Filter Bar & Sort Controls */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 mb-8 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, extracto o ingrediente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results Count & Sort Dropdown */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <span className="text-xs font-semibold text-slate-500">
              Mostrando <strong className="text-slate-900">{filteredProducts.length}</strong> productos
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 hidden sm:inline-block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                <option value="default">Orden predeterminado</option>
                <option value="name-asc">Nombre: A - Z</option>
                <option value="name-desc">Nombre: Z - A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center my-8">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">No se encontraron productos coincidentes</h2>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Intenta buscar con otros términos como &quot;café&quot;, &quot;turmalina&quot;, &quot;arándanos&quot; o limpia los filtros.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('todos');
                }}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Ver todos los productos
              </button>
              <button
                onClick={() => setSearchQuery('café')}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-medium rounded-lg"
              >
                Buscar &quot;Café&quot;
              </button>
              <button
                onClick={() => setSearchQuery('turmalina')}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-medium rounded-lg"
              >
                Buscar &quot;Turmalina&quot;
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
