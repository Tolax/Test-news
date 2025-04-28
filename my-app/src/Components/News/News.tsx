import { Card } from "antd";
import HeaderSection from "../HeaderSection/HeaderSection";
import TitleSection from "../TitleSection/TitleSection";
import MainInfoSection from "../MainInfoSection/MainInfoSection";
import Duplicates from "../Duplicates/Duplicates";

import "./style.css";

export default function News() {
  return (
    <Card className="card-news">
      <HeaderSection />
      <TitleSection />
      <MainInfoSection />
      <Duplicates />
    </Card>
  );
}
