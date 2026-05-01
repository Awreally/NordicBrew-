import { apiFetch } from "../../../lib/api";
import type { AuthResponse, LoginInput, RegisterInput, ApiSuccess } from "../types/auth.types";

export const fetchRegisterUser = async (
    input: RegisterInput,
): Promise<ApiSuccess<AuthResponse>> => {
    return apiFetch<ApiSuccess<AuthResponse>>('/auth/register', 'POST', input)
}

export const fetchLoginUser = async (
  input: LoginInput,
): Promise<ApiSuccess<AuthResponse>> => {
  return apiFetch<ApiSuccess<AuthResponse>>("/auth/login", "POST", input);
};