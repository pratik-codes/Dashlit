import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle, Trash2, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { updateUserLinksService } from '../../firebase/functions/LinksActions'
import { getLinksList } from '../../redux/Actions/User.actions'

interface Props {
  isOpen: boolean
  closeModal: () => void
  openModal: () => void
  id: string
  linkTitle: string
  links: Link[]
  type: string
}

export interface links {
  link: string
  id: string
}

interface Link {
  link: string
  id: string
}

export default function EditLinkDialog({ isOpen, closeModal, openModal, id, linkTitle, links, type }: Props) {
  const [title, setTitle] = useState(linkTitle)
  const [urls, setUrls] = useState<Link[]>([...links])
  const [linkAdded, setLinkAdded] = useState<Link[]>([])

  const dispatch: any = useDispatch()

  const editHandler = async () => {
    const data = {
      linkTitle: title,
      links: [...urls, ...linkAdded],
      type: [...urls, ...linkAdded].length > 1 ? 'folder' : 'link'
    }
    const res = await updateUserLinksService(id, data)
    if (res.success === true) {
      // Replace with your preferred toast notification
      console.log('Link edited successfully')
      await dispatch(getLinksList())
    } else {
      // Replace with your preferred toast notification
      console.error(res.error)
    }
  }

  const inputOnchangeHandler = (inputId: string, value: string) => {
    setLinkAdded(linkAdded.map(link =>
      link.id === inputId ? { ...link, link: value.replace(/(^\w+:|^)\/\//, '') } : link
    ))
  }

  const inputDeleteHandler = (inputId: string) => {
    setLinkAdded(linkAdded.filter(link => link.id !== inputId))
  }

  const linksDeleteHandler = (inputId: string) => {
    setUrls(urls.filter(link => link.id !== inputId))
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className='max-w-[550px] rounded-common'>
        <DialogHeader>
          <DialogTitle>Edit link</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4 my-4 w-full">
          <div className="grid gap-2">
            <Label htmlFor="link-title">Title</Label>
            <Input
              id="link-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {urls.map((link) => (
            <div key={link.id} className="flex items-center gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between text-left font-normal items-center"
                      onClick={() => window.open(`https://${link.link}`, '_blank')}
                    >
                      <div className='flex items-center'>
                        <img
                          className="mr-2 h-4 w-4 rounded-full flex justify-between items-center"
                          src={`https://s2.googleusercontent.com/s2/favicons?domain_url=https://${link.link}`}
                          alt="favicon"
                        />
                        <div className="truncate">{link.link.length < 50 ? link.link : link.link.substr(0, 50)}...</div>
                      </div>
                      <ExternalLink className="h-4 w-4 opacity-50 ml-2" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.link}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-gray-300 dark:hover-gray-800 rounded-full"
                onClick={() => linksDeleteHandler(link.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {linkAdded.map((link) => (
            <div key={link.id} className="flex items-center gap-1">
              <Input
                id={`link-${link.id}`}
                placeholder="Add new link"
                value={link.link}
                onChange={(e) => inputOnchangeHandler(link.id, e.target.value.toLowerCase())}
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-gray-300 dark:hover-gray-800 rounded-full"
                onClick={() => inputDeleteHandler(link.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            className="ml-auto"
            onClick={() => setLinkAdded([...linkAdded, { link: '', id: uuidv4() }])}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Link
          </Button>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={() => { editHandler(); closeModal(); }}>
            Edit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
