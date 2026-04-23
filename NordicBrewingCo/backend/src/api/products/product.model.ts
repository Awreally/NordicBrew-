import { Schema, model } from "mongoose";
import { ProductCategory } from "./product.types";

export type IProduct = {
  _id: { toString(): string };
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number | null;
  inStock: boolean;
  category: ProductCategory;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

const productSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    compareAtPrice: {
      type: Number,
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["whole-bean", "ground", "cold-brew"],
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = model("Product", productSchema);