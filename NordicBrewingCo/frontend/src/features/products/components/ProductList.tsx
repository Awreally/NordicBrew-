import type { ProductResponse } from "../types/product.types";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: ProductResponse[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
