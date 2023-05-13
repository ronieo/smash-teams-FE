import { axiosInstance } from '../axios'
import { Admin } from '../interface/Auth'

export const getAdmin = async (teamName: string, keyword: string, page: number) => {
  const { data } = await axiosInstance().get(`/auth/admin?teamName=${teamName}&keyword=${keyword}&page=${page}`)
  return data
}

export const updateAdmin = async (userId: number, teamName: string, role: string) => {
  const data = { userId, teamName, role }
  const { data: responseData } = await axiosInstance().patch('/auth/admin/user', data)
  return responseData
}
