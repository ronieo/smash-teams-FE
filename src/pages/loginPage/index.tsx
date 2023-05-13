import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { useMutation } from 'react-query'
import { login } from '../../apis/services/Auth'
import LoginForm from '../../components/loginForm'
import { Axios, AxiosError } from 'axios'
import { setCookie } from '../../utils/cookies'

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
    },
  })

  return (
    <>
      <S.LoginPageWrapper>
        <LoginForm mutate={mutate} />
        <S.LoginSourseWrapper>
          <S.LoginTextWrapper>
            <S.Title>연차때려!</S.Title>
            <S.Body>
              <span>회사 내 직원들의 연차와 당직 일정을</span>
              <span>효율적으로 관리할 수 있는 협업툴</span>
            </S.Body>
          </S.LoginTextWrapper>
          <S.LoginImage src="/login.jpg" />
        </S.LoginSourseWrapper>
      </S.LoginPageWrapper>
      <S.BackGround></S.BackGround>
    </>
  )
}

export default LoginPage
