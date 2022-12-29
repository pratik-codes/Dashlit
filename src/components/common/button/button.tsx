import { Button as CredButton } from "@cred/neopop-web/lib/components";
import React from "react";

const Button = (props: any) => {
  const { children } = props;
  return <CredButton {...props}>{children}</CredButton>;
};

export default Button;
