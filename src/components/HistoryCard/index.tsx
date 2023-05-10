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
import { MyScheduleData, ScheduleStatus } from '../../interface/schedule'

type HistoryCardProps = {
  schedule: MyScheduleData
}

function HistoryCard({ schedule }: HistoryCardProps) {
  const [userType, setUserType] = useState('USER') // CEO(사장), MANAGER(팀장), USER(팀원, default)
  const [status, setStatus] = useState(schedule.status as 'FIRST' | 'REJECTED' | 'APPROVED' | 'LAST')

  const scheduleStatus = {
    FIRST: '1차 결재 대기',
    REJECTED: '거절',
    LAST: '최종 결재 대기',
    APPROVED: '승인',
  }
  // function handleButtonClick(buttonType: 'accept' | 'reject') {
  //   if (buttonType === 'accept' && status === ScheduleStatus.APPROVED) return
  //   if (buttonType === 'reject' && status === ScheduleStatus.REJECTED) return

  //   if (buttonType === 'accept') {
  //     switch (status) {
  //       case ScheduleStatus.FIRST:
  //         setStatus(ScheduleStatus.APPROVED)
  //         break
  //       case ScheduleStatus.REJECTED:
  //         setStatus(ScheduleStatus.LAST)
  //         break
  //       default:
  //         break
  //     }
  //   } else {
  //     switch (status) {
  //       case ScheduleStatus.FIRST:
  //         setStatus(ScheduleStatus.REJECTED)
  //         break
  //       case ScheduleStatus.APPROVED:
  //         setStatus(ScheduleStatus.LAST)
  //         break
  //       default:
  //         break
  //     }
  //   }
  // }
  const [isAccept, setisAccept] = useState(false) // 승인
  const [isReject, setisReject] = useState(false) // 거절

  function handleButtonClick(buttonType: 'accept' | 'reject') {
    if (buttonType === 'accept' && isAccept) return
    if (buttonType === 'reject' && isReject) return

    setisAccept(buttonType === 'accept')
    setisReject(buttonType === 'reject')
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
            <AcceptButton onClick={() => handleButtonClick('accept')} isStatus={status}>
              승인
            </AcceptButton>
            <RejectButton onClick={() => handleButtonClick('reject')} isStatus={status}>
              거절
            </RejectButton>
          </>
        )}
      </CardButtonWrapper>
    </CardWrapper>
  )
}

export default HistoryCard
