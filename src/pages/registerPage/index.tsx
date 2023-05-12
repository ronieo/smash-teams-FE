import { useMutation } from 'react-query'
import RegisterForm from '../../components/registerForm'
import { RegisterContainer } from './style'
import { join } from '../../apis/services/Auth'
import { AxiosError } from 'axios'

// 회원가입하기 페이지
function RegisterPage() {
  const { mutate } = useMutation(join, {
    onSuccess: (data) => {
      
    }, 
    onError: (err: AxiosError) => {
      console.log(err)
    }
  })


  return (
    <RegisterForm/>
  )


}

export default RegisterPage
