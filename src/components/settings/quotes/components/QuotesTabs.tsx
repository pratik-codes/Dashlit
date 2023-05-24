import TabsComponent from 'components/common/TabsComponent'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllPublicQuotesService,
  getFavouriteService
} from '../../../../firebase/functions/QuotesActions'
import { getMyQuotesAction } from '../../../../redux/Actions/Quotes.actions'
import { RootStore } from '../../../../redux/Store'
import Button from '../../../common/button/button'
import Svg from '../../../common/Svg'
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

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyQuotesAction())
  }, [])

  const getPublicQuotes = async () => {
    const res = await getAllPublicQuotesService()
    setPublicQuotes(res)
  }

  const getFavouriteQuotes = async () => {
    const res = await getFavouriteService()
    console.log(res)
    setFavQuotes(res)
  }

  useEffect(() => {
    getPublicQuotes()
    getFavouriteQuotes()
  }, [])

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
        {activeTab === 'My quotes' && (
          <MyQuotes MyQuotesRedux={MyQuotesRedux} />
        )}
        {activeTab === 'Public quotes' && (
          <PublicQuotes publicQuotesData={publicQuotes} />
        )}
        {activeTab === 'Favourites' && (
          <Favourites
            favQuotesData={favQuotes}
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
