import type { Options } from '@toast-ui/calendar'

export const theme: Options['theme'] = {
  common: {
    border: '1px solid #ddd',
    backgroundColor: 'white',
    holiday: { color: '#f54f3d' },
    saturday: { color: '#135de6' },
    dayName: { color: '#333' },
    today: { color: '#FFFFFF' },
    gridSelection: {
      // backgroundColor: '#F7CCCC',
      backgroundColor: 'rgba(247	,204	,204, 0.3)',
      border: '1px solid #AA2727',
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
  week: {
    dayName: {
      borderTop: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
      borderLeft: '1px solid #ddd',
      backgroundColor: 'inherit',
    },
    today: {
      color: '#FFFFFF',
      backgroundColor: 'inherit',
    },
    pastDay: { color: '#999' },
    panelResizer: { border: '1px solid #ddd' },
    dayGrid: { borderRight: '1px solid #ddd' },
    dayGridLeft: {
      width: '100px',
      backgroundColor: '',
      borderRight: '1px solid #ddd',
    },
    weekend: { backgroundColor: 'inherit' },
    timeGridLeft: {
      width: '100px',
      backgroundColor: '#fafafa',
      borderRight: '1px solid #ddd',
    },
    timeGridLeftAdditionalTimezone: { backgroundColor: '#fdfdfd' },
    timeGridHourLine: { borderBottom: '1px solid #eee' },
    timeGridHalfHourLine: { borderBottom: '1px dotted #f9f9f9' },
    timeGrid: { borderRight: '1px solid #ddd' },
    nowIndicatorLabel: { color: '#AA2727' },
    nowIndicatorPast: { border: '1px solid #AA2727' },
    nowIndicatorBullet: { backgroundColor: '#AA2727' },
    nowIndicatorToday: { border: '1px solid #AA2727' },
    nowIndicatorFuture: { border: '1px solid #AA2727' },
    pastTime: { color: '#999' },
    futureTime: { color: '#333' },
    gridSelection: { color: '#AA2727' },
  },
}
