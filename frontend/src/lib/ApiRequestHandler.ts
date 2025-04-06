const API_URL = process.env.API_URL;

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestOptions {
  method?: Method;
  path: string;
  body?: any;
  headers?: Record<string, string>;
}

export async function ApiRequestHandler<T = any>({
  method = "GET",
  path,
  body,
  headers = {},
}: RequestOptions): Promise<T> {
  const options: RequestInit = {
    method,
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${API_URL}/${path}`, options);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(errorData.message || "API request failed", response.status);
  }

  return await response.json();
}

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "Error";
    this.status = status;
  }
}
