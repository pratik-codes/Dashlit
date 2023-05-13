import { Button as AntButton } from "antd";

import "../../../styles/AntdStyles/Button.css"

const Button = (props: any) => {
  const { children, type = "primary", size = "large" } = props;

  return <AntButton type={type} size={size} {...props}>{children}</AntButton>;
};

export default Button;
