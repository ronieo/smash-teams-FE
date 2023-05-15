import axios from 'axios'
import { axiosInstance } from '../axios'
import { LoginRequest, LoginResponseData, RegisterEnroll, RegisterRequest, User, UserPayload } from '../interface/Auth'
import { setCookie } from '../../utils/cookies'
import { EmailCheckResponseData } from '../../components/registerForm'

export const login = async (user: LoginRequest) => {
  try {
    const { data, headers } = await axiosInstance().post('/login', user)
    const token = headers.authorization.split(' ')[1]
    setCookie('accessToken', token)
    return data
  } catch (error) {
    throw error
  }
}

export const logout = async () => {
  const { data } = await axiosInstance().post('/logout')
  return data
}

export const join = async (user: RegisterEnroll) => {
  try {
    const { data } = await axiosInstance().post('/join', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

export interface EmailCheckRequest {
  email: string
}

export const emailCheck = async (email: string) => {
  try {
    const data = await axiosInstance().post<EmailCheckResponseData>('/join/check', {
      email,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export interface ProfileUpdateRequest {
  userId: number | undefined
  profileImage: string | Blob
}

export const profileUpdate = async ({ userId, profileImage }: ProfileUpdateRequest) => {
  try {
    const formData = new FormData()
    formData.append('profileImage', profileImage)
    const { data } = await axiosInstance({ multi: true }).post(`/auth/user/${userId}/image`, formData)
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
  const { data } = await axiosInstance().get('/refresh')
  return data
}

export const getUsers = async () => {
  const { data } = await axiosInstance().get<UserPayload[]>('/users')
  return data
}

export const getUser = async () => {
  const { data } = await axiosInstance().get<LoginResponseData>('/auth/user/')
  return data
}
