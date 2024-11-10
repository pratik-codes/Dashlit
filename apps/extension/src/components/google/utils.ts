import triggerMessage from 'components/common/SnackBar'
import { markUserAsAuthenticated } from '../../firebase/functions/UserDetailsActions'

export const getCalendarEvents = async (token: any) => {
  console.log('fetching calendar events ')
  try {
    const apiUrl = 'https://www.googleapis.com/calendar/v3'
    const calendarId = 'primary' // Replace with the desired calendar ID
    const currentDate = new Date().toISOString() // Get the current date

    fetch(
      `${apiUrl}/calendars/${encodeURIComponent(
        calendarId
      )}/events?timeMin=${currentDate}&maxResults=10&singleEvents=true&orderBy=startTime`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((response) => response.json())
      .then(async (data) => {
        // Process the calendar events data
        localStorage.setItem('calendarEvents', JSON.stringify(data))
      })
      .catch((error) => {
        // Handle error
        console.error('Error retrieving calendar events:', error)
      })
  } catch (error) {
    console.log(error)
  }
}

export const getEmails = async (token: any) => {
  console.log('Fetching emails')

  try {
    const apiUrl = 'https://www.googleapis.com/gmail/v1/users/me/messages'
    const maxResults = 10
    const query = 'in:inbox'

    const response = await fetch(
      `${apiUrl}?maxResults=${maxResults}&q=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (response.ok) {
      const data = await response.json()
      const messages = data.messages

      const emailContentPromises = messages.map(async (message: any) => {
        const emailResponse = await fetch(`${apiUrl}/${message.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (emailResponse.ok) {
          const emailData = await emailResponse.json()
          return emailData
        } else {
          console.error(
            'Error retrieving email content:',
            emailResponse.status,
            emailResponse.statusText
          )
          return null
        }
      })

      const emailContent = await Promise.all(emailContentPromises)
      localStorage.setItem('emailData', JSON.stringify(emailContent))
    } else {
      console.error(
        'Error retrieving emails:',
        response.status,
        response.statusText
      )
    }
  } catch (error) {
    console.error('Error retrieving emails:', error)
  }
}

export const fetchGoogleData = async (isAuthenticated: boolean) => {
  try {
    if (window.location.origin.includes('chrome-extension')) {
      chrome.identity.getAuthToken(
        {
          interactive: true,
          scopes: [
            'https://www.googleapis.com/auth/calendar.readonly',
            'https://www.googleapis.com/auth/gmail.readonly'
          ]
        },
        async (token) => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError)
            return
          }

          await getCalendarEvents(token)
          await getEmails(token)

          if (!isAuthenticated) {
            triggerMessage('Successfully fetched data from Google', 'success')
            await markUserAsAuthenticated()
          }
        }
      )
    }
  } catch (error) {
    console.error('Error retrieving emails:', error)
    return []
  }
}

export function authenticate() {
  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
      return;
    }
    console.log({ token });
    // callback(token);
  });
}
