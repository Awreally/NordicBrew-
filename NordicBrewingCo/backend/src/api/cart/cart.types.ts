export interface CartAddItemBody {
    productId: string;
    quantity: number;
}

export interface UpdateCartItemBody {
    quantity: number;
}

export interface CartItemParams {
    productId: string; 
}

export type CartOwner = { userId: string } | { sessionId: string };

