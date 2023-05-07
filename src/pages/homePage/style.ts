import ToastUIReactCalendar from '@toast-ui/react-calendar/*'
import styled from 'styled-components'
import Calendar from '@toast-ui/react-calendar'

import '@toast-ui/calendar/toastui-calendar.css'
import 'tui-date-picker/dist/tui-date-picker.min.css'
import 'tui-time-picker/dist/tui-time-picker.min.css'

export const HomeWrapper = styled.div`
  width: 1137px;
  margin-left: 3px;
`

export const TopBar = styled.div`
  width: 1137px;
  height: 30px;
  position: relative;
  margin-top: 10px;
  span {
    position: absolute;
    right: 5px;
  }
  h2 {
    font-weight: 700;
    font-size: 20px;
  }
  .btn {
    border-radius: 25px;
    border-color: #ddd;
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
    border-radius: 2px;
    border: none;
    width: 50px;
    height: 25px;
    color: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
  }

  /* 다음달, 이전달로 이동하는 btn */
  .move-day {
    background: #aa2727;
    font-weight: 600;
    font-size: 10px;
    width: 30px;
    height: 25px;
    border-radius: 0%;
    color: #fff;
  }

  .move-day-prev {
    margin-left: 9px;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
  }

  .move-day-next {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    margin-right: -5px;
  }
`
