import { Modal } from "antd";

import Svg from "./Svg";

import "../../styles/AntdStyles/modal.css"

type Props = { Children: any; openModal: any; isOpen: any };

const ModalComponent = (props: any) => {
  const { isOpen, children, onClose, title, footer } = props;

  return (
    <>
      <Modal title={title} open={isOpen} onCancel={onClose} footer={footer ? footer : false } closeIcon={<Svg type="close" classNames="my-auto mt-5 rounded-md hover:bg-grey1 p-1 text-white" />}>
        <div>
          {children}
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
