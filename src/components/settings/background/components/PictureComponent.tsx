import {
  DeleteOutlined,
  DesktopOutlined,
  HeartOutlined
} from "@ant-design/icons";
import { Card, Image } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

import {
  addFavoriteServicePicture,
  deletePicture
} from "../../../../firebase/functions/UploadActions";
import { updateUserDetailsService } from "../../../../firebase/functions/UserDetailsActions";
import { setUserActiveData } from "../../../../firebase/functions/UsersActiveData";
import { getSettingsList } from "../../../../redux/Actions/User.actions";
import triggerMessage from "../../../common/SnackBar";

import "../../../../styles/AntdStyles/ImageCard.css";

interface Props {
  data: any;
  id: string;
  type: string;
  refreshPictures: any;
}

const PictureComponent: React.FC<Props> = ({
  data,
  id,
  type,
  refreshPictures
}) => {
  let date = new Date(data.created_at);

  const dispatch = useDispatch();

  let settings_data = localStorage.getItem("user-settings");
  const settings_data_parsed = settings_data && JSON.parse(settings_data);

  const favPictureHandler = () => {
    addFavoriteServicePicture(id, data?.url, data?.name, data?.created_at);
  };

  const deleteFav = async () => {
    triggerMessage("deleting picture...", "success");
    await deletePicture(id, data.name, "fav");
    triggerMessage("Picture deleted.", "success");
    refreshPictures();
  };

  const deleteMyPicture = async () => {
    triggerMessage("deleting picture...", "success");
    await deletePicture(id, data.name, "my_pictures");
    refreshPictures();
    triggerMessage("Picture deleted.", "success");
  };

  const setCurrentPicture = async () => {
    await setUserActiveData({ background_url: data?.url }, "picture");
    // set the Enable public picture to false as the user want to use their own picture as background
    const settings = JSON.parse(settings_data_parsed?.settings);
    const objIndex = settings.findIndex(
      (obj: any) => obj.type === "picture-source-settings"
    );
    if (settings[objIndex].isToggled === true) {
      settings[objIndex].isToggled = false;
      settings_data_parsed["settings"] = JSON.stringify(settings);
      if (settings_data_parsed) {
        await updateUserDetailsService(settings_data_parsed);
      }
      dispatch(getSettingsList());
    }
  };

  const ACTION_CLASS = "flex justify-center items-center text-white bg-grey2 mx-auto text-lg hover:bg-grey1 rounded-[15px] h-10 w-14 cursor-pointer"
  const ActionMap: any = {
    my_pictures: [
      <HeartOutlined className={ACTION_CLASS} onClick={favPictureHandler} key="favourite" />,
      <DesktopOutlined className={ACTION_CLASS} onClick={setCurrentPicture} key="apply" />,
      <DeleteOutlined className={ACTION_CLASS} onClick={deleteMyPicture} key="delete" />
    ],
    fav: [
      <DesktopOutlined className={ACTION_CLASS} onClick={setCurrentPicture} key="apply" />,
      <DeleteOutlined className={ACTION_CLASS} onClick={deleteFav} key="delete" />
    ],
    public: [
      <HeartOutlined className={ACTION_CLASS} onClick={favPictureHandler} key="favourite" />,
      <DesktopOutlined className={ACTION_CLASS} onClick={setCurrentPicture} key="apply" />
    ]
  };

  const ACTIONS = ActionMap[type];

  return (
    <div className="bg-grey2 rounded-[18px] aspect-[16/10]">
      <Image alt="Image Loading Error" src={data.url} preview={false} className="flex justify-center items-center text-white rounded-t-[18px] aspect-[16/9]" loading="lazy"/>
      <div className="flex justify-between px-2 py-1">
        {ACTIONS.map((action: any) => (
          <>
            {action}
          </>
        ))};
      </div>
    </div>
  );
};

export default PictureComponent;
