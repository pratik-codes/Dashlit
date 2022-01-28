import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetailsService } from "../../../firebase/functions/UserDetailsActions";
import { getSettingsList } from "../../../Redux/Actions/User.actions";
import { RootStore } from "../../../Redux/Store";
import Loader from "../../common/Loader";
import { user_setting } from "../../data/data";
import PreferenceToggleContent from "./PreferenceToggleContent";

const Preference = () => {
  const dispatch = useDispatch();

  const SettingsDataRedux: any = useSelector(
    (state: RootStore) => state.userSettingsData
  );

  let settingsData =
    SettingsDataRedux.data && JSON.parse(SettingsDataRedux.data.settings);

  const changePreference = (preferenceType: string, status: boolean) => {
    const objIndex = settingsData.findIndex(
      (obj: any) => obj.type === preferenceType
    );
    settingsData[objIndex].isToggled = status;
    const data = SettingsDataRedux.data;
    data.settings = JSON.stringify(settingsData);
    updateUserDetailsService(data);
    dispatch(getSettingsList());
  };

  return (
    <div className=" h-full">
      <div className="grid grid-cols-3 gap-4">
        {settingsData ? (
          settingsData.map((setting: any) => {
            return (
              <div key={setting.type}>
                <PreferenceToggleContent
                  preferenceType={setting.type}
                  isToggled={setting.isToggled}
                  title={setting.name}
                  description={setting.description}
                  changePreference={changePreference}
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
    </div>
  );
};

export default Preference;
