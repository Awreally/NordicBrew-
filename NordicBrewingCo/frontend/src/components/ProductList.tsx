import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { productsApi } from "../api/productsApi";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await productsApi.getAll();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.price} kr
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
