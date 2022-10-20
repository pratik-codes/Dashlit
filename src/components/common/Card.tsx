import { ElevatedCard } from "@cred/neopop-web/lib/components";
import React from "react";

const Card = (props: any) => {
  const { Children } = props;

  return (
    <div className="h-full w-full">
      <ElevatedCard
        backgroundColor="white"
        edgeColors={{
          bottom: "black",
          right: "black"
        }}
        style={{ height: "100%" }}>
        {Children}
      </ElevatedCard>
    </div>
  );
};

export default Card;
