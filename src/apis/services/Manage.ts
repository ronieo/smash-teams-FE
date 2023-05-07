import { axiosInstance } from '../axios'

export const getAdminPermissions = async () => {
  const { data } = await axiosInstance().get('/auth/admin/user')
  return data
}
