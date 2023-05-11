export interface ScheduleStatus {
  status: 'FIRST' | 'REJECTED' | 'APPROVED' | 'LAST'
}

export interface ButtonStatusProps {
  isStatus: 'FIRST' | 'REJECTED' | 'APPROVED' | 'LAST'
}

export interface HistoryButtonProps {
  isButtonStatus: boolean
}

export interface MyScheduleData {
  scheduleId: number
  startDate: String
  endDate: String
  type: string
  status: string
  reason: string
  user: User
}

export interface User {
  userId: number
  name: string
  email: string
  phoneNumber: string
  startWork: String
  role: string
  teamName: string
  profileImage: string
}
