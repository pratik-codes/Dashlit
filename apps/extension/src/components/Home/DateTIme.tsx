import { useEffect, useState } from 'react'
import { startTime } from 'utils/home.utils'

const DateTime = ({
  getPreferenceValue,
  isMinimalHome
}: {
  getPreferenceValue: (preferenceType: string) => Boolean
  isMinimalHome: Boolean
}) => {
  const [clockTimer, setClockTimer] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    startTime(setClockTimer, setDate)
  }, [])

  if (isMinimalHome)
    return (
      <div className="mx-14 mt-10 space-y-2">
        <div className="text-white font-bold text-8xl">{clockTimer}</div>
        <div className="text-white font-bold text-2xl ml-2">{date}</div>
      </div>
    )

  return (
    <div className="clockdate-wrapper">
      {getPreferenceValue('clock-settings') === true && (
        <div id="clock">{clockTimer}</div>
      )}
      {getPreferenceValue('date-settings') === true && (
        <div id="date">{date}</div>
      )}
    </div>
  )
}

export default DateTime
