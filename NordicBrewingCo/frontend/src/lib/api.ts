const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export const apiFetch = async <T>(
    endpoint: string,
    method: HttpMethod = 'GET',
    body?: unknown,
): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message ?? "Something went wrong")
    }

    const data = await response.json();
    return data;
};