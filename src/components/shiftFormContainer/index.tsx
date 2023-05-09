import React, { useState } from 'react'
import * as S from './style'

type FormType = 'dayOff' | 'halfOff' | 'nightShift'

interface ShiftFormContainerProps {
  type: string
}

function ShiftFormContainer({ type }: ShiftFormContainerProps) {
  const [formType, setFormType] = useState<FormType>('dayOff')

  const handleHalfOffButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFormType('halfOff')
  }

  return (
    <S.RedContainerWrapper>
      <S.DayOffCountContainer>
        <p>남은 연차 날짜</p>
        {/* <p>`Day-${'dayOffCount'}`</p> */}
        <p>Day-17.5</p>
      </S.DayOffCountContainer>
      <S.ShiftTitle>{formType === 'dayOff' ? '연차' : '반차'}</S.ShiftTitle>
      <S.InputWrapper>
        <S.Label htmlFor="startDate halfDate">{formType === 'dayOff' ? '시작 날짜' : '날짜'}</S.Label>
        <S.DateInput
          className="startDate halfDate"
          id="startDate"
          type="text"
          name="startDate"
          value="캘린더에서 받아오는값"
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label htmlFor="endDate halfOffTime">{formType === 'dayOff' ? '종료 날짜' : '반차 시간'}</S.Label>
        {formType === 'dayOff' ? (
          <S.DateInput id="endDate" type="text" name="endDate" value="종료 날짜" />
        ) : (
          <S.TimeInput id="endDate" type="text" name="endDate" value=" 반차 시간" />
        )}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label htmlFor="reason">사유</S.Label>
        <S.Input id="reason" type="text" name="reason" value="" />
      </S.InputWrapper>
      <S.ButtonsWrapper>
        <S.DayOffButton
          id="dayOff"
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            setFormType('dayOff')
          }}
        >
          연차
        </S.DayOffButton>
        <S.HalfOffButton id="halfOff" type="submit" onClick={handleHalfOffButtonClick}>
          반차
        </S.HalfOffButton>
      </S.ButtonsWrapper>
      <S.ApprovalRequestButton type="submit">승인요청하기</S.ApprovalRequestButton>
    </S.RedContainerWrapper>
  )
}

export default ShiftFormContainer
