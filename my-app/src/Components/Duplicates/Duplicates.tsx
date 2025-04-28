import { Button, Flex, Typography } from "antd";
import { data } from "../../store/data";
import DuplicateCard from "../DuplicateCard/DuplicateCard";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title } = Typography;

export default function Duplicates() {
  const [allDuplicates, setAllDuplicates] = useState(false);
  const [sortByNewest, setSortByNewest] = useState(true); // true = свежие сначала

  const sortedDuplicates = [...data.duplicates].sort((a, b) => {
    const dateA = new Date(a.DP).getTime();
    const dateB = new Date(b.DP).getTime();
    return sortByNewest ? dateB - dateA : dateA - dateB;
  });

  const duplicatesToShow = allDuplicates
    ? sortedDuplicates
    : sortedDuplicates.slice(0, 1);

  return (
    <>
      <Flex justify="space-between">
        <Title
          style={{
            marginTop: "20px",
            color: "grey",
            fontSize: "24px",
            borderColor: "blue",
          }}
        >
          Duplicates: {data.duplicates.length}
        </Title>

        <Button
          type="text"
          block
          onClick={() => setSortByNewest(!sortByNewest)}
          style={{
            marginTop: "20px",
            backgroundColor: "transparent",
            width: "200px",
            color: "grey",
          }}
        >
          {!sortByNewest ? (
            <Flex gap={"10px"}>
              <span style={{ color: "grey", fontSize: "20px" }}>
                By Relevance
              </span>
              <DownOutlined className="icon" />
            </Flex>
          ) : (
            <Flex gap={"10px"}>
              <span style={{ color: "grey", fontSize: "20px" }}>
                By Relevance
              </span>
              <UpOutlined className="icon" />
            </Flex>
          )}
        </Button>
      </Flex>

      {duplicatesToShow.map((item) => {
        const tagColor = item.SENT === "negative" ? "#f50" : "#87d068";

        return (
          <DuplicateCard
            key={item.url}
            item={item}
            tagColor={tagColor}
            dataReach={item.REACH}
            dataSent={item.SENT}
            dataDOM={item.DOM}
            dataAU={item.AU}
          />
        );
      })}

      <Button
        type="default"
        block
        onClick={() => setAllDuplicates(!allDuplicates)}
        style={{
          marginTop: "20px",
          backgroundColor: "transparent",
          height: "40px",
        }}
      >
        {allDuplicates ? (
          <Flex align="center" gap={"5px"}>
            <UpOutlined className="icon" />
            <span style={{ color: "white", fontSize: "20px" }}>
              Hide Duplicates
            </span>
          </Flex>
        ) : (
          <Flex align="center" gap={"5px"}>
            <DownOutlined className="icon" />
            <span style={{ color: "white", fontSize: "20px" }}>
              View Duplicates
            </span>
          </Flex>
        )}
      </Button>
    </>
  );
}
