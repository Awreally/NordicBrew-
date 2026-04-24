import { useEffect, useState } from "react";
import type { Product } from "../types/product.types";
import { productsApi } from "../api/product.api";

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
        console.log(data);
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
  <>
    <p>Count: {products.length}</p>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <article>
            <img src={product.imageUrl} alt=""/>
            <h2>{product.name}</h2>
            <div>
            <p>{product.price} kr</p>
            <p>{product.description}</p>
            </div>
          
          </article>
        </li>
      ))}
    </ul>
  </>
);

};

export default ProductList;
