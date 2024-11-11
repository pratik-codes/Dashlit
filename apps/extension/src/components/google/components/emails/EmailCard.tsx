import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip' // Importing Tooltip from shadcn

const EmailCard = ({ email }: any) => {
  const emailFrom = email.payload.headers.find(
    (header: any) => header.name == 'From'
  )
  const emailFromName = emailFrom?.value.split('<')[0]
  const emailSubject = email.payload.headers.find(
    (header: any) => header.name == 'Subject'
  )
  const time = extractAndFormatTime(
    email?.payload?.headers.filter(
      (header: any) => header.name === 'Received'
    )[0]?.value
  )
  const content = email?.snippet

  function extractAndFormatTime(text: string): string {
    if (!text) return ''

    const timePattern = /\w{3}, \d{2} \w{3} \d{4} (\d{2}:\d{2}:\d{2}) [-+]\d{4}/
    const match = text.match(timePattern)

    if (match) {
      const timeStr = match[1]
      const [hours, minutes] = timeStr.split(':').map(Number)
      const period = hours >= 12 ? 'PM' : 'AM'
      const formattedHour = hours % 12 || 12

      return `${formattedHour}:${minutes.toString().padStart(2, '0')} ${period}`
    }

    return ''
  }

  // Tooltip content with email details
  const tooltipContent = (
    <div className='text-lg max-w-[400px] word-break'>
      <div>
        <strong>From:</strong> {emailFromName}
      </div>
      <div className='word-break'>
        <strong>Subject:</strong> {emailSubject?.value}
      </div>
      <div className='word-break'>
        <strong>Content:</strong> {content}
      </div>
      <div>
        <strong>Time:</strong> {time}
      </div>
    </div>
  )

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="rounded-xl hover:bg-gray-200 p-1 flex justify-between items-center cursor-pointer w-full">
            <div className="flex-col justify-between items-center space-x-1 my-auto border-b border-gray-200 w-full">
              <div className="flex space-x-2">
                <div>
                  <div className="text-md font-bold">{emailFromName}</div>
                  <div className="text-sm font-normal mb-1">
                    {emailSubject.value.length > 32
                      ? emailSubject.value.substring(0, 32) + '...'
                      : emailSubject.value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default EmailCard
