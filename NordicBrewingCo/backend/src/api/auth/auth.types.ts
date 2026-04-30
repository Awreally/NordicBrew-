type Role = "buyer" | "admin";

export interface AuthResponse {
  token: string;
  user: UserResponse;
}

export interface UserParam {
    userId: string;
}
export interface JWTPayload {
  userId: string;
  role: Role;
  iat?: number;
  exp?: number;
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

export interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface UpdateUserInput {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface UpdatePasswordInput {
  currentPassword: string;
  newPassword: string;
}