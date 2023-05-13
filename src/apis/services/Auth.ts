import axios from 'axios'
import { axiosInstance } from '../axios'
import { EmailCheckRequest, LoginRequest, RegisterEnroll, RegisterRequest, User, UserPayload } from '../interface/Auth'
import { setCookie } from '../../utils/cookies'

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

export const emailCheck = async (email: string) => {
  try {
    const data = await axiosInstance().post<EmailCheckRequest>('/join/check', {
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
  const { data } = await axiosInstance().get('/refresh')
  return data
}

export const getUsers = async () => {
  const { data } = await axiosInstance().get<UserPayload[]>('/users')
  return data
}

export const getUser = async (userId: number | undefined) => {
  const { data } = await axiosInstance().get<User[]>(`/auth/user/${userId}`)
  return data
}
