import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
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
    res.locals.cartOwner = { sessionId: req.sessionID };
    next();
    return;
  }

  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as AuthTokenPayload;
    const userOwner = { userId: payload.userId } as const;

    await mergeCartOwners({ sessionId: req.sessionID }, userOwner);

    res.locals.cartOwner = userOwner;

    next();
  } catch {
    res.status(403).json({ error: "Unauthorized or expired token" });
  }
};
