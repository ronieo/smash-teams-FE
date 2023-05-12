import React, { useState, ReactNode } from 'react'
import * as S from './style'
import Swal from 'sweetalert2'
import DropDown from '../common/dropdown'
import { theme } from '../../styles/Theme'

type FormType = 'dayOff' | 'halfOff' | 'nightShift'
const FORM_TYPES = {
  DAY_OFF: 'dayOff',
  HALF_OFF: 'halfOff',
  NIGHT_SHIFT: 'nightShift',
} as const
interface ShiftFormContainerProps {
  children: ReactNode
  type: string
  location: string
  // selectedDateRangeText: string
}

function ShiftFormContainer({ type, location }: ShiftFormContainerProps) {
  const [formType, setFormType] = useState<FormType>(FORM_TYPES.DAY_OFF)
  const handleTitleChange = location === '/dayoff' ? (formType === FORM_TYPES.DAY_OFF ? '연차' : '반차') : '당직'
  const handleStartInputChange = location === '/dayoff' ? (formType === 'dayOff' ? '시작 날짜' : '날짜') : '근무 시작'
  const handleEndInputChange = location === '/dayoff' ? (formType === 'dayOff' ? '시작 날짜' : '날짜') : '근무 종료'

  // dropdown
  const [selectItem, setSelectItem] = useState('당직시간 선택') //    e.preventDefault() 어떻게해야...?
  const handleSelectItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSelectItem
  }

  const handleDayOffButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFormType(FORM_TYPES.DAY_OFF)
    console.log('연차버튼 클릭!')
  }

  const handleHalfOffButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFormType(FORM_TYPES.HALF_OFF)
    console.log('반차버튼 클릭!')
  }

  const handleConfirmButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    Swal.fire({
      title: `${handleTitleChange} 신청하시겠어요?`,
      text: '신청 후 취소하실 수 없습니다!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: theme.colors.blue,
      confirmButtonText: '네, 신청할게요!',
      cancelButtonColor: theme.colors.redReject,
      cancelButtonText: '취소할게요!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '신청!',
          text: `신청이 완료되었어요! 내역보기에서 확인해보세요 :)`,
          icon: 'success',
          confirmButtonColor: theme.colors.blue,
          confirmButtonText: '내역보기 페이지 바로가기',
        })
      }
    })
  }

  return (
    <S.RedContainerWrapper>
      {location === '/dayoff' ? (
        <S.DayOffCountContainer>
          <p>남은 연차 날짜</p>
          {/* <p>`Day-${'dayOffCount'}`</p> */}
          <p>Day-17.5</p>
        </S.DayOffCountContainer>
      ) : null}
      <S.ShiftTitle>{handleTitleChange}</S.ShiftTitle>
      {location === '/dayoff' ? (
        <S.InputWrapper>
          <S.Label htmlFor="startDate halfDate">{handleStartInputChange}</S.Label>
          <S.DateInput
            className="startDate halfDate"
            id="startDate"
            type="text"
            name="startDate"
            value="캘린더에서 받아오는값"
          />
        </S.InputWrapper>
      ) : (
        <S.InputWrapper>
          <S.DateInput id="endDate" type="text" name="endDate" value="근무 시작" />{' '}
        </S.InputWrapper>
      )}
      {location === '/dayoff' ? (
        <S.InputWrapper>
          <S.Label htmlFor="endDate halfOffTime">{handleEndInputChange}</S.Label>
          {formType === 'dayOff' ? (
            <S.DateInput id="endDate" type="text" name="endDate" value="종료 날짜" />
          ) : (
            <S.TimeInput id="endDate" type="text" name="endDate" value=" 반차 시간" />
          )}
        </S.InputWrapper>
      ) : (
        <S.InputWrapper>
          <S.DateInput id="endDate" type="text" name="endDate" value="근무 종료" />{' '}
        </S.InputWrapper>
      )}
      <S.InputWrapper>
        <S.Label htmlFor="reason">사유</S.Label>
        <S.Input id="reason" type="text" name="reason" value="" />
      </S.InputWrapper>
      {location === '/dayoff' ? (
        <S.ButtonsWrapper>
          <S.DayOffButton id="dayOff" type="submit" onClick={handleDayOffButtonClick}>
            연차
          </S.DayOffButton>
          <S.HalfOffButton id="halfOff" type="submit" onClick={handleHalfOffButtonClick}>
            반차
          </S.HalfOffButton>
        </S.ButtonsWrapper>
      ) : (
        <S.SizedBox />
      )}
      <S.ApprovalRequestButton type="submit" onClick={handleConfirmButtonClick}>
        승인요청하기
      </S.ApprovalRequestButton>
    </S.RedContainerWrapper>
  )
}

export default ShiftFormContainer
