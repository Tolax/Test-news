import { Flex, Tag, Dropdown, Menu } from "antd";
import { data } from "../../store/data";
import { formatDate } from "../../HelpFunctions/formatDate";
import { CloseCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import './style.css'

export default function HeaderSection() {
  const { day, month, year } = formatDate(data.DP);
  const tagColor = data.SENT === "negative" ? "#f50" : "#87d068";

  const trafficCountries = data.TRAFFIC.sort((a, b) => b.count - a.count).map(
    (country, index) => (
      <Flex gap={"4px"} key={index}>
        {country.value}{" "}
        <span style={{ color: "white" }}>
          {(country.count * 100).toFixed(0)}%
        </span>
      </Flex>
    )
  );

  const menu = (
    <Menu
      items={[
        { key: "1", label: "some info idk" },
      ]}
    />
  );
  return (
    <Flex className="card-header" justify="space-between">
      <Flex gap={"large"}>
        <p>
          <span style={{ color: "white" }}>{day}</span> {month} {year}
        </p>
        <Flex gap="small">
          <span style={{ color: "white" }}>{data.REACH}K</span>
          <span>Reach</span>
        </Flex>
        <Flex gap="3px">
          <span>Top Traffic:</span>
          {trafficCountries}
        </Flex>
      </Flex>
      <Flex className="status">
        <Tag style={{ color: "black", fontSize: "15px" }} color={tagColor}>
          {data.SENT}
        </Tag>
        <Dropdown overlay={menu} trigger={["hover"]}>
          <InfoCircleOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Dropdown>
        <CloseCircleOutlined />
      </Flex>
    </Flex>
  );
}
