import { useEffect, useState } from 'react'
import { getAllPublicPicturesService } from '../../../../firebase/functions/UploadActions'
import Loader from '../../../common/Loader'
import PictureComponent from './PictureComponent'

const PublicPictures = () => {
  const [publicPictures, setPublicPictures] = useState<any>(undefined)

  const getPublicPictures = async () => {
    const res = await getAllPublicPicturesService()
    setPublicPictures(res?.data)
  }

  useEffect(() => {
    getPublicPictures()
  }, [])

  const PUBLIC_IMAGES =
    JSON.parse(localStorage.getItem('public_pictures') as any) || publicPictures

  return (
    <div className="h-full w-full">
      <div className="p-2 w-full h-full">
        <div className="grid grid-cols-2 gap-6 w-full pb-6">
          {PUBLIC_IMAGES ? (
            PUBLIC_IMAGES.map((pic: any) => {
              return (
                <div key={pic?.id} className="w-full">
                  <PictureComponent
                    data={pic?.data}
                    id={pic?.id}
                    type="public"
                    refreshPictures={getPublicPictures}
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
        {PUBLIC_IMAGES && PUBLIC_IMAGES?.length === 0 && (
          <div className="">
            <span className="font-bold text-white text-xl">
              No Pictures found.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default PublicPictures
