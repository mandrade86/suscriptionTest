export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreateDTO {
  email: string;
  name: string;
  password: string;
}

export interface UserUpdateDTO {
  email?: string;
  name?: string;
  password?: string;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
} 