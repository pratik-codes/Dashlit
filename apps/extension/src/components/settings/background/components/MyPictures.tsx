import React from 'react'
import PictureComponent from './PictureComponent'

// Shadcn UI components  
import { Skeleton } from "@/components/ui/skeleton"

interface Props {
     data: any
     refreshPictures: any
}

const MyPictures: React.FC<Props> = ({ data, refreshPictures }) => {
     const isLoading = !data;

     return (
          <div className="h-full w-full">
               <div className="w-full h-full">
                    {isLoading ? (
                         <div className="grid grid-cols-2 gap-6 w-full pb-6">
                              {[...Array(4)].map((_, index) => (
                                   <Skeleton
                                        key={index}
                                        className="w-full h-40 rounded-lg dark:bg-gray-800"
                                   />
                              ))}
                         </div>
                    ) : data.length > 0 ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pb-6">
                              {data.map((pic: any) => (
                                   <div key={pic?.id} className="w-full">
                                        <PictureComponent
                                             data={pic?.data}
                                             id={pic?.id}
                                             type="my_pictures"
                                             refreshPictures={refreshPictures}
                                        />
                                   </div>
                              ))}
                         </div>
                    ) : (
                         <div className="flex flex-col items-center justify-center h-40 text-center">
                              <p className="text-xl font-medium dark:text-gray-300">
                                   No pictures found
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                   Add your first picture now...
                              </p>
                         </div>
                    )}
               </div>
          </div>
     )
}

export default MyPictures
