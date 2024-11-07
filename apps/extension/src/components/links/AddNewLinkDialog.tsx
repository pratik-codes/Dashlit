import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle, Trash2 } from "lucide-react"

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

import { addLinksService } from '../../firebase/functions/LinksActions'
import { getLinksList } from '../../redux/Actions/User.actions'

interface Props {
  isOpen: boolean
  closeModal: () => void
  openModal: () => void
}

export default function AddNewLinkDialog({ isOpen, closeModal, openModal }: Props) {
  const [linkTitle, setLinkTitle] = useState('')
  const [links, setLinks] = useState([{ link: '', id: uuidv4() }])

  const dispatch: any = useDispatch()

  const cleanUpHandler = () => {
    closeModal()
    setLinks([{ link: '', id: uuidv4() }])
    setLinkTitle('')
  }

  const addHandler = async () => {
    if (links[0]?.link === '') {
      // Replace with your preferred toast notification
      console.error('Please add a link')
      return
    }
    setLinkTitle('')
    addLinksService(linkTitle, links, `${links.length > 1 ? 'folder' : 'link'}`)
    // Replace with your preferred toast notification
    console.log('Link added successfully')
    cleanUpHandler()
    dispatch(getLinksList())
  }

  const inputOnchangeHandler = (inputId: string, value: string) => {
    setLinks(links.map(link =>
      link.id === inputId ? { ...link, link: value.replace(/(^\w+:|^)\/\//, '') } : link
    ))
  }

  const inputDeleteHandler = (inputId: string) => {
    setLinks(links.filter((link) => link.id !== inputId))
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new link</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4 my-4">
          <div className="grid gap-2">
            <Label htmlFor="link-title">Title</Label>
            <Input
              id="link-title"
              value={linkTitle}
              onChange={(e) => setLinkTitle(e.target.value)}
            />
          </div>
          {links.map((link) => (
            <div key={link.id} className="flex items-center gap-1">
              <Input
                id={`link-${link.id}`}
                placeholder="Add link here"
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
            className="mr-auto"
            onClick={() => setLinks([...links, { link: '', id: uuidv4() }])}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Link
          </Button>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={cleanUpHandler}>
            Cancel
          </Button>
          <Button onClick={addHandler}>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
