import { Dialog, Transition } from "@headlessui/react";
import { Modal } from "antd";

import Svg from "./Svg";

import "../../styles/AntdStyles/modal.css"

type Props = { Children: any; openModal: any; isOpen: any };

const ModalComponent = (props: any) => {
  const { isOpen, children, onClose, title } = props;

  return (
    <>
      <Modal title={title} open={isOpen} onCancel={onClose} footer={false}>
        {/* {title &&
          <div className="font-gray-900 flex items-center h-14 border-b m-1">
            <h1 className="text-xl font-bold my-auto mx-auto">
              {title}
            </h1>

            <div className="w-8 h-8 close-icon absolute right-0 p-2 border border-metal rounded flex justify-center items-center m-2 hover:text-gray">
              <button onClick={onClose}>
                <Svg type="close" />
              </button>
            </div>
          </div>
        } */}

        <div className="p-6 mt-10">
          {children}
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
