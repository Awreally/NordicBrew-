import { Request, Response, NextFunction } from "express"
import type { Role } from "../api/auth/auth.types"

export const requireRole = (role: Role ) => {
    return (req: Request, res: Response, next: NextFunction):void => {
        if (!req.user) {
            res.status(401).json({ error: 'Not authenticated' });
            return;
        }
        if (req.user.role !== role) {
            res.status(403).json({ error: 'Forbidden - insufficent role'});
            return;
        }
        next();
    };
}