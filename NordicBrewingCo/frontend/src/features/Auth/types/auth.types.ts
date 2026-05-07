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

export interface AuthResponse {
  token: string;
  user: UserResponse;
}

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  createdAt?: string;
  updatedAt?: string;
}

type Role = "buyer" | "admin";

export interface ApiSuccess<T> {
  success: true;
  data: T;
}
