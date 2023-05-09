// 연차/당직 내역보기 페이지

import { useQuery } from 'react-query'
import * as S from './style'

import { getUserSchedule } from '../../apis/services/Schedule'
import HalfOffShiftForm from '../../components/HalfOffShiftForm'

function HistoryPage() {
  const { data: mySchedule, isError, isLoading } = useQuery('userHistory', getUserSchedule)
  const scheduleData = mySchedule?.data.scheduleList
  return (
    <S.HistoryContainer>
      <HalfOffShiftForm scheduleData={scheduleData} />
    </S.HistoryContainer>
  )
}

export default HistoryPage
