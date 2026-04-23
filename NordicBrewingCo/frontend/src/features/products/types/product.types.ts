export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
  category: 'whole-bean' | 'ground' | 'cold-brew';
  imageUrl: string;
}