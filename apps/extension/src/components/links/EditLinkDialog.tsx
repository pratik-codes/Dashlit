import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle, Trash2, ExternalLink, Edit, Eye, Link as LinkIcon } from "lucide-react"

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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

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

interface WebsiteMetadata {
     title: string | null
     description: string | null
     image: string | null
}

export default function EditLinkDialog({ isOpen, closeModal, openModal, id, linkTitle, links, type }: Props) {
     const [title, setTitle] = useState(linkTitle)
     const [urls, setUrls] = useState<Link[]>([...links])
     const [linkAdded, setLinkAdded] = useState<Link[]>([])
     const [linksMetadata, setLinksMetadata] = useState<Record<string, WebsiteMetadata>>({})
     const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})

     const dispatch: any = useDispatch()

     useEffect(() => {
          // Fetch metadata for existing links when dialog opens
          if (isOpen) {
               const fetchMetadata = async () => {
                    for (const link of urls) {
                         await getWebsiteMetadata(link.link, link.id)
                    }
               }
               fetchMetadata()
          }
     }, [isOpen, urls])

     const getWebsiteMetadata = async (url: string, id: string) => {
          if (!url || linksMetadata[id]?.title) return

          try {
               setIsLoading(prev => ({ ...prev, [id]: true }))

               // Use favicon as a basic image representation
               const faviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain_url=https://${url}&sz=128`

               // In a real implementation, you would fetch actual metadata from the URL
               // This would require a backend service that can fetch the page and extract metadata
               // For now, we're creating placeholder metadata

               // Create normalized domain name to use as fallback title
               const normalizedDomain = url.replace(/^www\./, '').split('/')[0]
               const domainParts = normalizedDomain.split('.')
               let siteName = domainParts.length >= 2 ?
                    domainParts[domainParts.length - 2].charAt(0).toUpperCase() +
                    domainParts[domainParts.length - 2].slice(1) :
                    normalizedDomain

               // Simulating a delay for metadata fetch
               await new Promise(resolve => setTimeout(resolve, 500))

               setLinksMetadata(prev => ({
                    ...prev,
                    [id]: {
                         title: siteName,
                         description: `Visit ${url} to learn more.`,
                         image: faviconUrl
                    }
               }))
          } catch (error) {
               console.error('Error fetching metadata:', error)
          } finally {
               setIsLoading(prev => ({ ...prev, [id]: false }))
          }
     }

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
          const cleanUrl = value.replace(/(^\w+:|^)\/\//, '')
          setLinkAdded(linkAdded.map(link =>
               link.id === inputId ? { ...link, link: cleanUrl } : link
          ))

          // Trigger metadata fetch for new URL
          getWebsiteMetadata(cleanUrl, inputId)
     }

     const inputDeleteHandler = (inputId: string) => {
          setLinkAdded(linkAdded.filter(link => link.id !== inputId))
     }

     const linksDeleteHandler = (inputId: string) => {
          setUrls(urls.filter(link => link.id !== inputId))
     }

     const addNewLink = () => {
          const newLinkId = uuidv4()
          setLinkAdded([...linkAdded, { link: '', id: newLinkId }])
     }

     const openLink = (url: string) => {
          window.open(`https://${url}`, '_blank')
     }

     // CSS styles to hide scrollbars but keep functionality
     const hideScrollbarStyle = {
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
          '&::-webkit-scrollbar': {
               display: 'none' // Chrome, Safari, Opera
          }
     } as React.CSSProperties

     return (
          <Dialog open={isOpen} onOpenChange={closeModal}>
               <DialogContent className="max-w-[90vw] w-[1200px] max-h-[98vh] rounded-common">
                    <DialogHeader>
                         <DialogTitle>Edit link</DialogTitle>
                    </DialogHeader>

                    <div className="grid gap-4 py-4 w-full">
                         <div className="grid gap-2">
                              <Label htmlFor="link-title">Title</Label>
                              <Input
                                   id="link-title"
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                              />
                         </div>
                         <div className="flex w-full justify-between items-center">
                              <div>
                                   {urls.length > 0 && (
                                        <h1 className="text-xl font-bold">Saved Links</h1>
                                   )}
                              </div>
                              <Button
                                   variant="outline"
                                   className="ml-auto flex items-center"
                                   onClick={addNewLink}
                              >
                                   <PlusCircle className="mr-2 h-4 w-4" />
                                   Add New Link
                              </Button>
                         </div>



                         <ScrollArea className="h-[65vh] pr-0" style={hideScrollbarStyle}>

                              <div className="grid gap-4">

                                   <div className="grid grid-cols-2 gap-4">
                                        {urls.map((link) => (
                                             <Card key={link.id} className="relative overflow-hidden">
                                                  <CardHeader className="p-4">
                                                       <div className="flex items-center">
                                                            {linksMetadata[link.id]?.image && (
                                                                 <img
                                                                      src={linksMetadata[link.id]?.image || ''}
                                                                      alt="Website favicon"
                                                                      className="w-6 h-6 mr-2"
                                                                 />
                                                            )}
                                                            <CardTitle className="text-lg truncate">
                                                                 {linksMetadata[link.id]?.title || link.link}
                                                            </CardTitle>
                                                       </div>
                                                       <CardDescription className="text-sm line-clamp-2">
                                                            {link.link}
                                                       </CardDescription>
                                                  </CardHeader>

                                                  <CardFooter className="p-3 bg-secondary/20 flex justify-between items-center">
                                                       <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-primary"
                                                            onClick={() => openLink(link.link)}
                                                       >
                                                            <Eye className="h-4 w-4 mr-1" />
                                                            Visit
                                                       </Button>

                                                       <Button
                                                            variant="destructive"
                                                            size="sm"
                                                            className="ml-auto"
                                                            onClick={() => linksDeleteHandler(link.id)}
                                                       >
                                                            <Trash2 className="h-4 w-4 mr-1" />
                                                            Remove
                                                       </Button>
                                                  </CardFooter>
                                             </Card>
                                        ))}
                                   </div>

                                   {linkAdded.length > 0 && (
                                        <h3 className="text-sm font-medium mt-4">New Links</h3>
                                   )}

                                   <div className="grid grid-cols-2 gap-4">
                                        {linkAdded.map((link) => (
                                             <Card key={link.id} className="relative overflow-hidden border-dashed">
                                                  <CardHeader className="p-4">
                                                       <div className="flex items-center">
                                                            {isLoading[link.id] ? (
                                                                 <div className="w-6 h-6 mr-2 rounded-full bg-muted animate-pulse" />
                                                            ) : linksMetadata[link.id]?.image ? (
                                                                 <img
                                                                      src={linksMetadata[link.id]?.image || ''}
                                                                      alt="Website favicon"
                                                                      className="w-6 h-6 mr-2"
                                                                 />
                                                            ) : (
                                                                 <LinkIcon className="w-6 h-6 mr-2 text-muted-foreground" />
                                                            )}

                                                            <Input
                                                                 id={`link-${link.id}`}
                                                                 placeholder="Add website URL"
                                                                 value={link.link}
                                                                 onChange={(e) => inputOnchangeHandler(link.id, e.target.value.toLowerCase())}
                                                                 className="border-none shadow-none px-0 text-base"
                                                            />
                                                       </div>

                                                       {linksMetadata[link.id]?.title && !isLoading[link.id] && (
                                                            <CardDescription className="text-sm mt-2 line-clamp-2">
                                                                 {linksMetadata[link.id]?.description}
                                                            </CardDescription>
                                                       )}
                                                  </CardHeader>

                                                  <CardFooter className="p-3 bg-secondary/20 flex justify-between items-center">
                                                       {link.link && (
                                                            <Button
                                                                 variant="ghost"
                                                                 size="sm"
                                                                 className="text-primary"
                                                                 onClick={() => openLink(link.link)}
                                                                 disabled={!link.link}
                                                            >
                                                                 <Eye className="h-4 w-4 mr-1" />
                                                                 Preview
                                                            </Button>
                                                       )}

                                                       <Button
                                                            variant="destructive"
                                                            size="sm"
                                                            className="ml-auto"
                                                            onClick={() => inputDeleteHandler(link.id)}
                                                       >
                                                            <Trash2 className="h-4 w-4 mr-1" />
                                                            Remove
                                                       </Button>
                                                  </CardFooter>
                                             </Card>
                                        ))}
                                   </div>
                              </div>
                         </ScrollArea>

                    </div>

                    <DialogFooter>
                         <Button variant="outline" onClick={closeModal}>
                              Cancel
                         </Button>
                         <Button onClick={() => { editHandler(); closeModal(); }}>
                              Save Changes
                         </Button>
                    </DialogFooter>
               </DialogContent>
          </Dialog>
     )
}
