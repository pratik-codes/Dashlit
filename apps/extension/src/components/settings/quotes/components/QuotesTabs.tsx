import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
     getAllPublicQuotesService,
     getFavouriteService
} from '../../../../firebase/functions/QuotesActions'
import { getMyQuotesAction } from '../../../../redux/Actions/Quotes.actions'
import { RootStore } from '../../../../redux/Store'
import AddQuotesModal from './AddQuotesModal'
import Favourites from './Favourites'
import MyQuotes from './MyQuotes'
import PublicQuotes from './PublicQuotes'

// Shadcn UI components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

const QuotesTabs = () => {
     const [activeTab, setActiveTab] = useState('my_quotes')
     const [isAddQuotesModalOpen, setIsAddQuotesModalOpen] = useState(false)
     const [publicQuotes, setPublicQuotes] = useState({})
     const [favQuotes, setFavQuotes] = useState({})

     const MyQuotesRedux: any = useSelector(
          (state: RootStore) => state.myQuotesData
     )

     const dispatch: any = useDispatch()

     const getPublicQuotes = async () => {
          const res = await getAllPublicQuotesService()
          if (!res?.error) localStorage.setItem('public_quotes', JSON.stringify(res))
          setPublicQuotes(res)
     }

     const getFavouriteQuotes = async () => {
          const res = await getFavouriteService()
          if (!res?.error) localStorage.setItem('fav_quotes', JSON.stringify(res))
          setFavQuotes(res)
     }

     useEffect(() => {
          dispatch(getMyQuotesAction())
          getPublicQuotes()
          getFavouriteQuotes()
     }, [])

     const MY_QUOTES =
          JSON.parse(localStorage.getItem('my_quotes') || '{}') || MyQuotesRedux
     const PUBLIC_QUOTES =
          JSON.parse(localStorage.getItem('public_quotes') || '{}') || publicQuotes
     const FAV_QUOTES =
          JSON.parse(localStorage.getItem('fav_quotes') || '{}') || favQuotes

     return (
          <div className="h-full w-full flex flex-col">
               <div className="flex justify-between items-center p-4 w-full border-b dark:border-gray-800">
                    <Tabs
                         defaultValue="my_quotes"
                         onValueChange={setActiveTab}
                         value={activeTab}
                         className="w-full"
                    >
                         <TabsList className="grid w-full grid-cols-3 dark:bg-gray-800/50">
                              <TabsTrigger value="my_quotes">My quotes</TabsTrigger>
                              <TabsTrigger value="public_quotes">Public quotes</TabsTrigger>
                              <TabsTrigger value="favourites">Favourites</TabsTrigger>
                         </TabsList>
                    </Tabs>

                    {activeTab === 'my_quotes' && (
                         <Button
                              variant="outline"
                              size="icon"
                              className="ml-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                              onClick={() => setIsAddQuotesModalOpen(true)}
                         >
                              <PlusIcon className="h-4 w-4" />
                         </Button>
                    )}
               </div>

               <div className="flex-1 p-4 overflow-auto">
                    <Tabs value={activeTab} className="w-full">
                         <TabsContent value="my_quotes" className="m-0">
                              <MyQuotes MyQuotesRedux={MY_QUOTES} />
                         </TabsContent>
                         <TabsContent value="public_quotes" className="m-0">
                              <PublicQuotes publicQuotesData={PUBLIC_QUOTES} />
                         </TabsContent>
                         <TabsContent value="favourites" className="m-0">
                              <Favourites
                                   favQuotesData={FAV_QUOTES}
                                   getFavQuotes={() => getFavouriteQuotes()}
                              />
                         </TabsContent>
                    </Tabs>

                    <AddQuotesModal
                         isOpen={isAddQuotesModalOpen}
                         openModal={() => setIsAddQuotesModalOpen(true)}
                         closeModal={() => setIsAddQuotesModalOpen(false)}
                         type="add"
                    />
               </div>
          </div>
     )
}

export default QuotesTabs
