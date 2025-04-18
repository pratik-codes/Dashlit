import { useEffect, useState } from 'react'

import { getAllImages } from '../../../firebase/functions/UploadActions'
import FavouritePictures from './components/FavouritePictures'
import MyPictures from './components/MyPictures'
import PublicPictures from './components/PublicPictures'
import UploadPictureModal from './components/UploadPictureModal'

// Shadcn UI components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

const Background = () => {
     const [activeTab, setActiveTab] = useState('my_pictures')
     const [isUploadModal, setIsUploadModal] = useState(false)
     const [images, setImages] = useState()

     const getImages = async () => {
          const res: any = await getAllImages()
          setImages(res)
     }

     useEffect(() => {
          getImages()
     }, [])

     const storedImages = localStorage.getItem('background_images')
     const parsedImages = storedImages ? JSON.parse(storedImages) : []

     const IMAGES = images || parsedImages

     return (
          <Card className="h-full w-full flex flex-col rounded-lg border dark:border-gray-800 bg-white dark:bg-gray-950">
               <div className="flex justify-between items-center p-4 w-full border-b dark:border-gray-800">
                    <Tabs
                         defaultValue="my_pictures"
                         onValueChange={setActiveTab}
                         value={activeTab}
                         className="w-full"
                    >
                         <TabsList className="grid w-full grid-cols-3 dark:bg-gray-800/50">
                              <TabsTrigger value="my_pictures">My pictures</TabsTrigger>
                              <TabsTrigger value="public_pictures">Public pictures</TabsTrigger>
                              <TabsTrigger value="Favourites">Favourites</TabsTrigger>
                         </TabsList>
                    </Tabs>

                    {activeTab === 'my_pictures' && (
                         <Button
                              variant="outline"
                              size="icon"
                              className="ml-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                              onClick={() => setIsUploadModal(true)}
                         >
                              <PlusIcon className="h-4 w-4" />
                         </Button>
                    )}
               </div>

               <UploadPictureModal
                    isOpen={isUploadModal}
                    openModal={() => setIsUploadModal(true)}
                    closeModal={() => setIsUploadModal(false)}
                    loadPictures={() => getImages()}
               />

               <div className="flex flex-1 overflow-hidden p-4">
                    <div className="w-full h-full overflow-y-auto">
                         <Tabs value={activeTab} className="w-full">
                              <TabsContent value="my_pictures" className="m-0">
                                   <MyPictures data={IMAGES} refreshPictures={getImages} />
                              </TabsContent>
                              <TabsContent value="Favourites" className="m-0">
                                   <FavouritePictures />
                              </TabsContent>
                              <TabsContent value="public_pictures" className="m-0">
                                   <PublicPictures />
                              </TabsContent>
                         </Tabs>
                    </div>
               </div>
          </Card>
     )
}

export default Background
