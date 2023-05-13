import React from 'react'
import { UseMutateFunction } from 'react-query'
import { AuthResponse, User } from '../../apis/interface/Auth'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import * as S from './style'

interface ProfileFormProps {
  mutate: UseMutateFunction<AuthResponse, AxiosError, User>
}

function ProfileForm({ mutate }: ProfileFormProps) {
  
  const {
    register,
    handleSubmit, 
    formState: { isSubmitting, isDirty, errors}
  } = useForm<User>()

  const onSubmit = (data: User) => {
    mutate(data)
  }

  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileLogoImage />
        <S.ProfileFormContainer>
          <S.ProfileInput
            id='email'
            type='email'
            placeholder='이메일'
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          <S.ProfileInput
            id='name'
            type='text'
            placeholder='이름'
            aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
            {...register("name", {
              required: "이름은 필수 입력입니다.",
            })}
          />
          <S.ProfileInput
            id='phoneNumber'
            type='text'
            placeholder='전화번호'

          />
          <S.ProfileInput
            id='startWork'
            type='text'
            placeholder='입사일'
            {...register('',{})}
          />
          <S.ProfileInput
            id='password'
            type='password'
            placeholder='비밀번호'
            aria-invalid={
              !isDirty ? undefined : errors.password ? "true" : "false"
            }
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
            })}
          />
          <S.ProfileInput
            id='passwordConfirm'
            type='password'
            placeholder='비밀번호 확인'
            {...register("passwordConfirm", {
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
              validate: {
                check: (val) => {
                  if (getValues("password") !== val) {
                    return "비밀번호가 일치하지 않습니다.";
                  }
                },
              },
            })}
          />
          <S.ProfileModifyButton>수정하기</S.ProfileModifyButton>
        </S.ProfileFormContainer>
      </S.ProfileWrapper>
    </>
  )
}

export default ProfileForm