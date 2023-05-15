import { Modal } from "antd";

import Svg from "./Svg";

import "../../styles/AntdStyles/modal.css"

type Props = { Children: any; openModal: any; isOpen: any };

const ModalComponent = (props: any) => {
  const { isOpen, children, onClose, title, footer, closeIcon, width, height } = props;

  const CLOSE_ICON = closeIcon ? closeIcon : <Svg type="close" classNames="my-auto mt-5 rounded-md hover:bg-grey1 p-1 text-white" />
  const FOOTER = footer ? footer : false;

  return (
    <>
      <Modal style={{ "height": `${height}vh` }} title={title} open={isOpen} onCancel={onClose} footer={FOOTER} closeIcon={CLOSE_ICON} width={width}>
          {children}
      </Modal>
    </>
  );
};

export default ModalComponent;
