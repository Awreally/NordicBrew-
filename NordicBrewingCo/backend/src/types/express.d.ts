import "express";
import type { AuthUser } from "../api/auth/auth.types";

declare module "express" {
  interface Request {
    user?: AuthUser;
  }
}