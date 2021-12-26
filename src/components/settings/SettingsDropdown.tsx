import React, { useState } from "react";
import SvgButton from "../button/SvgButton";
import SettingsModal from "./SettingsModal";

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("open settings modal", isOpen);
        }}>
        <SvgButton type="settings" position="bottom-0 left-0" />
      </div>
      <SettingsModal
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
    </div>
  );
};

export default SettingsDropdown;
