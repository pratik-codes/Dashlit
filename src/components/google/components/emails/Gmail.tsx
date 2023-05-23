import { Empty } from 'antd'
import Button from 'components/common/button/button'
import Svg from 'components/common/Svg'
import { motion } from 'framer-motion'
import { useState } from 'react'
import useMeasure from 'react-use-measure'
import EmailCard from './EmailCard'

const Gmail = ({ emails }: any) => {
  const [showMore, setShowMore] = useState(false)
  const [ref, bounds] = useMeasure()

  return (
    <div className="bg-grey2 rounded-[15px] shadow-xl absolute top-0 right-0 top-0 text-white p-2 w-2/12 m-4">
      <motion.div
        className="overflow-hidden min-w-6/12"
        animate={{ height: bounds.height > 0 ? bounds.height : undefined }}
        transition={{ type: 'spring', bounce: 0.4, duration: '0.6' }}
      >
        <div ref={ref}>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center space-x-2 p-1">
              <Svg type="inbox" classNames="w-6 h-6" />
              <span className="text-lg font-bold">Recent emails</span>
            </div>{' '}
            {emails?.length > 2 && (
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
            {emails?.length == 0 && (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="mb-2" />
            )}
            {emails?.slice(0, 2)?.map((email: any) => (
              <EmailCard key={email.snippet} email={email} />
            ))}
            {showMore &&
              emails
                ?.slice(2, emails.length)
                ?.map((email: any) => (
                  <EmailCard key={email.snippet} email={email} />
                ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Gmail
