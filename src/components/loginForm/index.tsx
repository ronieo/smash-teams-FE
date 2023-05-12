import React, { useState } from 'react'
import * as S from './style'
import { UseMutateFunction } from 'react-query'
import { useForm } from 'react-hook-form'
import { AuthResponse, LoginRequest } from '../../apis/interface/Auth'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'


interface LoginFormProps {
  mutate: UseMutateFunction<AuthResponse, AxiosError, LoginRequest>
}

function LoginForm({ mutate }: LoginFormProps) {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors }
  } = useForm<LoginRequest>()
  
  const onSubmit = (data: LoginRequest) => {
    mutate(data)
  }

  const navigateToSignUp = () => {
    navigate('/register')
  } 

  return (
    <>
      <S.LoginWrraper >
        <S.LoginLogoImage src='/public/title-logo.png' />
        <S.LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
          <S.LoginInput
            id='email'
            type='email'
            placeholder='이메일'
            aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
          />
          {errors.email && <div role="alert">{errors.email.message}</div>}
          
          <S.LoginInput
            id='password'
            type='password'
            placeholder='비밀번호'
            aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
            {...register('password', {
              required: '비밀번호는 필수입력입니다.',
              minLength: {
                value: 8,
                message: '8자 이상 비밀번호를 입력하세요.'
              }
            })}
          />
          {errors.password && <div role="alert">{errors.password.message}</div>}
          <S.LoginButton type='submit'>로그인</S.LoginButton>
          <S.RegisterButton onClick={navigateToSignUp}>회원가입</S.RegisterButton>
        </S.LoginFormContainer>
      </S.LoginWrraper>
      <S.Footer>
        <S.FooterTitle>연차때려!</S.FooterTitle>
        <S.FooterBody>
          회사 내 직원들의 연차와 당직 일정을<br />
          효율적으로 관리할 수 있는 협업툴
        </S.FooterBody>
      </S.Footer>
    </>
  )
}

export default LoginForm