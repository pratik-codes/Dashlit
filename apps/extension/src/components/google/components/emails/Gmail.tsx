import { Button } from '@/components/ui/button'
import { useState } from 'react'
import useMeasure from 'react-use-measure'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { DialogDescription } from '@radix-ui/react-dialog'
import EmailCard from './EmailCard'
import { InboxIcon } from 'lucide-react'

function AllEmailsModal({
  events,
  showAllEvents,
  closeModal
}: {
  events: any[]
  showAllEvents: boolean
  closeModal: () => void
}) {
  return (
    <Dialog open={showAllEvents} onOpenChange={closeModal}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>All Emails</DialogTitle>
          <DialogDescription>{events.length} emails</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {events.map((item, index) => (
            <EmailCard key={index} email={item} />
          ))}
        </div>
        <div className="flex justify-end mt-8">
          <Button disabled={true} className="font-bold">
            Add new google account (coming soon)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const Gmail = ({ emails }: any) => {
  const [showAllEmails, setShowAllEmails] = useState(false)
  const [ref, bounds] = useMeasure()
  const maxEvents = 2
  const extraCount = emails.length - maxEvents
  console.log({ emails })

  console.log(
    emails[0]?.payload?.headers.filter(
      (header: any) => header.name === 'Received'
    )[0]?.value
  )

  return (
    <div className="bg-white dark:bg-black rounded-common min-w-[40] shadow-xl h-full p-4">
      <div className="overflow-hidden min-w-6/12">
        <div ref={ref}>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center space-x-2 p-1 border-b border-gray-300 w-full">
              <InboxIcon size={24} className="text-blue-700" />
              <span className="text-lg font-bold">All Inboxes</span>
            </div>
          </div>
          <div className="email-list space-y-2">
            {emails?.length === 0 && (
              <div className="w-full text-xs font-bold text-gray-500 mr-10">
                No more emails
              </div>
            )}
            {emails?.length > 0 &&
              emails
                ?.slice(0, 2)
                .map((email: any) => <EmailCard email={email} />)}
            <div
              onClick={() => setShowAllEmails(!showAllEmails)}
              className="hover:bg-gray-200 rounded-xl cursor-pointer p-2"
            >
              <p className="text-xs font-bold text-neutral-800">
                +{extraCount} emails more...{extraCount > 1 && ''}
              </p>
            </div>
            {showAllEmails && (
              <AllEmailsModal
                closeModal={() => setShowAllEmails(!showAllEmails)}
                events={emails}
                showAllEvents={showAllEmails}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gmail
