import axios from 'axios'
import { axiosInstance } from '../axios'
import { AuthResponse, EmailCheckRequest, LoginRequest, RegisterRequest, User, UserPayload } from '../interface/Auth'
import { setCookie } from '../../utils/cookies'

export const login = async (user: LoginRequest) => {
  const { data, headers } = await axiosInstance().post<AuthResponse>('/login', user)
  const token = headers.authorization.split(' ')[1]
  setCookie('accessToken', token)
  return data
}

export const logout = async () => {
  const { data } = await axiosInstance().post<AuthResponse>('/logout')
  return data
}

export const join = async (user: RegisterRequest) => {
  const formData = new FormData()
  formData.append('email', user.email)
  formData.append('password', user.password)
  formData.append('username', user.username)
  formData.append('phoneNumber', user.phoneNumber)
  formData.append('startWork', user.startWork)
  try {
    const { data } = await axiosInstance({ multi: true }).post<AuthResponse>('/auth/register', formData)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const emailCheck = async (email: string) => {
  try {
    const data = await axiosInstance().post<EmailCheckRequest>('/check', {
      email,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const verify = async () => {
  const { data } = await axiosInstance().get<UserPayload>('/verify')
  return data
}

export const refresh = async () => {
  const { data } = await axiosInstance().get<AuthResponse>('/refresh')
  return data
}

export const getUsers = async () => {
  const { data } = await axiosInstance().get<UserPayload[]>('/users')
  return data
}

export const getUser = async (userId: number) => {
  const { data } = await axiosInstance().get<User[]>(`/users/${userId}`)
  return data
}
