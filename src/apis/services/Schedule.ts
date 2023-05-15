import { orderScheduleProps } from '../../components/historyCard'
import { axiosInstance } from '../axios'

export const getMainSchedule = async () => {
  const { data } = await axiosInstance().get('/auth/user/main')
  return data
}

export const getUserSchedule = async (id: number) => {
  const { data } = await axiosInstance().get(`/auth/user/${id}/schedule`)
  return data
}

export const getSuperSchedule = async () => {
  const { data } = await axiosInstance().get('/auth/super/schedule')
  return data
}

export const orderSchedule = async (schedule: orderScheduleProps) => {
  const { data } = await axiosInstance().post('/auth/super/schedule/order', {
    schedule,
  })
  return data
}
