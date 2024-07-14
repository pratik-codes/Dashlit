import TabsComponent from 'components/common/TabsComponent'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllPublicQuotesService,
  getFavouriteService
} from '../../../../firebase/functions/QuotesActions'
import { getMyQuotesAction } from '../../../../redux/Actions/Quotes.actions'
import { RootStore } from '../../../../redux/Store'
import Svg from '../../../common/Svg'
import Button from '../../../common/button/button'
import AddQuotesModal from './AddQuotesModal'
import Favourites from './Favourites'
import MyQuotes from './MyQuotes'
import PublicQuotes from './PublicQuotes'

const QuotesTabs = () => {
  const [activeTab, setActiveTab] = useState('My quotes')
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

  const tabsProps = {
    tabs: [
      {
        id: 'My quotes',
        label: 'My quotes'
      },
      {
        id: 'Public quotes',
        label: 'Public quotes'
      },
      {
        id: 'Favourites',
        label: 'Favourites'
      }
    ],
    onClick: (id: string) => {
      setActiveTab(id)
    }
  }

  return (
    <div className="h-full w-full">
      <div className="div flex justify-between p-2 w-full">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <TabsComponent {...tabsProps} />
        </div>
        {activeTab === 'My quotes' && (
          <Button
            kind="elevated"
            className="focus:outline-none"
            onClick={() => setIsAddQuotesModalOpen(true)}
          >
            <Svg type="add" />
          </Button>
        )}
      </div>
      <div className="flex justify-start">
        {activeTab === 'My quotes' && <MyQuotes MyQuotesRedux={MY_QUOTES} />}
        {activeTab === 'Public quotes' && (
          <PublicQuotes publicQuotesData={PUBLIC_QUOTES} />
        )}
        {activeTab === 'Favourites' && (
          <Favourites
            favQuotesData={FAV_QUOTES}
            getFavQuotes={() => getFavouriteQuotes()}
          />
        )}
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
