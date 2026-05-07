import { Types } from "mongoose";

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

export type CartOwner =
  | {
      userId: string;
      sessionId?: never;
    }
  | {
      userId?: never;
      sessionId: string;
    };

export interface ICart {
  user?: Types.ObjectId;
  sessionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICartItem {
    cart: Types.ObjectId;
    product: Types.ObjectId;
    quantity: number;
    unitPrice: number;
    createdAt: Date;
    updatedAt: Date;
}


