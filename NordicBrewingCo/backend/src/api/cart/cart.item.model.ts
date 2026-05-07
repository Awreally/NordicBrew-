import { Schema, model, HydratedDocument, Model } from "mongoose";
import { ICartItem } from "./cart.types";

type CartItemDocument = HydratedDocument<ICartItem>;

type CartItemModel = Model<ICartItem, {}, {}, {}, CartItemDocument>;

const cartItemSchema = new Schema<ICartItem, CartItemModel>(
    {
        cart: {
            type: Schema.Types.ObjectId,
            ref: 'Cart',
            required: true,
            index: true,
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'product',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        unitPrice: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    {
        timestamps: true,
    },
);

cartItemSchema.index({ cart: 1, product: 1}, { unique: true });

const CartItem = model<ICartItem>('CartItem', cartItemSchema);

export default CartItem;
