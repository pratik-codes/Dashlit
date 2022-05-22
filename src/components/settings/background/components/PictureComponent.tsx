import { Card } from "antd";
import React from "react";
import Svg from "../../../common/Svg";
import {
  DesktopOutlined,
  DeleteOutlined,
  HeartOutlined
} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

import "../../../../styles/AntdStyles/ImageCard.css";

interface Props {
  data: any;
}

const PictureComponent: React.FC<Props> = ({ data }) => {
  let date = new Date(data.created_at);

  return (
    <Card
      cover={<img alt="example" src={data.url} />}
      actions={[
        <HeartOutlined key="favourite" />,
        <DesktopOutlined key="apply" />,
        <DeleteOutlined key="delete" />
      ]}>
      <Meta
        title={data.name}
        description={"Uploaded at:" + " " + date.toLocaleString()}
      />
    </Card>
  );
};

export default PictureComponent;
