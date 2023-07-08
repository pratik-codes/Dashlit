import React from 'react'
import Loader from '../../../common/Loader'
import PictureComponent from './PictureComponent'

interface Props {
  data: any
  refreshPictures: any
}

const MyPictures: React.FC<Props> = ({ data, refreshPictures }) => {
  return (
    <div className="w-full">
      <div className="p-2 m-2 w-full">
        <div className="grid grid-cols-3 gap-6 w-full mb-10">
          {data ? (
            data.map((pic: any) => {
              return (
                <div key={pic?.id} className="full h-full">
                  <PictureComponent
                    data={pic?.data}
                    id={pic?.id}
                    type="my_pictures"
                    refreshPictures={refreshPictures}
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
        {data && data?.length === 0 && (
          <div className="">
            <span className="font-bold text-white text-xl">
              No pictures found.
            </span>
            <span className="text-white ml-2 text-xl">
              Add your first picture now...
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyPictures
