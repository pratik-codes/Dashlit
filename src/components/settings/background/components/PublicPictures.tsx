import React, { useEffect, useState } from "react";
import { getAllPublicPicturesService } from "../../../../firebase/functions/UploadActions";
import Loader from "../../../common/Loader";
import PictureComponent from "./PictureComponent";

const PublicPictures = () => {
  const [publicPictures, setPublicPictures] = useState<any>(undefined);

  const getPublicPictures = async () => {
    const res = await getAllPublicPicturesService();
    console.log(res);
    setPublicPictures(res?.data);
  };

  useEffect(() => {
    getPublicPictures();
  }, []);

  return (
    <div>
      <div className="w-full">
        <div className="p-2 m-2 w-full">
          <div className="grid grid-cols-3 gap-6 w-full mb-10">
            {publicPictures ? (
              publicPictures.map((pic: any) => {
                return (
                  <div key={pic?.id} className="full h-full">
                    <PictureComponent
                      data={pic?.data}
                      id={pic?.id}
                      type="public"
                      refreshPictures={getPublicPictures}
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
          {publicPictures && publicPictures?.length === 0 && (
            <div className="">
              <span className="font-bold text-white text-xl">
                No Pictures found.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicPictures;
