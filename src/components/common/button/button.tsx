import { Button as CredButton } from "@cred/neopop-web/lib/components";
import React from "react";

const Button = (props: any) => {
  const { children } = props;
  const childrenProps = { ...props, colorMode: "dark" };
  return <CredButton {...childrenProps}>{children}</CredButton>;
};

export default Button;
