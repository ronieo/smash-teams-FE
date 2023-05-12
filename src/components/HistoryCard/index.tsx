import { useState } from 'react'
import {
  AcceptButton,
  CardButtonWrapper,
  CardWrapper,
  CurrentStatusButton,
  DateSchedule,
  DateTitle,
  DateWrapper,
  PositionName,
  ReasonContent,
  ReasonTitle,
  ReasonWrapper,
  RejectButton,
  TeamName,
  TitleWrapper,
  UserName,
} from './style'
import { ButtonStatusProps, MyScheduleData, ScheduleStatus, ToggleButtonProps } from '../../interface/schedule'
import { useMutation } from 'react-query'
import { orderSchedule } from '../../apis/services/Schedule'
import Swal from 'sweetalert2'

type HistoryCardProps = {
  schedule: MyScheduleData
}

function HistoryCard({ schedule }: HistoryCardProps) {
  const [userType, setUserType] = useState('man') // CEO(사장), MANAGER(팀장), USER(팀원, default)
  const [status, setStatus] = useState(schedule.status as 'FIRST' | 'REJECTED' | 'APPROVED' | 'LAST')

  const { mutate, isError, isLoading } = useMutation(orderSchedule, {
    onSuccess: (data) => {},
  })

  const scheduleStatus = {
    FIRST: '1차 결재 대기',
    REJECTED: '거절',
    LAST: '최종 결재 대기',
    APPROVED: '승인',
  }

  // 승인
  const [isAccept, setisAccept] = useState<'BEFORE' | 'APPROVED' | 'REJECTED'>('BEFORE')
  // 거절
  const [isReject, setisReject] = useState<'BEFORE' | 'APPROVED' | 'REJECTED'>('BEFORE')

  // 승인, 거절 후 버튼 상태 변경
  function handleButtonClick(buttonType: 'BEFORE' | 'APPROVED' | 'REJECTED') {
    if (buttonType === 'APPROVED') {
      Swal.fire({
        title: '승인하시겠습니까?',
        text: '승인 후 취소할 수 없습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(71, 111, 211)',
        cancelButtonColor: 'rgb(211, 71, 71)',
        confirmButtonText: '네, 승인할게요!',
        cancelButtonText: '취소할게요!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('승인되었습니다.', '완료된 목록에서 확인해주세요.', 'success')
          setisAccept(buttonType)
          setisReject('BEFORE')
          mutate({
            scheduleId: schedule.scheduleId,
            status: 'APPROVED',
          })
        }
      })
      //  승인 후 데이터 변경  해야함
    }
    if (buttonType === 'REJECTED') {
      Swal.fire({
        title: '거절하시겠습니까?',
        text: '거절 후 취소할 수 없습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(211, 71, 71)',
        cancelButtonColor: 'rgb(71, 111, 211)',
        confirmButtonText: '네, 거절할게요!',
        cancelButtonText: '취소할게요!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('거절되었습니다.', '완료된 목록에서 확인해주세요.', 'error')
          setisReject(buttonType)
          setisAccept('BEFORE')
          mutate({
            scheduleId: schedule.scheduleId,
            status: 'REJECTED',
          })
        }
      })
      //  거절 후 데이터 변경  해야함
    }
  }

  return (
    <CardWrapper isStatus={status}>
      <TitleWrapper>
        <TeamName>{schedule.user.teamName}</TeamName>
        <PositionName>{schedule.user.role}</PositionName>
        <UserName>{schedule.user.name}</UserName>
      </TitleWrapper>
      <DateWrapper>
        <DateTitle>일정</DateTitle>
        <DateSchedule>{schedule.startDate}</DateSchedule>
      </DateWrapper>
      <ReasonWrapper>
        <ReasonTitle>사유</ReasonTitle>
        <ReasonContent>쉬고싶어요</ReasonContent>
      </ReasonWrapper>
      <CardButtonWrapper>
        {userType === 'USER' ? (
          <CurrentStatusButton isStatus={status}>{scheduleStatus[status]}</CurrentStatusButton>
        ) : (
          <>
            <AcceptButton onClick={() => handleButtonClick('APPROVED')} isButtonStatus={isAccept}>
              승인
            </AcceptButton>
            <RejectButton onClick={() => handleButtonClick('REJECTED')} isButtonStatus={isReject}>
              거절
            </RejectButton>
          </>
        )}
      </CardButtonWrapper>
    </CardWrapper>
  )
}

export default HistoryCard
