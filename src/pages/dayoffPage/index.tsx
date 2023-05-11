import { useLocation } from 'react-router-dom'
import MiniCalendar from '../../components/miniCalendar'
import ShiftFormContainer from '../../components/shiftFormContainer'
import { DayOffWrapper } from './style'

// 연차/반차 신청 페이지
function DayOffPage() {
  const location = useLocation()
  console.log('location 출력', location.pathname)
  return (
    <DayOffWrapper>
      <MiniCalendar view={'month'} />
      <ShiftFormContainer type={'dayOff'} location={location.pathname} children={undefined} />
    </DayOffWrapper>
  )
}

export default DayOffPage
