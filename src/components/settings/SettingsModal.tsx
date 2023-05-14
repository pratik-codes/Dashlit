import { Tooltip } from "antd";
import ModalComponent from "components/common/Modal";
import React, { useState } from "react";
import CatergoryContent from "./components/CatergoryContent";
import Sidebar from "./Sidebar";

interface Props {
  isOpen: boolean;
  closeModal: any;
  openModal: any;
}

const SettingsModal: React.FC<Props> = ({ isOpen, closeModal, openModal }) => {
  const [view, setView] = useState("Preferences");

  return (
    <>
      <ModalComponent isOpen={isOpen} onClose={closeModal} title="Settings" width={1400} height={80}>
      <div className="bg-black rounded-[15px] w-full">
          <div className="w-full">
            {/* left side */}
            <div className="flex">
              <div className="w-2/12">
                <Sidebar setView={setView} view={view} />
              </div>
              <div className="m-0 overflow-auto w-10/12">
                <CatergoryContent type={view} />
              </div>
            </div>
          </div>
        </div>
    </ModalComponent>
    </>
  );
};

export default SettingsModal;
