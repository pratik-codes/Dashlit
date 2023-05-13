import { Button as AntButton } from "antd";

import "../../../styles/AntdStyles/Button.css"

const Button = (props: any) => {
  const { children, type = "primary" } = props;

  if(type === "primary") return <AntButton type="primary" {...props}>{children}</AntButton>;
  return <></>
};

export default Button;
