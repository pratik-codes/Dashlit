import React from "react";
import SvgButton from "../common/button/SvgButton";
import SettingsModal from "./SettingsModal";

const SettingsDropdown = ({
  setOpenSettings,
  openSettings
}: {
  setOpenSettings: any;
  openSettings: boolean;
}) => {
  function closeModal() {
    setOpenSettings(false);
  }

  function openModal() {
    setOpenSettings(true);
  }
  return (
    <div>
      <div onClick={() => setOpenSettings(!openSettings)}>
        <SvgButton type="settings" position="bottom-0 left-0" />
      </div>
      <SettingsModal
        isOpen={openSettings}
        closeModal={closeModal}
        openModal={openModal}
      />
    </div>
  );
};

export default SettingsDropdown;
