import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import type { AuthUser } from "../api/auth/auth.types";
import { env } from "../config/env";

interface AuthTokenPayload extends JwtPayload, AuthUser {}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Missing or invalid authorization header" });
    return;
  }

  const token = header.slice(7).trim();

  if (!token) {
    res.status(401).json({ error: "Missing or invalid authorization header" });
    return;
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as AuthTokenPayload;

    if (!decoded.userId || !decoded.role) {
      res.status(401).json({ error: "Invalid token payload" });
      return;
    }

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      res.status(401).json({ error: "Token expired" });
      return;
    }
    if (err instanceof JsonWebTokenError) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }
    res.status(500).json({ error: "Authentication failed" });
  }
};
