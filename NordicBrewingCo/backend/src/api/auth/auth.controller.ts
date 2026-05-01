import { Request, Response, NextFunction } from "express";
import {
  registerUser,
  loginUser,
  updateUser,
  updateUserPassword,
} from "./auth.service";
import { LoginInput, RegisterInput, UpdatePasswordInput, UpdateUserInput } from "./auth.validation";

export const registerUserHandler = async (
  req: Request<{}, {}, RegisterInput>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const AuthResponse = await registerUser(req.body);
    res.status(201).json({
        success: true,
        data: AuthResponse
    });
  } catch (err) {
    next(err);
  }
};

export const loginUserHandler = async (
  req: Request<{}, {}, LoginInput >,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const AuthResponse = await loginUser(req.body);
    res.status(200).json({
        success: true,
        data: AuthResponse
    }); 
  } catch (err) {
    next(err);
  }
};

export const updateUserHandler = async (
  req: Request<{}, {}, UpdateUserInput>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
        const updatedUser = await updateUser(req.user!.userId, req.body)

     res.status(200).json({
        success: true,
        data: updatedUser
    })
  } catch (err) {
    next(err);
  }
};

export const updateUserPasswordHandler = async (
  req: Request<{}, {}, UpdatePasswordInput>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const updatedPassword = await updateUserPassword(req.user!.userId, req.body)
     res.status(200).json({
        success: true,
        data: null
    });
  } catch (err) {
    next(err);
  }
};