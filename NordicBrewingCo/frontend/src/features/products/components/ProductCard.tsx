import type { ProductResponse } from "../types/product.types";

interface ProductCardProps {
    product: ProductResponse;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const {imageUrl} = product
    return (
        <div>
            <img src={imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    );
};