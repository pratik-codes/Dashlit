import { useEffect, useState } from 'react'
import Button from '../common/button/button'
import GoogleCalendar from './components/calendar/GoogleCalendar'
import Gmail from './components/emails/Gmail'
import { mockGoogleData } from './mock'
import { fetchGoogleData } from './utils'

const Google = ({ settingsData, show }: any) => {
  const [googleCalendarSettings, SetGoogleCalendarSettings] = useState<any>()
  const [googleData, setGoogleData] = useState<{ events: any; emails: any }>({
    emails: [],
    events: []
  })

  const user_settings: any = JSON.parse(
    localStorage.getItem('user-settings') || '{}'
  )

  const getData = async (bypassAuth = false) => {
    if (googleCalendarSettings?.isAuthenticated || bypassAuth) {
      await fetchGoogleData(googleCalendarSettings?.isAuthenticated)
    }
  }

  useEffect(() => {
    getData()
    // console.log({ googleCalendarSettings, user_settings })
  }, [googleCalendarSettings])

  useEffect(() => {
    setGoogleData(
      window.location.origin.includes('chrome-extension')
        ? {
            emails: JSON.parse(localStorage.getItem('emailData') || '{}'),
            events: JSON.parse(localStorage.getItem('calendarEvents') || '{}')
          }
        : mockGoogleData
    )
  }, [
    localStorage.getItem('emailData'),
    localStorage.getItem('calendarEvents')
  ])

  useEffect(() => {
    SetGoogleCalendarSettings(
      JSON.parse(user_settings?.settings || '[]')?.find(
        (setting: any) => setting.type == 'calendar-settings'
      )
    )
  }, [])

  // useEffect(() => console.log(googleData), [googleData])

  if (!googleCalendarSettings?.isAuthenticated) {
    return (
      <div className="my-4 absolute right-0 top-0 m-4">
        <Button
          onClick={async () => await getData(false)}
          type="secondary"
          className="flex items-center space-x-2"
        >
          <img
            src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
            className="w-5"
            alt="google logo"
          />
          <span>Authenticate for Google Data</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="absolute top-0 right-0 display flex gap-2 m-4">
      {show?.calendar && (
        <GoogleCalendar
          calendarEvents={googleData?.events}
          showEmails={show?.emails}
        />
      )}
      {show?.emails && <Gmail emails={googleData?.emails} />}
    </div>
  )
}

export default Google
