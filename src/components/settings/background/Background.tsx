import TabsComponent from 'components/common/TabsComponent'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllImages } from '../../../firebase/functions/UploadActions'
import Button from '../../common/button/button'
import Svg from '../../common/Svg'
import FavouritePictures from './components/FavouritePictures'
import MyPictures from './components/MyPictures'
import PublicPictures from './components/PublicPictures'
import UploadPictureModal from './components/UploadPictureModal'

const Background: any = () => {
  const [activeTab, setActiveTab] = useState('my_pictures')
  const [isUploadModal, setIsUploadModal] = useState(false)
  const [publicQuotes, setPublicQuotes] = useState({})
  const [favQuotes, setFavQuotes] = useState({})
  const [images, setImages] = useState(undefined)

  const getImages = async () => {
    const res: any = await getAllImages()
    setImages(res)
  }

  useEffect(() => {
    getImages()
  }, [])

  const dispatch = useDispatch()

  const tabsProps = {
    tabs: [
      {
        id: 'my_pictures',
        label: 'My pictures'
      },
      {
        id: 'public_pictures',
        label: 'Public pictures'
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
        {activeTab === 'my_pictures' && (
          <Button
            kind="elevated"
            className="focus:outline-none"
            onClick={() => setIsUploadModal(true)}
          >
            <Svg type="add" />
          </Button>
        )}
      </div>

      <UploadPictureModal
        isOpen={isUploadModal}
        openModal={() => setIsUploadModal(true)}
        closeModal={() => setIsUploadModal(false)}
        loadPictures={() => getImages()}
      />
      <div className="flex justify-start">
        {activeTab === 'my_pictures' && (
          <MyPictures data={images} refreshPictures={getImages} />
        )}
        {activeTab === 'Favourites' && <FavouritePictures />}
        {activeTab === 'public_pictures' && <PublicPictures />}
      </div>
    </div>
  )
}

export default Background
