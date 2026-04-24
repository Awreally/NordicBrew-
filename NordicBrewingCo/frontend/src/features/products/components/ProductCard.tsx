import type { ProductResponse } from "../types/product.types";

interface ProductCardProps {
    product: ProductResponse;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    );
};