import { Tooltip } from 'antd'
import Svg from 'components/common/Svg'

const CalendarCad = ({ eventData, indexNumber }: any) => {
  //check if from and to date is same
  //if same then show only one date
  //else show both dates
  const sameDate =
    new Date(eventData.start.dateTime).getDate() ==
    new Date(eventData.end.dateTime).getDate()

  function appendURLOptions(url: string) {
    const index = url.indexOf('calendar')
    if (index !== -1) {
      const modifiedURL =
        url.slice(0, index + 8) + '/u/0/r' + url.slice(index + 8)
      return modifiedURL
    }
    return url
  }

  // check if there is only 5 mins left in the event or not
  const eventTime = new Date(eventData.start.dateTime).getTime()
  const currentTime = new Date().getTime()
  const timeLeft = eventTime - currentTime
  const timeLeftInMins = Math.floor(timeLeft / 60000)
  const is5MinsLeft = timeLeftInMins <= 5
  const is15MinsLeft = timeLeftInMins <= 15
  // console.log({ indexNumber, timeLeft, eventTime, currentTime, timeLeftInMins })

  const backgroundColor = is5MinsLeft
    ? 'bg-red-card'
    : is15MinsLeft
    ? 'bg-orange-card'
    : 'bg-grey1'
  const fontColor =
    backgroundColor == 'bg-grey1'
      ? 'text-white'
      : backgroundColor === 'bg-red-card'
      ? 'text-darkred'
      : 'text-darkorange'

  // console.log({ timeLeftInMins })

  return (
    <Tooltip
      title={
        timeLeftInMins < 0
          ? 'Event is going on...'
          : is5MinsLeft
          ? '5 mins remaining to the event'
          : is15MinsLeft
          ? '15 mins remaining to the event'
          : null
      }
    >
      <div className={`${backgroundColor} ${fontColor} rounded-[8px] p-1`}>
        <div className="flex justify-between items-center">
          <div className="flex-col justify-between items-center space-x-1 my-auto">
            <div className="flex space-x-2">
              <div className="my-auto">
                <Svg
                  type="calendar-event"
                  classNames={`w-8 h-8 p-1 border border-${fontColor} border-grey2 rounded-md ml-1`}
                />
              </div>

              <div className="text-md font-bold ">
                <Tooltip title={eventData?.summary}>
                  {eventData?.summary?.length > 25
                    ? eventData?.summary?.substring(0, 25) + '...'
                    : eventData?.summary
                    ? eventData?.summary
                    : 'No Title'}
                </Tooltip>
                {!sameDate ? (
                  <div className="text-md font-medium px-1">
                    <span className="font-bold">
                      {new Date(eventData.start.dateTime).toLocaleDateString(
                        'en-US',
                        {
                          hour: 'numeric',
                          minute: 'numeric'
                        }
                      )}
                    </span>
                    <span className="mx-1 font-bold">-</span>
                    <span className="font-bold">
                      {new Date(eventData.end.dateTime).toLocaleDateString(
                        'en-US',
                        {
                          hour: 'numeric',
                          minute: 'numeric'
                        }
                      )}
                    </span>
                  </div>
                ) : (
                  <div className="text-md font-medium pb-1">
                    {/* // show just the from to time */}
                    <span className="font-bold">
                      {new Date(eventData.start.dateTime).toLocaleDateString(
                        'en-US',
                        {
                          hour: 'numeric',
                          minute: 'numeric'
                        }
                      )}
                      <span> - </span>
                      {new Date(eventData.end.dateTime).toLocaleTimeString(
                        'en-US',
                        {
                          hour: 'numeric',
                          minute: 'numeric'
                        }
                      )}
                    </span>
                  </div>
                )}{' '}
              </div>
            </div>
          </div>
          <div
            className={`flex justify-between items-center ml-8`}
            onClick={() =>
              window.open(appendURLOptions(eventData.htmlLink), '_blank')
            }
          >
            <Svg
              type="expand"
              classNames={`${fontColor} w-10 h-10 mr-1 p-2 hover:bg-grey2 rounded-lg cursor-pointer font-bold`}
            />
          </div>
        </div>
      </div>
    </Tooltip>
  )
}

export default CalendarCad
