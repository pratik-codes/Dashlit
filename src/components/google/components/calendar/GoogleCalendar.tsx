import { Empty } from 'antd'
import Svg from 'components/common/Svg'
import Button from 'components/common/button/button'
import { motion } from 'framer-motion'
import { useState } from 'react'
import useMeasure from 'react-use-measure'
import CalendarCad from './CalendarCard'

const GoogleCalendar = ({ calendarEvents, showEmails }: any) => {
  const [showMore, setShowMore] = useState(false)
  const [ref, bounds] = useMeasure()

  // useEffect(() => console.log('rendered', calendarEvents), [calendarEvents])

  return (
    <div
      className={`bg-grey2 rounded-[15px] shadow-xl h-full text-white p-2 min-w-[50]`}
    >
      <motion.div
        className="overflow-hidden min-w-6/12"
        animate={{ height: bounds.height > 0 ? bounds.height : undefined }}
        transition={{ type: 'spring', bounce: 0.4, duration: '0.6' }}
      >
        <div ref={ref}>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center space-x-2 p-1">
              <Svg type="calendar" classNames="w-6 h-6" />
              <span className="text-lg font-bold">Upcoming events</span>
            </div>{' '}
            {calendarEvents?.items?.length > 2 && (
              <Button
                onClick={() => setShowMore(!showMore)}
                type={showMore ? 'secondary' : 'primary'}
                size="medium"
                className="ml-6 m-2 hover:underline"
              >
                <a>{showMore ? 'less' : 'more'}</a>
              </Button>
            )}
          </div>
          <div className="calendar-calendarEvents space-y-2 mt-2">
            {calendarEvents?.items?.length == 0 && (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="mb-2" />
            )}
            {calendarEvents?.items
              ?.slice(0, 2)
              ?.map((event: any, index: number) => (
                <CalendarCad
                  key={event.id}
                  eventData={event}
                  indexNumber={index}
                />
              ))}

            {showMore &&
              calendarEvents?.items
                ?.slice(2, calendarEvents.items.length)
                ?.map((event: any, index: number) => (
                  <CalendarCad
                    key={event.id}
                    eventData={event}
                    indexNumber={index}
                  />
                ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default GoogleCalendar
