import React, { useState, useEffect } from 'react';
import { PageRoute, Product, CartItem } from './types';
import { PRODUCTS, getProductBySlug } from './data/products';
import { parsePath, routeToPath } from './utils/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { CategoryView } from './components/CategoryView';
import { ProductDetail } from './components/ProductDetail';
import { OpportunityView } from './components/OpportunityView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ArrowLeft, Search, ShoppingBag } from 'lucide-react';
import { SITE_INFO } from './data/siteInfo';

const CART_STORAGE_KEY = 'hgw_yamilka_cart_v1';

export default function App() {
  // Current route state initialized from URL
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => 
    parsePath(window.location.pathname, window.location.search)
  );

  // Cart state initialized from localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Failed to persist cart items to localStorage', e);
    }
  }, [cartItems]);

  // Handle browser back and forward button
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(parsePath(window.location.pathname, window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title dynamically based on route
  useEffect(() => {
    let title = `${SITE_INFO.name} | ${SITE_INFO.title}`;
    if (currentRoute.name === 'product' && currentRoute.slug) {
      const prod = getProductBySlug(currentRoute.slug);
      if (prod) {
        title = `${prod.title} | ${SITE_INFO.name}`;
      }
    } else if (currentRoute.name === 'category' && currentRoute.slug) {
      title = `${currentRoute.slug.replace(/-/g, ' ').toUpperCase()} | Catálogo HGW`;
    } else if (currentRoute.name === 'shop') {
      title = `Catálogo de Productos | ${SITE_INFO.name}`;
    } else if (currentRoute.name === 'opportunity') {
      title = `Oportunidad de Negocio y Membresía HGW | ${SITE_INFO.name}`;
    } else if (currentRoute.name === 'about') {
      title = `Sobre Yamilka Batista | Asesor Independiente HGW`;
    } else if (currentRoute.name === 'contact') {
      title = `Contacto y Asesoría Directa | ${SITE_INFO.name}`;
    }
    document.title = title;
  }, [currentRoute]);

  // Navigate handler
  const handleNavigate = (route: PageRoute) => {
    const path = routeToPath(route);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Render view based on route
  const renderCurrentView = () => {
    switch (currentRoute.name) {
      case 'home':
        return (
          <HomeView
            products={PRODUCTS}
            onSelectProduct={(p) => handleNavigate({ name: 'product', slug: p.slug })}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onNavigate={handleNavigate}
          />
        );

      case 'shop':
        return (
          <CategoryView
            products={PRODUCTS}
            initialCategory="todos"
            onSelectProduct={(p) => handleNavigate({ name: 'product', slug: p.slug })}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onNavigate={handleNavigate}
          />
        );

      case 'category':
        return (
          <CategoryView
            products={PRODUCTS}
            initialCategory={currentRoute.slug || 'todos'}
            onSelectProduct={(p) => handleNavigate({ name: 'product', slug: p.slug })}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onNavigate={handleNavigate}
          />
        );

      case 'search':
        return (
          <CategoryView
            products={PRODUCTS}
            initialCategory="todos"
            initialQuery={currentRoute.query || ''}
            onSelectProduct={(p) => handleNavigate({ name: 'product', slug: p.slug })}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onNavigate={handleNavigate}
          />
        );

      case 'product': {
        const product = getProductBySlug(currentRoute.slug || '');
        if (!product) {
          return (
            <div className="bg-slate-50 min-h-[70vh] py-16 px-4 flex items-center justify-center">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-md text-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">Producto no encontrado</h1>
                <p className="text-xs text-slate-500 mt-2">
                  El producto que buscas puede haber cambiado de nombre o fue reubicado en otra categoría.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <button
                    onClick={() => handleNavigate({ name: 'shop' })}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    Ver todo el catálogo
                  </button>
                  <button
                    onClick={() => handleNavigate({ name: 'home' })}
                    className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                  >
                    Ir a la página de inicio
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return (
          <ProductDetail
            product={product}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        );
      }

      case 'opportunity':
        return <OpportunityView />;

      case 'about':
        return <AboutView />;

      case 'contact':
        return <ContactView />;

      default:
        return (
          <div className="bg-slate-50 min-h-[70vh] py-16 px-4 flex items-center justify-center">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-md text-center shadow-xs">
              <h1 className="text-5xl font-black text-slate-900 tracking-tight">404</h1>
              <h2 className="text-lg font-bold text-slate-800 mt-2">Página no encontrada</h2>
              <p className="text-xs text-slate-500 mt-2">
                La página a la que intentas acceder no existe o ha sido movida.
              </p>
              <div className="mt-6 flex gap-3 justify-center">
                <button
                  onClick={() => handleNavigate({ name: 'home' })}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Volver al Inicio
                </button>
                <button
                  onClick={() => handleNavigate({ name: 'shop' })}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
                >
                  Ver Catálogo
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      {/* Main Header */}
      <Header
        currentRoute={currentRoute}
        cartCount={totalCartCount}
        onNavigate={handleNavigate}
        onOpenCart={() => setIsCartOpen(true)}
        onSearch={(query) => handleNavigate({ name: 'search', query })}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Main Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigate={handleNavigate}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
