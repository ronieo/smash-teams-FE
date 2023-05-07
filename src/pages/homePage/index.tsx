// 전체 / 팀 / 개인 필터링 기능
// 당직 / 연차 / 반차 -> 정보 보여주기

/* eslint-disable no-console */
import './styles.scss'
import * as S from './style'
import data from './data'

import type { EventObject, ExternalEventTypes, Options } from '@toast-ui/calendar'
import type { ChangeEvent, MouseEvent } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import Calendar from '@toast-ui/react-calendar'

import { theme } from './theme'

export default function HomePage() {
  const calendarRef = useRef<typeof Calendar>(null)
  const [selectedDateRangeText, setSelectedDateRangeText] = useState('')
  const initialCalendars: Options['calendars'] = [
    {
      id: '0',
      name: '디자인팀',
      backgroundColor: '#664f88',
      borderColor: '#664f88',
      dragBackgroundColor: '#664f88',
      color: '#fff',
    },
    {
      id: '1',
      name: '개발팀',
      backgroundColor: '#3b7794',
      borderColor: '#3b7794',
      dragBackgroundColor: '#3b7794',
      color: '#fff',
    },
    {
      id: '2',
      name: '디자인팀',
      backgroundColor: '#abca45',
      borderColor: '#abca45',
      dragBackgroundColor: '#abca45',
      color: '#000',
    },
  ]

  const initialEvents: Partial<EventObject>[] = data

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // 년월
  const getCalInstance = useCallback(() => calendarRef.current?.getInstance?.(), [])

  const updateRenderRangeText = useCallback(() => {
    const calInstance = getCalInstance()
    if (!calInstance) {
      setSelectedDateRangeText('')
    }

    const viewName = calInstance.getViewName()
    const calDate = calInstance.getDate()
    const rangeStart = calInstance.getDateRangeStart()
    const rangeEnd = calInstance.getDateRangeEnd()

    let year = calDate.getFullYear()
    let month = calDate.getMonth() + 1
    let date = calDate.getDate()
    let dateRangeText: string

    switch (viewName) {
      case 'month': {
        dateRangeText = `${year}년 ${month}월`
        break
      }
      default:
        dateRangeText = `${year}-${month}-${date}`
    }

    setSelectedDateRangeText(dateRangeText)
  }, [getCalInstance])

  useEffect(() => {
    updateRenderRangeText()
  }, [updateRenderRangeText])

  // const onAfterRenderEvent: ExternalEventTypes['afterRenderEvent'] = (res) => {
  //   console.group('onAfterRenderEvent')
  //   console.log('Event Info : ', res.title)
  //   console.groupEnd()
  // }

  // const onBeforeDeleteEvent: ExternalEventTypes['beforeDeleteEvent'] = (res) => {
  //   console.group('onBeforeDeleteEvent')
  //   console.log('Event Info : ', res.title)
  //   console.groupEnd()

  //   const { id, calendarId } = res

  //   getCalInstance().deleteEvent(id, calendarId)
  // }
  const onClickNavi = (ev: MouseEvent<HTMLButtonElement>) => {
    if ((ev.target as HTMLButtonElement).tagName === 'BUTTON') {
      const button = ev.target as HTMLButtonElement
      const actionName = (button.getAttribute('data-action') ?? 'month').replace('move-', '')
      getCalInstance()[actionName]()
      updateRenderRangeText()
    }
  }

  // const onChangeSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedView(ev.target.value as ViewType)
  // }

  // const onClickDayName: ExternalEventTypes['clickDayName'] = (res) => {
  //   console.group('onClickDayName')
  //   console.log('Date : ', res.date)
  //   console.groupEnd()
  // }

  // const onClickEvent: ExternalEventTypes['clickEvent'] = (res) => {
  //   console.group('onClickEvent')
  //   console.log('MouseEvent : ', res.nativeEvent)
  //   console.log('Event Info : ', res.event)
  //   console.groupEnd()
  // }

  // const onClickTimezonesCollapseBtn: ExternalEventTypes['clickTimezonesCollapseBtn'] = (timezoneCollapsed) => {
  //   console.group('onClickTimezonesCollapseBtn')
  //   console.log('Is Timezone Collapsed?: ', timezoneCollapsed)
  //   console.groupEnd()

  //   const newTheme = {
  //     'week.daygridLeft.width': '100px',
  //     'week.timegridLeft.width': '100px',
  //   }

  //   getCalInstance().setTheme(newTheme)
  // }

  // const onBeforeUpdateEvent: ExternalEventTypes['beforeUpdateEvent'] = (updateData) => {
  //   console.group('onBeforeUpdateEvent')
  //   console.log(updateData)
  //   console.groupEnd()

  //   const targetEvent = updateData.event
  //   const changes = { ...updateData.changes }

  //   getCalInstance().updateEvent(targetEvent.id, targetEvent.calendarId, changes)
  // }

  // const onBeforeCreateEvent: ExternalEventTypes['beforeCreateEvent'] = (eventData) => {
  //   const event = {
  //     calendarId: eventData.calendarId || '',
  //     id: String(Math.random()),
  //     title: eventData.title,
  //     isAllday: eventData.isAllday,
  //     start: eventData.start,
  //     end: eventData.end,
  //     category: eventData.isAllday ? 'allday' : 'time',
  //     dueDateClass: '',
  //     location: eventData.location,
  //     state: eventData.state,
  //     isPrivate: eventData.isPrivate,
  //   }

  //   getCalInstance().createEvents([event])
  // }

  return (
    <S.HomeWrapper>
      <S.TopBar>
        <span>
          <button
            type="button"
            className="btn btn-default btn-sm move-today"
            data-action="move-today"
            onClick={onClickNavi}
          >
            Today
          </button>
          <button
            type="button"
            className="btn btn-default btn-sm move-day move-day-prev"
            data-action="move-prev"
            onClick={onClickNavi}
          >
            &lt;
          </button>
          <button
            type="button"
            className="btn btn-default btn-sm move-day move-day-next"
            data-action="move-next"
            onClick={onClickNavi}
          >
            &#62;
          </button>
        </span>
        <h2 className="render-range">{selectedDateRangeText}</h2>
      </S.TopBar>
      <Calendar
        height="750px"
        calendars={initialCalendars}
        month={{
          // startDayOfWeek: 1,
          dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
          // narrowWeekend: true,
          // visibleWeeksCount: 5,
          visibleEventCount: 5,
        }}
        events={initialEvents}
        template={{
          // 반차
          time(event) {
            const { start, end, title, state } = event
            return `<span style="color: black;"><img src=${state} width="13px"/> ${title}</span>`
          },
          // 연차
          allday(event) {
            const { start, end, title, state } = event
            return `<span style="color: white;"><img src=${state} width="13px"/> ${title}</span>`
          },
          // 당직
          milestone(event) {
            const { start, end, title, state } = event
            return `<div style="color: black;"><img src=${state} width="13px"/> ${title}</div>`
          },
          // 상세 팝업
          popupDetailTitle(event) {
            const { start, end, title, state } = event
            return `<img src=${state} width="13px"/> ${title}`
          },
        }}
        theme={theme}
        timezone={{
          zones: [
            {
              timezoneName: 'Asia/Seoul',
              displayLabel: 'Seoul',
              tooltip: 'UTC+09:00',
            },
          ],
        }}
        useDetailPopup={true}
        // useFormPopup={true}
        view={'month'}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={calendarRef}
        // onAfterRenderEvent={onAfterRenderEvent}
        // onBeforeDeleteEvent={onBeforeDeleteEvent}
        // onClickDayname={onClickDayName}
        // onClickEvent={onClickEvent}
        // onClickTimezonesCollapseBtn={onClickTimezonesCollapseBtn}
        // onBeforeUpdateEvent={onBeforeUpdateEvent}
        // onBeforeCreateEvent={onBeforeCreateEvent}
      />
    </S.HomeWrapper>
  )
}
