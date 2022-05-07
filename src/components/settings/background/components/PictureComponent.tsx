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
  console.log(data.metaData);

  let date = new Date(data.metaData.timeCreated);

  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={data.url} />}
      actions={[
        <HeartOutlined key="favourite" />,
        <DesktopOutlined key="apply" />,
        <DeleteOutlined key="delete" />
      ]}>
      <Meta
        title={data.metaData.name}
        description={"Uploaded at:" + " " + date.toLocaleString()}
      />
    </Card>
  );
};

export default PictureComponent;
