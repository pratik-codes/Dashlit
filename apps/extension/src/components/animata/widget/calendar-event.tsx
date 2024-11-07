import { cn } from '@/lib/utils'
import { Key, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { DialogDescription } from '@radix-ui/react-dialog'

interface CalendarEvent {
  title: string
  time: string
  color: string
  bgcolor: string
  barColor: string
  dateColor: string
}

interface CalendarEventProps {
  events: any
}

const colors = [
  {
    color: 'text-blue-900',
    bgcolor: 'bg-blue-200',
    barColor: 'bg-blue-700',
    dateColor: 'text-blue-600'
  },
  {
    color: 'text-orange-900',
    bgcolor: 'bg-orange-200',
    barColor: 'bg-orange-700',
    dateColor: 'text-orange-600'
  },
  {
    color: 'text-pink-900',
    bgcolor: 'bg-pink-200',
    barColor: 'bg-pink-700',
    dateColor: 'text-pink-600'
  },
  {
    color: 'text-teal-900',
    bgcolor: 'bg-teal-200',
    barColor: 'bg-teal-700',
    dateColor: 'text-teal-600'
  },
  {
    color: 'text-indigo-900',
    bgcolor: 'bg-indigo-200',
    barColor: 'bg-indigo-700',
    dateColor: 'text-indigo-600'
  },
  {
    color: 'text-yellow-900',
    bgcolor: 'bg-yellow-200',
    barColor: 'bg-yellow-700',
    dateColor: 'text-yellow-600'
  },
  {
    color: 'text-gray-900',
    bgcolor: 'bg-gray-200',
    barColor: 'bg-gray-700',
    dateColor: 'text-gray-600'
  },
  {
    color: 'text-lime-900',
    bgcolor: 'bg-lime-200',
    barColor: 'bg-lime-700',
    dateColor: 'text-lime-600'
  },
  // Added new color combinations below
  {
    color: 'text-fuchsia-900',
    bgcolor: 'bg-fuchsia-200',
    barColor: 'bg-fuchsia-700',
    dateColor: 'text-fuchsia-600'
  },
  {
    color: 'text-amber-900',
    bgcolor: 'bg-amber-200',
    barColor: 'bg-amber-700',
    dateColor: 'text-amber-600'
  },
  {
    color: 'text-cyan-900',
    bgcolor: 'bg-cyan-200',
    barColor: 'bg-cyan-700',
    dateColor: 'text-cyan-600'
  },
  {
    color: 'text-emerald-900',
    bgcolor: 'bg-emerald-200',
    barColor: 'bg-emerald-700',
    dateColor: 'text-emerald-600'
  },
  {
    color: 'text-rose-900',
    bgcolor: 'bg-rose-200',
    barColor: 'bg-rose-700',
    dateColor: 'text-rose-600'
  },
  {
    color: 'text-violet-900',
    bgcolor: 'bg-violet-200',
    barColor: 'bg-violet-700',
    dateColor: 'text-violet-600'
  },
  {
    color: 'text-sky-900',
    bgcolor: 'bg-sky-200',
    barColor: 'bg-sky-700',
    dateColor: 'text-sky-600'
  },
  {
    color: 'text-zinc-900',
    bgcolor: 'bg-zinc-200',
    barColor: 'bg-zinc-700',
    dateColor: 'text-zinc-600'
  }
]

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

const maxEvents = 2

function appendURLOptions(url: string) {
  const index = url.indexOf('calendar')
  if (index !== -1) {
    const modifiedURL =
      url?.slice(0, index + 8) + '/u/0/r' + url?.slice(index + 8)
    return modifiedURL
  }
  return url
}

function formatTimeRange(startDateTime: any, endDateTime: any) {
  const start = new Date(startDateTime)
  const end = new Date(endDateTime)

  const formatTime = (date: any) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const sameDate = start.getDate() === end.getDate()

  if (sameDate) {
    return `${formatTime(start)} - ${formatTime(end)}`
  } else {
    return `Different dates: ${formatTime(start)} - ${formatTime(end)}`
  }
}

function EventCard({ item }: any) {
  const [color] = useState<any>(getRandomColor())
  console.log({ item })
  const sameDate =
    new Date(item.start.dateTime).getDate() ==
    new Date(item.end.dateTime).getDate()

  return (
    <div
      onClick={() => window.open(appendURLOptions(item.htmlLink), '_blank')}
      className={cn(
        'relative cursor-pointer flex w-full mr-20 items-center gap-2 overflow-hidden rounded-sm pl-1 transition-all hover:bg-gray-200 py-1',
        color?.bgcolor
      )}
    >
      <div className={cn('h-8 w-1 rounded-sm ml-1', color.barColor)}></div>
      <div className="flex-col items-center justify-center">
        <h4 className={cn('text-sm font-bold', item.color)}>{item.summary}</h4>
        <div className="">
          <div className={cn('whitespace-pre text-xs', item.dateColor)}>
            {item.time}
          </div>
          <div className="">
            {formatTimeRange(item.start.dateTime, item.end.dateTime)}
          </div>
        </div>
      </div>
    </div>
  )
}

function AllEventsModal({
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
          <DialogTitle>All Events</DialogTitle>
          <DialogDescription>{events.length} events</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {events.map((item, index) => (
            <EventCard key={index} item={item} />
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

export default function calendarevent({ events }: CalendarEventProps) {
  const [showAllEvents, setShowAllEvents] = useState(false)
  const extraCount = events?.items?.length - maxEvents
  console.log('event item', extraCount, events?.items)

  return (
    <div
      className={cn(
        'group relative flex size-52 flex-col overflow-hidden rounded-common bg-white p-4'
      )}
    >
      <div className="flex gap-1">
        <p className="text-xl font-bold text-red">
          {new Date().toLocaleString('default', { weekday: 'short' })}
        </p>
        <p className="text-xl font-bold text-black">{new Date().getDate()}</p>
      </div>
      <div className="my-2 flex flex-1 flex-col gap-2">
        {events?.items
          ?.slice(0, maxEvents)
          .map((item: any, index: Key | null | undefined) => (
            <EventCard hides key={index} item={item} />
          ))}
      </div>
      {extraCount > 0 ? (
        <>
          <div
            onClick={() => setShowAllEvents(!showAllEvents)}
            className="flex cursor-pointer hover:bg-gray-200 dark:hover-bg-gray-800 h-8 w-full items-center justify-between rounded-sm border-2 border-slate-200 bg-slate-50 p-1"
          >
            <p className="text-xs font-bold text-neutral-800">
              +{extraCount} event{extraCount > 1 && 's'}
            </p>
            {/* <p className="text-[10px] text-gray-500">16:15 - 20:00</p> */}
          </div>
          {showAllEvents && (
            <AllEventsModal
              closeModal={() => setShowAllEvents(!showAllEvents)}
              events={events?.items}
              showAllEvents={showAllEvents}
            />
          )}
          {events?.items
            ?.slice(maxEvents, maxEvents + 3)
            .map((item: any, index: any) => (
              <div
                key={index}
                style={{
                  paddingInline: `${(index + 2) * 6}px`
                }}
              >
                <div className="mt-[1px] h-[2px] w-full rounded-full bg-gray-200" />
              </div>
            ))}
        </>
      ) : (
        <div className="w-full text-md font-bold text-gray-500 mr-20">
          No more events
        </div>
      )}
    </div>
  )
}
