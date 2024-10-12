import { cn } from '@/lib/utils'
import { Key, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'


interface CalendarEvent {
  title: string;
  time: string;
  color: string;
  bgcolor: string;
  barColor: string;
  dateColor: string;
}

interface CalendarEventProps {
  events: any,
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

const maxEvents = 2;

function EventCard({ item }: any) {
  const [color] = useState<any>(getRandomColor())
  console.log({ item })
  const sameDate =
    new Date(item.start.dateTime).getDate() ==
    new Date(item.end.dateTime).getDate()

  return (
    <div
      className={cn(
        'relative flex h-10 w-full mr-10 items-center gap-2 overflow-hidden rounded-md pl-1 transition-all',
        color?.bgcolor
      )}
    >
      <div className={cn('h-5 w-1 rounded-sm ml-1', color.barColor)}></div>
      <div className="flex-col items-center justify-center">
        <h4 className={cn('text-sm font-bold', item.color)}>{item.summary}</h4>
        <p className={cn('whitespace-pre text-xs', item.dateColor)}>
          {item.time}
        </p>
      </div>
    </div>
  )
}

function AllEventsModal({ events }: { events: any[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 h-8 w-full items-center justify-between rounded-md border-2 border-slate-200 bg-slate-50 p-1">
          <p className="text-xs font-bold text-neutral-800">
            +{events.length - maxEvents} event
            {events.length - maxEvents > 1 && 's'}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>All Events</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          {events.map((item, index) => (
            <EventCard key={index} item={item} />
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default function calendarevent({
  events,
}: CalendarEventProps) {
  // const []
  const extraCount = events?.items?.length - maxEvents;
  console.log(events?.items);

  return (
    <div
      className={cn(
        'group relative flex size-52 flex-col overflow-hidden rounded-common border-2 bg-white p-4'
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
      {extraCount ? (
        <>
          <div className="flex cursor-pointer hover:bg-gray-200 dark:hover-bg-gray-800 h-8 w-full items-center justify-between rounded-md border-2 border-slate-200 bg-slate-50 p-1">
            <p className="text-xs font-bold text-neutral-800">
              +{extraCount} event{extraCount > 1 && 's'}
            </p>
            {/* <p className="text-[10px] text-gray-500">16:15 - 20:00</p> */}
          </div>
          {events?.items
            ?.slice(maxEvents, maxEvents + 3)
            .map((item: any, index: any) => (
              <div
                key={index}
                style={{
                  paddingInline: `${(index + 1) * 6}px`
                }}
              >
                <div className="mt-[1px] h-[2px] w-full rounded-full bg-gray-200" />
              </div>
            ))}
        </>
      ) : (
        <div className="w-full text-center text-xs font-bold text-gray-500">
          No more events
        </div>
      )}
    </div>
  )
}

