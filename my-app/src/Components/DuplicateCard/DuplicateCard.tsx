import React from "react";
import { Card, Tag, Dropdown, Menu, Typography, Flex } from "antd";
import {
  InfoCircleOutlined,
  CloseCircleOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { formatDate } from "../../HelpFunctions/formatDate";
import { DuplicateCardProps } from "../../Types/News";

import "./style.css";

const { Link, Title } = Typography;

const DuplicateCard: React.FC<DuplicateCardProps> = ({
  item,
  tagColor,
  dataReach,
  dataSent,
  dataDOM,
  dataAU,
}) => {
  const { day, month, year } = formatDate(item.DP);

  const menu = <Menu items={[{ key: "1", label: "some info idk" }]} />;

  return (
    <Card key={item.url} className="cart-dublicates">
      <Flex className="card-header" justify="space-between">
        <Flex gap={"large"}>
          <p>
            <span style={{ color: "white" }}>{day}</span> {month} {year}
          </p>
          <Flex gap="small">
            <span style={{ color: "white" }}>{dataReach}K</span>
            <span>Reach</span>
          </Flex>
        </Flex>
        <Flex className="status">
          <Tag style={{ color: "black", fontSize: "15px" }} color={tagColor}>
            {dataSent}
          </Tag>
          <Dropdown overlay={menu} trigger={["hover"]}>
            <InfoCircleOutlined
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </Dropdown>
          <CloseCircleOutlined />
        </Flex>
      </Flex>
      <Title style={{ color: "#1e90ff" }} level={3}>
        {item.title}
      </Title>
      <Flex align="center" gap={"20px"}>
        <Link className="text-size" href={item.url} underline>
          <span
            style={{
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <GlobalOutlined className="icon" />
            {dataDOM}
          </span>
        </Link>
        <div className="text-size">{item.CNTR}</div>
        <Flex>
          <UserOutlined className="icon" />
          <p className="text-size">
            {dataAU.length > 0 ? dataAU.join(", ") : "Anonymous"}
          </p>
        </Flex>
      </Flex>
    </Card>
  );
};

export default DuplicateCard;
