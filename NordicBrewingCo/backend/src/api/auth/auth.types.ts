export type Role = "buyer" | "admin";

export interface AuthUser {
  userId: string;
  role: Role;
}

export interface JWTPayload extends AuthUser {
  iat?: number;
  exp?: number;
}

export interface AuthResponse {
  token: string;
  user: UserResponse;
}

export interface UserParam {
    userId: string;
}

export type IUser = {
  _id: { toString(): string };
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
};

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  createdAt?: string;
  updatedAt?: string;
}