// function that runs the clock
export function startTime(setClockTimer: any, setDate: any) {
  const today = new Date()
  let hr = today.getHours()
  let min = today.getMinutes()
  let sec = today.getSeconds()
  hr = hr === 0 ? 12 : hr
  hr = hr > 12 ? hr - 12 : hr
  //Add a zero in front of numbers<10
  hr = checkTime(hr)
  min = checkTime(min)
  sec = checkTime(sec)
  setClockTimer(hr + ':' + min + ':' + sec + ' ')

  const months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
  ]
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const curWeekDay = days[today.getDay()]
  const curDay = today.getDate()
  const curMonth = months[today.getMonth()]
  const curYear = today.getFullYear()
  const date = curWeekDay + ', ' + curDay + ' ' + curMonth + ' ' + curYear
  setDate(date)

  setTimeout(function () {
    startTime(setClockTimer, setDate)
  }, 500)
}

function checkTime(i: any) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

export const handleKeyBindings = (
  keys: string[],
  KeyboardEvent: any,
  callbackFunction: any
) => {
  if (
    keys.includes(KeyboardEvent.key.toLowerCase()) &&
    (KeyboardEvent.metaKey || KeyboardEvent.ctrlKey || KeyboardEvent.shiftKey)
  ) {
    callbackFunction()
  }
}
