import { useState } from "react";
import { Button, Flex } from "antd";
import {
  highlightKeywordsInText,
  getDisplayedText,
} from "../../HelpFunctions/formatDate";
import { data } from "../../store/data";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./style.css";

export default function MainInfoSection() {
  const [showFullText, setShowFullText] = useState(false);
  const [activeKeyWord, setActiveKeyWord] = useState<string | null>(null);

  const highlightActiveKeywordInText = (text: string): string => {
    if (activeKeyWord) {
      const regex = new RegExp(`(${activeKeyWord})`, "gi");
      return text.replace(
        regex,
        `<span style="background-color: yellow; color: black; border-radius: 4px ">$1</span>`
      );
    }
    return text;
  };

  return (
    <>
      <div style={{ marginTop: "20px", color: "white", fontSize: "20px" }}>
        <div
          style={{ marginTop: "20px", color: "white", fontSize: "20px" }}
          dangerouslySetInnerHTML={{
            __html: highlightActiveKeywordInText(
              highlightKeywordsInText(
                getDisplayedText(data.HIGHLIGHTS, showFullText),
                data.KW.map((k) => k.value)
              )
            ),
          }}
        />
        {!showFullText ? (
          <button className="show-button" onClick={() => setShowFullText(true)}>
            Show More
            <DownOutlined className="icon" style={{ color: "#1e90ff" }} />
          </button>
        ) : (
          <button
            className="show-button"
            onClick={() => setShowFullText(false)}
          >
            Show less
            <UpOutlined className="icon" style={{ color: "#1e90ff" }} />
          </button>
        )}
      </div>

      <Flex className="key-words">
        {data.KW.map((item) => (
          <div
            key={item.value}
            className="key-word"
            onMouseEnter={() => setActiveKeyWord(item.value)}
            onMouseLeave={() => setActiveKeyWord(null)}
          >
            <span>{item.value}</span>
            <span style={{ color: "white" }}> {item.count}</span>
          </div>
        ))}
      </Flex>
      <Button href={data.URL} className="btn" type="default">
        <span className="btn-text">Original Source</span>
      </Button>
    </>
  );
}
