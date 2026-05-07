import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name can't be longer than 50 characters"),
  lastName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name can't be longer than 50 characters"),
  email: z
    .string()
    .trim()
    .min(1)
    .toLowerCase()
    .email("Must be a valid email address"),
  password: z.string().min(10, "Password must be at least 10 characters"),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1)
    .email("Must be a valid email address")
    .toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export const UpdateUserSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name can't be longer than 50 characters")
      .optional(),
    lastName: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name can't be longer than 50 characters")
      .optional(),
    email: z
      .string()
      .trim()
      .min(1)
      .toLowerCase()
      .email("Must be a valid email address")
      .optional(),
  })
  .refine(
    (data) =>
      data.firstName !== undefined ||
      data.lastName !== undefined ||
      data.email !== undefined,
    {
      message: "At least one field must be provided",
    },
  );

export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;

export const UpdatePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(10, "Password must be at least 10 characters"),
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password cannot match old password",
    path: ["newPassword"],
  });

export type UpdatePasswordInput = z.infer<typeof UpdatePasswordSchema>;
