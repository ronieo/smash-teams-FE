import React, { useState } from 'react'
import { UseMutateFunction, useMutation } from 'react-query'
import { AuthResponse, RegisterEnroll } from '../../apis/interface/Auth'
import { AxiosError } from 'axios'
import { RegisterRequest } from '../../apis/interface/Auth'
import { useForm } from 'react-hook-form'
import { emailCheck, join } from '../../apis/services/Auth'
import * as S from './style'
import { EmailCheckRequest } from '../../apis/interface/Auth'




function RegisterForm() {
  const {
    register,
    handleSubmit, 
    getValues,
    formState: { isSubmitting, isDirty, errors}
  } = useForm<RegisterRequest>()

  const { mutate: joinMutation } = useMutation(join, {
    onSuccess: (data) => {
      console.log(data)
    }
  })  

  const { mutate: emailCheckMutation } = useMutation(emailCheck, {
    onSuccess: (data) => { 
      console.log(data)
    }
  })
  

  const onSubmit = (data: RegisterEnroll) => {
    console.log("jish!")
    const { email, username, password, phoneNumber, startWork } = data
    joinMutation({ email, username, password, phoneNumber, startWork })
    console.log(email, username, password, phoneNumber, startWork)
  }

  // email 중복체크
  const onSubmitEmail = () => {
    const email = getValues('email')
    emailCheckMutation(email)
  }


  
  return (
    <>
      <S.BottomContainer>
      
      </S.BottomContainer>
      <S.RegisterWrapper>
        <S.RegisterLogoImage src='/public/title-logo.png' />
        <S.RegisterFormContainer onSubmit={handleSubmit(onSubmit)}>

          <S.Section>
            <S.RegisterInput
              id='email'
              type='email'
              placeholder='이메일'
              aria-invalid={
                !isDirty ? undefined : errors.email ? "true" : "false"
              }
              {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
            {errors.email && <S.ErrorMessage role="alert">{errors.email.message}</S.ErrorMessage>}
            <S.DoubleCheckButton onClick={onSubmitEmail}>중복확인</S.DoubleCheckButton>
          </S.Section>
          <S.Section>
            <S.RegisterInput
              id='username'
              type='text'
              placeholder='이름'
              className='half'
              {...register("username", {
                required: "영문/한글 2~20자 이내로 작성해주세요",
                pattern: {
                  value: /^[A-Za-z가-힣]{2,20}$/,
                  message: "이름은 필수입력입니다."
                }
              })}
            />
            {errors.username && <S.ErrorMessage role="alert">{errors.username.message}</S.ErrorMessage>}
            <S.RegisterInput
              id='phoneNumber'
              type='text'
              placeholder='전화번호'
              className='half'
              {...register('phoneNumber', {
                required: '전화번호는 필수입력입니다.',
                pattern: {
                  value: /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/,
                  message: "휴대폰 번호(010-1234-5678)의 형태로 작성해주세요."
                }
              })}
            />
            {errors.phoneNumber && <S.ErrorMessage role="alert">{errors.phoneNumber.message}</S.ErrorMessage>}
          </S.Section>
          <S.Section>
            <S.RegisterInput
              id='startWork'
              type='date'
              placeholder='입사일'
              className='half'
              // {...register('startWork', {
              //   required: '입사일 필수입력입니다.',
              //   pattern: {
              //     value: /^(?:(?:19|20)\\d{2})-(?:0?[1-9]|1[0-2])-(?:0?[1-9]|[12][0-9]|3[01])$/,
              //     message: "입사일(2023-05-10)의 형태로 작성해주세요."
              //   }
              // })}
            />
          </S.Section>
          <S.Section>
          <S.RegisterInput
            id='password'
            type='password'
            placeholder='비밀번호'
            className='half'
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,20}$/,
                message: "영문, 숫자, 특수문자를 각각 1개 이상 사용하여 8~20자 이내로 작성해주세요.",
              },
              minLength: {
                value: 8,
                message: "최소 8자 입니다."
              }
            })}
          />
          <S.RegisterInput
            id='passwordConfirm'
            type='password'
              placeholder='비밀번호 확인'
              className='half'
            aria-invalid={
              !isDirty ? undefined : errors.password ? "true" : "false"
            }
            {...register("passwordConfirm", {
              required: "비밀번호는 필수 입력입니다.",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,20}$/,
                message: "영문, 숫자, 특수문자를 각각 1개 이상 사용하여 8~20자 이내로 작성해주세요.",
              },
              minLength: {
                value: 8,
                message: "최소 8자 입니다."
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
          {errors.passwordConfirm && <div role="alert">{errors.passwordConfirm.message}</div>}
          </S.Section>
          <S.RegisterButton type='submit'>가입하기</S.RegisterButton>
        </S.RegisterFormContainer>
      </S.RegisterWrapper>

    </>
  )
}

export default RegisterForm