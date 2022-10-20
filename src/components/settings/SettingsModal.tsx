import { Button } from "@cred/neopop-web/lib/components";
import { Tooltip } from "antd";
import React, { useState } from "react";
import { logoutHandler } from "../../firebase/functions/AuthActions";
import Svg from "../common/Svg";
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
      {isOpen && (
        <div className="absolute glasshover h-10/12 inset-0 ml-6 my-16 overflow-hidden w-10/12">
          <div className="w-full">
            <div className="flex justify-between">
              {/* top area */}
              <div className="flex font-bold leading-6 m-8 text-3xl text-gray-900">
                Settings
              </div>
              <Tooltip title="Logout">
                <Button
                  kind="elevated"
                  className="focus:outline-none"
                  style={{ margin: "10px" }}
                  onClick={() => {
                    logoutHandler();
                    window.location.reload();
                  }}>
                  <Svg type="logout" />
                </Button>
              </Tooltip>
            </div>
            {/* left side */}
            <div className="flex">
              <div className="h-full w-2/12">
                <Sidebar setView={setView} />
              </div>
              <div className="h-screen m-0 overflow-auto w-10/12">
                <CatergoryContent type={view} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsModal;
