export interface ProductBenefit {
  title?: string;
  text: string;
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  price: number;
  salePrice?: number;
  categories: string[];
  primaryCategory: string;
  brand: string;
  thumbnailUrl: string;
  excerpt: string;
  advantages: string[];
  benefits: ProductBenefit[];
  ingredients?: string[];
  howToUse?: string[];
  presentation?: string;
  netContent?: string;
  shelfLife?: string;
  precautions?: string[];
  keywords?: string;
  featured?: boolean;
  rawContentHtml?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: number;
  iconName: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PageRoute = 
  | { name: 'home' }
  | { name: 'shop'; category?: string; query?: string }
  | { name: 'product'; slug: string }
  | { name: 'category'; slug: string }
  | { name: 'about' }
  | { name: 'opportunity' }
  | { name: 'contact' }
  | { name: 'cart' }
  | { name: 'search'; query: string };
