import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { useMutation } from 'react-query'
import { login } from '../../apis/services/Auth'
import LoginForm from '../../components/loginForm'
import { Axios, AxiosError } from 'axios'



// 로그인 페이지
function LoginPage() {
  const navigate = useNavigate()
  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      console.log('success')
      navigate('/')
    },
    onError: (err: AxiosError) => {
      alert('login fail')
    }
  })

  return (
    <>
      <LoginForm mutate={mutate} />
    </>
  )
}

export default LoginPage
