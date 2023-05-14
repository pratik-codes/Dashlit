import React, { useEffect, useState } from "react";
import Svg from "../../../common/Svg";
import SwitchComponent from "./SwitchComponent";

interface Props {
  preferenceType: string;
  title: string;
  description: string;
  isToggled: boolean;
  changePreference: any;
}

const PreferenceToggleContent: React.FC<Props> = ({
  preferenceType,
  title,
  description,
  isToggled,
  changePreference
}) => {
  const [isToggle, setIsToggle] = useState(false);

  const changeToggle = (status: boolean) => {
    setIsToggle(status);
    changePreference(preferenceType, status, title, description);
  };

  useEffect(() => {
    if (isToggled) {
      setIsToggle(isToggled);
    }
  }, []);

  return (
    <div className="bg-grey2 rounded-[16px] h-full p-4 border-2 hover:border-purple">
      <div className="flex justify-between">
        <div className="flex justify-between space-x-2 items-center">
          <div className="font-2xl text-white mr-2">
            <Svg type={preferenceType} />
          </div>
          <p className="font-medium text-white text-sm">{description}</p>
        </div>
        <div>
          <SwitchComponent enabled={isToggle} setEnabled={changeToggle} />
        </div>
      </div>
    </div>
  );
};

export default PreferenceToggleContent;
