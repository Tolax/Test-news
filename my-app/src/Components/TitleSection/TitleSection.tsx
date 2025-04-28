import { data } from "../../store/data";
import { Typography, Flex, } from "antd";
import { GlobalOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";
import { capitalize } from "../../HelpFunctions/formatDate";

import './style.css'

const { Link, Title } = Typography;

export default function TitleSection() {
  return (
    <>
      <Title style={{ color: "#1e90ff" }} level={3}>
        {data.TI}
      </Title>
      <Flex align="center" gap={"20px"}>
        <Link className="text-size" href={data.URL} underline>
          <span
            style={{
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <GlobalOutlined className="icon" />
            {data.DOM}
          </span>
        </Link>
        <div className="text-size">{data.CNTR}</div>
        <Flex align="center">
          <BookOutlined className="icon" />
          <p className="text-size">{capitalize(data.LANG)}</p>
        </Flex>
        <Flex>
          <UserOutlined className="icon" />
          <p className="text-size">
            {data.AU.length > 0 ? data.AU.join(", ") : "Anonymous"}
          </p>
        </Flex>
      </Flex>
    </>
  );
}
