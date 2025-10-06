export interface LoginRequest {
 
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  refreshToken?: string;
  tokenExpiry?: string;
}
