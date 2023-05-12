import ToastUIReactCalendar from '@toast-ui/react-calendar/*'
import styled from 'styled-components'
import type { Options } from '@toast-ui/calendar'

import '@toast-ui/calendar/toastui-calendar.css'
import 'tui-date-picker/dist/tui-date-picker.min.css'
import 'tui-time-picker/dist/tui-time-picker.min.css'

export const HomeWrapper = styled.div`
  width: 1137px;
  margin-left: 3px;
  display: flex;
  flex-direction: column;
`

export const TopBar = styled.div`
  width: 1137px;
  height: 40px;
  z-index: 9;
  position: absolute;
  display: flex;
  align-items: center;
  h2 {
    font-weight: 700;
    font-size: 28px;
    margin: 14px 0 0 14px;
  }
  .info {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    transform: translateY(9px);
  }
`

export const ContorlBar = styled.div`
  width: 1127px;
  margin-top: 40px;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-left: 14px;

  span {
    position: absolute;
    right: 5px;
  }

  .btn {
    border-radius: 25px;
  }

  .btn:hover {
    border: solid 2px #bbb;
  }

  .btn:active {
    border: solid 2px #bbb;
    outline: none;
  }

  .btn:disabled {
    border: solid 2px #ddd;
    color: #bbb;
  }

  .render-range {
    padding-left: 12px;
    font-size: 19px;
    vertical-align: middle;
  }

  /* 오늘로 이동하는 btn */
  .move-today {
    background-color: #e15e5e;
    border-radius: 8px;
    border: none;
    width: 70px;
    height: 30px;
    color: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
  }

  /* 다음달, 이전달로 이동하는 btn */
  .move-day {
    margin-top: 10px;
    background: #aa2727;
    font-weight: 600;
    font-size: 13px;
    width: 30px;
    height: 30px;
    border-radius: 0%;
    color: #fff;
  }

  .move-day-prev {
    margin-left: 9px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  .move-day-next {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    margin-right: -5px;
    margin-right: 15px;
  }

  .dropdown {
    margin-right: 10px;
  }
`
export const Info = styled.div`
  position: relative;
  top: 60px;
  left: -18px;
  z-index: 9;
  background-color: #fff;
  width: 100px;
  height: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  div {
    font-size: 10px;
    font-weight: 700;
    margin: 6px 3px;
    display: flex;
    width: 90px;
    height: 20px;
    align-items: center;
    img {
      transform: translateY(-0.4px);
    }
  }

  .info-dayoff {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.red};
    color: #fff;
    img {
      margin: 0 3px 0 4px;
    }
  }
  .info-halfoff {
    border: 1.5px solid ${({ theme }) => theme.colors.red};
    border-radius: 4px;
    img {
      margin: 0 3px;
    }
  }
  .info-shift {
    margin-right: 1px;
    img {
      margin: 0 3px 0 4px;
    }
  }
`
export const theme: Options['theme'] = {
  common: {
    border: '1px solid #ddd',
    backgroundColor: 'white',
    holiday: { color: '#f54f3d' },
    saturday: { color: '#135de6' },
    dayName: { color: '#333' },
    today: { color: '#fff' },
    gridSelection: {
      backgroundColor: 'rgba(19, 93, 230, 0.1)',
      border: '1px solid #135de6',
    },
  },
  month: {
    dayName: {
      borderLeft: 'none',
      backgroundColor: 'inherit',
    },
    holidayExceptThisMonth: { color: '#f3acac' },
    dayExceptThisMonth: { color: '#bbb' },
    weekend: { backgroundColor: '#fafafa' },
    moreView: { boxShadow: 'none' },
    moreViewTitle: { backgroundColor: '#f4f4f4' },
  },
}
export const calendarWrapper = styled.div`
  margin-top: 20px;
  margin-left: 10px;
`
