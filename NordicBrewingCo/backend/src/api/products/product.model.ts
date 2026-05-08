import { Schema, model } from "mongoose";
import {
  ProductCategory,
  FlavorProfiles,
  CoffeeOrigin,
  ProductRoast,
} from "./product.types";
import { CategoryEnum, RoastEnum, OriginEnum, FlavorProfileEnum } from "./product.types";

export type IProduct = {
  _id: { toString(): string };
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number | null;
  inStock: boolean;
  featured: boolean;
  category: ProductCategory;
  imageUrl: string;
  flavorProfiles: FlavorProfiles[];
  origin: CoffeeOrigin;
  roast: ProductRoast;
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
    featured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: true,
      enum: CategoryEnum.options,
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
    flavorProfiles: {
      type: [String],
      required: true,
      enum: FlavorProfileEnum.options,
      default: [],
    },
    origin: {
      type: String,
      required: true,
      enum: OriginEnum.options,
    },
    roast: {
      type: String,
      required: true,
      enum: RoastEnum.options,
    },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = model<IProduct>("Product", productSchema);
