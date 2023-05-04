import { useEffect, useState } from 'react'
import { HomeContainer } from './style'
import axios, { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { emailCheck, getUsers, login } from '../../apis/services/Auth'
import { getSuperSchedule } from '../../apis/services/Schedule'
import { getAdminPermissions } from '../../apis/services/Manage'

interface ResType {
  userId: number
  profileImage: string
  name: string
  email: string
  phoneNumber: string
  startWork: string
  teamName: string
  role: string
}
export interface LoginInputs {
  email: string
  password: string
}

export interface EmailCheck {
  email: string
}

function HomePage() {
  const { mutate, isError } = useMutation(login, {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error: AxiosError) => {
      console.log(error)
    },
  })

  // const { data: users, error, isLoading } = useQuery('users', getUsers)
  const { data: users, error, isLoading } = useQuery('/auth/admin/user', getAdminPermissions)
  console.log(users)

  const onSubmit = (data: LoginInputs) => {
    console.log(data)
    mutate(data)
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    setFocus,
  } = useForm<LoginInputs>()

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="email"
          type="text"
          placeholder="이메일"
          aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
        />
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
          {...register('password', {
            required: '비밀번호는 필수 입력입니다.',
            minLength: {
              value: 4,
              message: '8자리 이상 비밀번호를 사용하세요.',
            },
          })}
        />
        <button>제출</button>
      </form>
    </HomeContainer>
  )
}

export default HomePage
