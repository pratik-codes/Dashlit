import React, { useEffect, useState } from 'react'
import { getFavouritePictureService } from '../../../../firebase/functions/UploadActions'
import Loader from '../../../common/Loader'
import PictureComponent from './PictureComponent'

const FavouritePictures: React.FC<any> = () => {
  const [favouriteImages, setFavouriteImages] = useState<any>(undefined)

  const getFavouriteImages = async () => {
    const res: any = await getFavouritePictureService()
    setFavouriteImages(res?.data)
  }

  useEffect(() => {
    getFavouriteImages()
  }, [])

  const FAV_PICTURES =
    JSON.parse(localStorage.getItem('fav_pictures') as any) || favouriteImages

  return (
    <div>
      <div className="w-full">
        <div className="p-2 m-2 w-full">
          <div className="grid grid-cols-2 gap-6 w-full mb-10">
            {FAV_PICTURES ? (
              FAV_PICTURES.map((pic: any) => {
                return (
                  <div key={pic?.id} className="full h-full">
                    <PictureComponent
                      data={pic?.data}
                      id={pic?.id}
                      type="fav"
                      refreshPictures={getFavouriteImages}
                    />
                  </div>
                )
              })
            ) : (
              <div>
                <Loader />
              </div>
            )}
          </div>
          {FAV_PICTURES && FAV_PICTURES?.length === 0 && (
            <div className="">
              <span className="font-bold text-white text-xl">
                No Favourites found.
              </span>
              <span className="text-gray-900 ml-2 text-xl">Add now...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FavouritePictures
