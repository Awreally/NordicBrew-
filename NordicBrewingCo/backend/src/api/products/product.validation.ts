import { z } from "zod";
import { schemaEnv } from "../../config/env";
import {
  CategoryEnum,
  RoastEnum,
  FlavorProfileEnum,
  OriginEnum,
} from "./product.types";

const SlugSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, "Product slug is required")
  .max(50, "Product slug can't be longer than 50 characters")
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Product slug can only contain lowercase letters, numbers, and hyphens",
  );

const FeaturedQuerySchema = z
  .enum(["true", "false"])
  .transform((value) => value === "true");

export const GetProductsSchema = z.object({
  category: CategoryEnum.optional(),
  roast: RoastEnum.optional(),
  origin: OriginEnum.optional(),
  flavorProfile: FlavorProfileEnum.optional(),
  featured: FeaturedQuerySchema.optional(),
  page: z.coerce
    .number()
    .int("Page must be a whole number")
    .min(1, "Page must be at least 1")
    .default(1),
  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(schemaEnv.PRODUCTS_MAX_PAGE_SIZE)
    .default(schemaEnv.PRODUCTS_DEFAULT_PAGE_SIZE),
});

export type GetProductsQuery = z.infer<typeof GetProductsSchema>;

const ProductBaseSchema = z.object({
  slug: SlugSchema,
  name: z
    .string()
    .trim()
    .min(1, "Product name is required")
    .max(50, "Product name can't be longer than 50 characters"),
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description can't be longer than 1000 characters"),
  price: z.number().positive("Price must be greater than 0"),
  compareAtPrice: z
    .number()
    .positive("Compare at price must be greater than 0")
    .optional(),
  inStock: z.boolean().default(true),
  featured: z.boolean().default(false),
  category: CategoryEnum,
  imageUrl: z.string().trim().url("Image must be a valid URL"),
  flavorProfiles: z
    .array(FlavorProfileEnum)
    .min(1, "At least one flavor profile is required"),
  origin: OriginEnum,
  roast: RoastEnum,
});

const compareAtPriceRefinement = {
  check: (data: { price?: number; compareAtPrice?: number }) =>
    data.compareAtPrice === undefined ||
    data.price === undefined ||
    data.compareAtPrice > data.price,
  message: {
    message: "Compare at price must be greater than the regular price",
    path: ["compareAtPrice"],
  },
};

export const CreateProductSchema = ProductBaseSchema.refine(
  compareAtPriceRefinement.check,
  compareAtPriceRefinement.message,
);

export type CreateProductInput = z.infer<typeof CreateProductSchema>;

export const ProductSlugParamSchema = z.object({
  slug: SlugSchema,
});

export type ProductParams = z.infer<typeof ProductSlugParamSchema>;

export const UpdateProductSchema = ProductBaseSchema.omit({ slug: true })
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided",
  })
  .refine(compareAtPriceRefinement.check, compareAtPriceRefinement.message);

export type UpdateProductInput = z.infer<typeof UpdateProductSchema>;

export const ProductIdParamSchema = z.object({
  id: z
    .string()
    .trim()
    .regex(/^[a-f\d]{24}$/i, "Invalid product ID"),
});

export type ProductIdParams = z.infer<typeof ProductIdParamSchema>;
