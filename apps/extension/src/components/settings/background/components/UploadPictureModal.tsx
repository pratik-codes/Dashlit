import React, { useState } from 'react'
import Compressor from 'compressorjs'
import { mutateDataHandler } from 'utils/demoapp.utils'
import {
     addImageURL,
     uploadBackgroundImage
} from '../../../../firebase/functions/UploadActions'

// Shadcn UI components
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { UploadCloud, Loader2 } from "lucide-react"
import { toast } from '@/components/ui/use-toast'

interface Props {
     isOpen: boolean
     closeModal: () => void
     openModal: () => void
     loadPictures: () => void
}

const UploadPictureModal: React.FC<Props> = ({
     isOpen,
     closeModal,
     openModal,
     loadPictures
}) => {
     const [isUploading, setIsUploading] = useState(false)
     const [pictureName, setPictureName] = useState('')
     const [pictureUrl, setPictureUrl] = useState('')

     const triggerMessage = (message: string, type: 'success' | 'error') => {
          toast({
               title: type === 'success' ? "Success" : "Error",
               description: message,
               variant: type === 'success' ? "default" : "destructive",
          })
     }

     const uploadPictureHandler = async (file: File) => {
          if (!file) return

          setIsUploading(true)
          new Compressor(file, {
               quality: 0.8,
               success: async (compressedResult: any) => {
                    const isUploaded = await uploadBackgroundImage(compressedResult)
                    if (isUploaded) triggerMessage('Image uploaded successfully', 'success')
                    else triggerMessage('Image upload failed :(', 'error')
                    loadPictures()
                    setIsUploading(false)
                    closeModal()
               }
          })
     }

     const pictureLinkAddHandler = async () => {
          if (pictureUrl?.length === 0) {
               triggerMessage('Please add link url and name', 'error')
               return
          }
          await addImageURL(pictureUrl, pictureName)
          triggerMessage('Picture added.', 'success')
          loadPictures()
          closeModal()
     }

     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const files = event.target.files
          if (files && files.length > 0) {
               uploadPictureHandler(files[0])
          }
     }

     const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
          event.preventDefault()
          event.stopPropagation()

          const files = event.dataTransfer.files
          if (files && files.length > 0) {
               uploadPictureHandler(files[0])
          }
     }

     const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
          event.preventDefault()
          event.stopPropagation()
     }

     return (
          <Dialog open={isOpen} onOpenChange={(open) => {
               if (!open) closeModal()
               else openModal()
          }}>
               <DialogContent className="sm:max-w-md dark:bg-gray-900 dark:text-gray-100">
                    <DialogHeader>
                         <DialogTitle>Upload Background Picture</DialogTitle>
                    </DialogHeader>

                    <div
                         className="flex flex-col items-center justify-center w-full rounded-lg border-2 border-dashed dark:border-gray-700 h-40 p-4 mt-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                         onDrop={handleDrop}
                         onDragOver={handleDragOver}
                         onClick={() => document.getElementById('file-upload')?.click()}
                    >
                         {isUploading ? (
                              <div className="flex flex-col items-center justify-center">
                                   <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                   <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Uploading...</p>
                              </div>
                         ) : (
                              <div className="flex flex-col items-center justify-center">
                                   <UploadCloud className="h-10 w-10 text-gray-400 dark:text-gray-500" />
                                   <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Drag and drop your file here</p>
                                   <p className="text-xs text-gray-500 dark:text-gray-400">or click to select</p>
                                   <input
                                        id="file-upload"
                                        type="file"
                                        accept=".png,.jpeg,.jpg"
                                        className="hidden"
                                        onChange={handleFileChange}
                                   />
                              </div>
                         )}
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                         <div className="text-lg font-medium">Or add image URL</div>

                         <div className="space-y-2">
                              <Label htmlFor="picture-name">Picture Name</Label>
                              <Input
                                   id="picture-name"
                                   type="text"
                                   placeholder="Give your picture a name"
                                   value={pictureName}
                                   onChange={(e) => setPictureName(e.target.value)}
                                   className="dark:bg-gray-800 dark:border-gray-700"
                              />
                         </div>

                         <div className="space-y-2">
                              <Label htmlFor="picture-url">Picture URL</Label>
                              <Input
                                   id="picture-url"
                                   type="text"
                                   placeholder="https://example.com/image.jpg"
                                   value={pictureUrl}
                                   onChange={(e) => setPictureUrl(e.target.value)}
                                   className="dark:bg-gray-800 dark:border-gray-700"
                              />
                         </div>

                         <div className="flex justify-end space-x-2">
                              <Button
                                   variant="outline"
                                   onClick={closeModal}
                                   className="dark:bg-gray-800 dark:hover:bg-gray-700"
                              >
                                   Cancel
                              </Button>
                              <Button
                                   onClick={() => mutateDataHandler(pictureLinkAddHandler)}
                                   disabled={pictureUrl?.length === 0}
                              >
                                   Add Image
                              </Button>
                         </div>
                    </div>
               </DialogContent>
          </Dialog>
     )
}

export default UploadPictureModal
