import { Tooltip } from 'antd'
import Svg from 'components/common/Svg'

const EmailCard = ({ email }: any) => {
  const emailFrom = email.payload.headers.find(
    (header: any) => header.name == 'From'
  )
  const emailFromName = emailFrom?.value.split('<')[0]
  const emailSubject = email.payload.headers.find(
    (header: any) => header.name == 'Subject'
  )
  const snippet = email.snippet

  return (
    <div className={`bg-grey1 rounded-[12px] p-1`}>
      <div className="flex justify-between items-center">
        <div className="flex-col justify-between items-center space-x-1 my-auto">
          <div className="flex space-x-2">
            <div className="my-auto border border-grey2 rounded-[12px] p-1">
              <Svg
                type="email"
                classNames={`w-10 h-10 p-2 border border-grey2 rounded-[12px]`}
              />
            </div>
            <div>
              <div className="text-md font-bold">{emailFromName}</div>
              <div className="text-sm font-bold">
                <Tooltip title={emailSubject.value}>
                  {emailSubject.value.length > 30
                    ? emailSubject.value.substring(0, 30) + '...'
                    : emailSubject.value}
                </Tooltip>
              </div>
              <div className="text-xs">
                <Tooltip title={snippet}>
                  {snippet.length > 30
                    ? snippet.substring(0, 30) + '...'
                    : snippet}
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        {/* <div
             className={`flex justify-between items-center ml-8`}
             onClick={() =>
               window.open(appendURLOptions(eventData.htmlLink), '_blank')
             }
           >
             <Svg
               type="expand"
               classNames={`${fontColor} w-10 h-10 mr-1 p-2 hover:bg-grey2 rounded-lg cursor-pointer font-bold`}
             />
           </div> */}
      </div>
    </div>
  )
}

export default EmailCard
