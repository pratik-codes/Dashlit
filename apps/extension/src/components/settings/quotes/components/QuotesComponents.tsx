import React from 'react'
import { useDispatch } from 'react-redux'
import { mutateDataHandler } from 'utils/demoapp.utils'
import {
     addFavoriteService,
     deleteFavoriteService,
     deleteMyQuotesService
} from '../../../../firebase/functions/QuotesActions'
import { updateUserDetailsService } from '../../../../firebase/functions/UserDetailsActions'
import { setUserActiveData } from '../../../../firebase/functions/UsersActiveData'
import { getMyQuotesAction } from '../../../../redux/Actions/Quotes.actions'
import { getSettingsList } from '../../../../redux/Actions/User.actions'
import AddQuotesModal from './AddQuotesModal'

// Shadcn UI components
import { Card, CardContent } from "@/components/ui/card"
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { MoreVertical, Edit, Trash2, Star, Heart } from "lucide-react"
import { toast } from '@/components/ui/use-toast'

interface Props {
     id: string
     quotes: string
     author: string
     favourite: boolean
     type: string
     getFavourites: any
}

const QuotesComponents: React.FC<Props> = ({
     id,
     quotes,
     favourite,
     type,
     getFavourites,
     author
}) => {
     const [openModal, setOpenModal] = React.useState(false)
     const dispatch: any = useDispatch()

     const triggerMessage = (message: string, type: 'success' | 'error') => {
          toast({
               title: type === 'success' ? "Success" : "Error",
               description: message,
               variant: type === 'success' ? "default" : "destructive",
          })
     }

     const deleteQuote = async () => {
          deleteMyQuotesService(id)
          dispatch(getMyQuotesAction())
          triggerMessage('Quote deleted successfully', 'success')
     }

     const favouriteClickHandler = async () => {
          addFavoriteService(id, quotes, author)
          triggerMessage('Added to favorites', 'success')
     }

     const removeFromFavourites = () => {
          deleteFavoriteService(id)
          getFavourites()
          triggerMessage('Quote removed from favorites', 'error')
     }

     let settings_data = localStorage.getItem('user-settings')
     const settings_data_parsed = JSON.parse(settings_data || '')

     const setCurrentQuote = async (data: any) => {
          await setUserActiveData(data, 'quote')
          // set the Enable public picture to false as the user want to use their own picture as background
          const settings = JSON.parse(settings_data_parsed?.settings)
          const objIndex = settings.findIndex(
               (obj: any) => obj.type === 'quotes-source-settings'
          )
          if (settings[objIndex].isToggled === true) {
               settings[objIndex].isToggled = false
               settings_data_parsed['settings'] = JSON.stringify(settings)
               if (settings_data_parsed) {
                    await updateUserDetailsService(settings_data_parsed)
               }
               dispatch(getSettingsList())
          }
          triggerMessage('Quote set as current', 'success')
     }

     return (
          <Card className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
               <CardContent className="p-4 flex justify-between items-start">
                    <div className="flex-1 pr-4">
                         <blockquote className="text-md font-medium dark:text-gray-200">"{quotes}"</blockquote>
                         <cite className="block mt-2 text-sm text-gray-500 dark:text-gray-400">— {author}</cite>
                    </div>

                    <DropdownMenu>
                         <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md border dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700 hover:dark:bg-gray-600">
                              <MoreVertical className="h-4 w-4" />
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="end" className="dark:bg-gray-800 dark:border-gray-700">
                              {type === 'my_quotes' && (
                                   <>
                                        <DropdownMenuItem
                                             onClick={() => setOpenModal(true)}
                                             className="cursor-pointer dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                        >
                                             <Edit className="mr-2 h-4 w-4" />
                                             <span className="dark:text-gray-200">Edit quote</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                             onClick={() => mutateDataHandler(deleteQuote)}
                                             className="cursor-pointer dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                        >
                                             <Trash2 className="mr-2 h-4 w-4" />
                                             <span className="dark:text-gray-200">Delete quote</span>
                                        </DropdownMenuItem>
                                   </>
                              )}

                              <DropdownMenuItem
                                   onClick={() => mutateDataHandler(() => setCurrentQuote({ quote: quotes, author_name: author }))}
                                   className="cursor-pointer dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                              >
                                   <Star className="mr-2 h-4 w-4" />
                                   <span className="dark:text-gray-200">Set as current</span>
                              </DropdownMenuItem>

                              {type === 'fav_quotes' ? (
                                   <DropdownMenuItem
                                        onClick={() => mutateDataHandler(removeFromFavourites)}
                                        className="cursor-pointer dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                   >
                                        <Heart className="mr-2 h-4 w-4" />
                                        <span className="dark:text-gray-200">Remove from favorites</span>
                                   </DropdownMenuItem>
                              ) : (
                                   <DropdownMenuItem
                                        onClick={() => mutateDataHandler(favouriteClickHandler)}
                                        className="cursor-pointer dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                   >
                                        <Heart className="mr-2 h-4 w-4" />
                                        <span className="dark:text-gray-200">Add to favorites</span>
                                   </DropdownMenuItem>
                              )}
                         </DropdownMenuContent>
                    </DropdownMenu>
               </CardContent>

               <AddQuotesModal
                    isOpen={openModal}
                    openModal={() => setOpenModal(true)}
                    closeModal={() => setOpenModal(false)}
                    type="edit"
                    id={id}
                    fav={favourite}
                    quote={quotes}
                    authorName={author}
               />
          </Card>
     )
}

export default QuotesComponents
