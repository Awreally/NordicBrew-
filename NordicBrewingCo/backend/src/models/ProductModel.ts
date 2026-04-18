import { Schema, model, InferSchemaType } from "mongoose";

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

export type ProductDb = InferSchemaType<typeof productSchema>;

export const ProductModel = model("Product", productSchema);