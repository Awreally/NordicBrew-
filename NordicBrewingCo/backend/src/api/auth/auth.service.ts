import { toUserResponse, toUserResponseList } from "./auth.mapper";
import { JWTPayload, AuthResponse, UserResponse } from "./auth.types";
import type {
  UpdatePasswordInput,
  UpdateUserInput,
  LoginInput,
  RegisterInput,
} from "./auth.validation";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "./auth.model";
import { env } from "../../config/env";
import { AppError } from "../../errors/AppError";

export const registerUser = async (
  input: RegisterInput,
): Promise<AuthResponse> => {
  const existing = await UserModel.findOne({ email: input.email });

  if (existing) {
    throw new AppError(409, "User already exists", "USER_ALREADY_EXISTS");
  }
  const passwordHash = await bcrypt.hash(input.password, 10);
  const user = await UserModel.create({
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    passwordHash,
    role: "buyer",
  });
  const payload: JWTPayload = {
    userId: user._id.toString(),
    role: user.role,
  };

  const token = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });

  return {
    token,
    user: toUserResponse(user),
  };
};

export const loginUser = async (input: LoginInput): Promise<AuthResponse> => {
  const user = await UserModel.findOne({ email: input.email }).select(
    "+passwordHash",
  );
  if (!user) {
    throw new AppError(401, "Invalid Credentials", "INVALID_CREDENTIALS");
  }
  const passwordCompare = await bcrypt.compare(
    input.password,
    user.passwordHash,
  );
  if (!passwordCompare) {
    throw new AppError(401, "Invalid Credentials", "INVALID_CREDENTIALS");
  }

  const payload: JWTPayload = {
    userId: user._id.toString(),
    role: user.role,
  };

  const token = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
  return {
    token,
    user: toUserResponse(user),
  };
};

export const updateUser = async (
  userId: string,
  input: UpdateUserInput,
): Promise<UserResponse> => {
  if (input.email) {
    const existing = await UserModel.findOne({
      email: input.email,
      _id: { $ne: userId },
    });
    if (existing)
      throw new AppError(409, "Email already in use", "EMAIL_NOT_UNIQUE");
  }

  const user = await UserModel.findByIdAndUpdate(
    userId,
    { $set: input },
    { new: true, runValidators: true },
  );
  if (!user) {
    throw new AppError(404, "User not found", "USER_NOT_FOUND");
  }
  return toUserResponse(user);
};

export const updateUserPassword = async (
  userId: string,
  input: UpdatePasswordInput,
): Promise<void> => {
  const user = await UserModel.findById(userId).select("+passwordHash");
  if (!user) {
    throw new AppError(404, "User not found", "USER_NOT_FOUND");
  }

  const valid = await bcrypt.compare(input.currentPassword, user.passwordHash);
  if (!valid) {
    throw new AppError(401, "Current password is wrong", "INVALID_PASSWORD");
  }

  user.passwordHash = await bcrypt.hash(input.newPassword, 10);
  await user.save();
};
