import {
  DeleteOutlined,
  DesktopOutlined,
  HeartOutlined
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addFavoriteServicePicture,
  deletePicture
} from "../../../../firebase/functions/UploadActions";
import { updateUserDetailsService } from "../../../../firebase/functions/UserDetailsActions";
import { setUserActiveData } from "../../../../firebase/functions/UsersActiveData";
import { getSettingsList } from "../../../../Redux/Actions/User.actions";
import "../../../../styles/AntdStyles/ImageCard.css";
import { triggerMessage } from "../../../common/SnackBar";

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

  const ActionMap: any = {
    my_pictures: [
      <HeartOutlined onClick={favPictureHandler} key="favourite" />,
      <DesktopOutlined onClick={setCurrentPicture} key="apply" />,
      <DeleteOutlined onClick={deleteMyPicture} key="delete" />
    ],
    fav: [
      <DesktopOutlined onClick={setCurrentPicture} key="apply" />,
      <DeleteOutlined onClick={deleteFav} key="delete" />
    ],
    public: [
      <HeartOutlined onClick={favPictureHandler} key="favourite" />,
      <DesktopOutlined onClick={setCurrentPicture} key="apply" />
    ]
  };

  return (
    <Card
      className="glasshover"
      cover={<img alt="example" src={data.url} />}
      actions={ActionMap[type]}></Card>
  );
};

export default PictureComponent;
