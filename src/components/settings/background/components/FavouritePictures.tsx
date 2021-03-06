import React, { useEffect, useState } from "react";
import { getFavouritePictureService } from "../../../../firebase/functions/UploadActions";
import Loader from "../../../common/Loader";
import PictureComponent from "./PictureComponent";

const FavouritePictures: React.FC<any> = () => {
  const [favouriteImages, setFavouriteImages] = useState<any>(undefined);

  const getFavouriteImages = async () => {
    const res: any = await getFavouritePictureService();
    setFavouriteImages(res?.data);
  };

  useEffect(() => {
    getFavouriteImages();
  }, []);

  return (
    <div>
      <div className="w-full">
        <div className="p-2 m-2 w-full">
          <div className="grid grid-cols-3 gap-6 w-full mb-10">
            {favouriteImages ? (
              favouriteImages.map((pic: any) => {
                return (
                  <div key={pic?.id} className="full h-full">
                    <PictureComponent
                      data={pic?.data}
                      id={pic?.id}
                      type="fav"
                      refreshPictures={getFavouriteImages}
                    />
                  </div>
                );
              })
            ) : (
              <div>
                <Loader />
              </div>
            )}
          </div>
          {favouriteImages && favouriteImages?.length === 0 && (
            <div className="">
              <span className="font-bold text-gray-900 text-xl">
                No Favourites found.
              </span>
              <span className="text-gray-900 ml-2 text-xl">Add now...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouritePictures;
