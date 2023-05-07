import { axiosInstance } from '../axios'

export const getMainSchedule = async () => {
  const { data } = await axiosInstance().get('/auth/user/main')
  return data
}

export const getUserSchedule = async () => {
  const { data } = await axiosInstance().get('/auth/user/schedule')
  return data
}

export const getSuperSchedule = async () => {
  const { data } = await axiosInstance().get('/auth/super/schedule')
  return data
}
