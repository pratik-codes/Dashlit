import React from 'react'
import { useDispatch } from 'react-redux'

import {
     addFavoriteServicePicture,
     deletePicture
} from '../../../../firebase/functions/UploadActions'
import { updateUserDetailsService } from '../../../../firebase/functions/UserDetailsActions'
import { setUserActiveData } from '../../../../firebase/functions/UsersActiveData'
import { getSettingsList } from '../../../../redux/Actions/User.actions'
import { mutateDataHandler } from 'utils/demoapp.utils'

// Shadcn UI components
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
     Heart,
     Monitor,
     Trash2,
     ImageIcon
} from "lucide-react"
import {
     Tooltip,
     TooltipContent,
     TooltipProvider,
     TooltipTrigger
} from "@/components/ui/tooltip"
import { useToast } from '@/hooks/use-toast'

interface Props {
     data: any
     id: string
     type: string
     refreshPictures: any
}

const PictureComponent: React.FC<Props> = ({
     data,
     id,
     type,
     refreshPictures
}) => {
     const { toast } = useToast()
     let date = new Date(data.created_at)
     const dispatch: any = useDispatch()

     let settings_data = localStorage.getItem('user-settings')
     const settings_data_parsed = settings_data && JSON.parse(settings_data)

     const triggerMessage = (message: string, type: 'success' | 'error') => {
          toast({
               title: type === 'success' ? "Success" : "Error",
               description: message,
               variant: type === 'success' ? "default" : "destructive",
          })
     }

     const favPictureHandler = () => {
          addFavoriteServicePicture(id, data?.url, data?.name, data?.created_at)
          triggerMessage('Added to favorites', 'success')
     }

     const deleteFav = async () => {
          triggerMessage('Deleting picture...', 'success')
          await deletePicture(id, data.name, 'fav')
          triggerMessage('Picture deleted', 'success')
          refreshPictures()
     }

     const deleteMyPicture = async () => {
          triggerMessage('Deleting picture...', 'success')
          await deletePicture(id, data.name, 'my_pictures')
          refreshPictures()
          triggerMessage('Picture deleted', 'success')
     }

     const setCurrentPicture = async () => {
          await setUserActiveData({ background_url: data?.url }, 'picture')
          // set the Enable public picture to false as the user want to use their own picture as background
          const settings = JSON.parse(settings_data_parsed?.settings)
          const objIndex = settings.findIndex(
               (obj: any) => obj.type === 'picture-source-settings'
          )
          if (settings[objIndex].isToggled === true) {
               settings[objIndex].isToggled = false
               settings_data_parsed['settings'] = JSON.stringify(settings)
               if (settings_data_parsed) {
                    await updateUserDetailsService(settings_data_parsed)
               }
               dispatch(getSettingsList())
          }
          triggerMessage('Background updated', 'success')
     }

     // Define action buttons based on type
     const actionMap = {
          my_pictures: [
               {
                    icon: <Heart className="h-4 w-4" />,
                    tooltip: "Add to favourites",
                    action: () => mutateDataHandler(favPictureHandler)
               },
               {
                    icon: <Monitor className="h-4 w-4" />,
                    tooltip: "Apply as background",
                    action: () => mutateDataHandler(setCurrentPicture)
               },
               {
                    icon: <Trash2 className="h-4 w-4" />,
                    tooltip: "Delete picture",
                    action: () => mutateDataHandler(deleteMyPicture)
               }
          ],
          fav: [
               {
                    icon: <Monitor className="h-4 w-4" />,
                    tooltip: "Apply as background",
                    action: () => mutateDataHandler(setCurrentPicture)
               },
               {
                    icon: <Trash2 className="h-4 w-4" />,
                    tooltip: "Delete picture",
                    action: () => mutateDataHandler(deleteFav)
               }
          ],
          public: [
               {
                    icon: <Heart className="h-4 w-4" />,
                    tooltip: "Add to favourites",
                    action: () => mutateDataHandler(favPictureHandler)
               },
               {
                    icon: <Monitor className="h-4 w-4" />,
                    tooltip: "Apply as background",
                    action: () => mutateDataHandler(setCurrentPicture)
               }
          ]
     }

     const actions = actionMap[type] || [];

     return (
          <Card className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
               <CardContent className="p-0">
                    {data.url ? (
                         <div
                              className="aspect-video bg-cover bg-center"
                              style={{ backgroundImage: `url(${data.url})` }}
                         />
                    ) : (
                         <div className="aspect-video flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                              <ImageIcon className="h-10 w-10 text-gray-400 dark:text-gray-500" />
                         </div>
                    )}
               </CardContent>
               <CardFooter className="flex justify-between p-2 gap-2">
                    <TooltipProvider>
                         {actions.map((action, index) => (
                              <Tooltip key={index}>
                                   <TooltipTrigger asChild>
                                        <Button
                                             variant="outline"
                                             size="icon"
                                             onClick={action.action}
                                             className="h-8 w-8 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
                                        >
                                             {action.icon}
                                        </Button>
                                   </TooltipTrigger>
                                   <TooltipContent side="bottom">
                                        {action.tooltip}
                                   </TooltipContent>
                              </Tooltip>
                         ))}
                    </TooltipProvider>
               </CardFooter>
          </Card>
     )
}

export default PictureComponent
