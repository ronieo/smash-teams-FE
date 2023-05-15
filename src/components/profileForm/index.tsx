import React from 'react'
import { UseMutateFunction, useQuery } from 'react-query'
import { User } from '../../apis/interface/Auth'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import * as S from './style'

interface ProfileFormProps {}

function ProfileForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<User>()

  return (
    <>
      <S.ProfileWrapper>
        <S.ProfileLogoImage />
      </S.ProfileWrapper>
    </>
  )
}

export default ProfileForm
