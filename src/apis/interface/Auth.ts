import { CgPassword } from 'react-icons/cg'

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest extends LoginRequest {
  username: string
  phoneNumber: string
  startWork: string
  passwordConfirm?: string
}

export interface UserPayload {
  id: number
  email: string
  username: string
}

export interface AuthResponse {}

export interface Content extends UserPayload {
  iat: number
  exp: number
}

export interface LogoutRequest {
  refreshToken: string
}

export interface User {
  name: string
  email: string
  password: string
  phoneNumber: string
  startWork: string
  profileImage: string
}

export interface EmailCheckRequest {
  email: string
}

export interface RegisterEnroll {
  username: string
  email: string
  password: string
  phoneNumber: string
  startWork: string
}
