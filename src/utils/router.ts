import { PageRoute } from '../types';

export function parsePath(pathname: string, hash: string): PageRoute {
  // If hash routing is present (e.g. #/producto/pasta-dental)
  let cleanPath = pathname;
  if (hash && hash.startsWith('#/')) {
    cleanPath = hash.slice(1);
  }

  // Remove trailing slashes (except root)
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Check product route: /producto/:slug
  const productMatch = cleanPath.match(/^\/producto\/([a-zA-Z0-9_-]+)/);
  if (productMatch) {
    return { name: 'product', slug: productMatch[1] };
  }

  // Check category route: /categoria/:slug
  const categoryMatch = cleanPath.match(/^\/categoria\/([a-zA-Z0-9_-]+)/);
  if (categoryMatch) {
    return { name: 'category', slug: categoryMatch[1] };
  }

  if (cleanPath === '/tienda' || cleanPath === '/productos' || cleanPath === '/catalogo') {
    return { name: 'shop' };
  }

  if (cleanPath === '/sobre-nosotros' || cleanPath === '/nosotros') {
    return { name: 'about' };
  }

  if (cleanPath === '/oportunidad' || cleanPath === '/negocio' || cleanPath === '/afiliate') {
    return { name: 'opportunity' };
  }

  if (cleanPath === '/contacto') {
    return { name: 'contact' };
  }

  if (cleanPath === '/carrito' || cleanPath === '/cart') {
    return { name: 'cart' };
  }

  return { name: 'home' };
}

export function routeToPath(route: PageRoute): string {
  switch (route.name) {
    case 'home':
      return '/';
    case 'shop':
      return route.category ? `/categoria/${route.category}` : '/tienda';
    case 'product':
      return `/producto/${route.slug}/`;
    case 'category':
      return `/categoria/${route.slug}/`;
    case 'about':
      return '/sobre-nosotros';
    case 'opportunity':
      return '/oportunidad';
    case 'contact':
      return '/contacto';
    case 'cart':
      return '/carrito';
    default:
      return '/';
  }
}
