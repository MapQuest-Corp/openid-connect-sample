import React, { FC } from "react";
import { Link, List, ListItem, ListItemText } from "@mui/material";
import HomeButton from "components/molecules/HomeButton";
import { Helmet } from "react-helmet";

const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About | MapQuest</title>
      </Helmet>
      <h2>会社概要</h2>
      <p>株式会社マップクエスト</p>
      <p>平成 4 年 2 月 （1992年）</p>
      <p>代表取締役会長：佐藤紀世久</p>
      <p>代表取締役社長：佐藤亮介</p>
      <p>
        GIS開発キット 「MapQuest」
        の開発と販売。GISコンサルティングや、開発キットを活かした顧客向けソリューションやパッケージの開発。
      </p>
      <p>関連サイト:</p>
      <List>
        <ListItem>
          <ListItemText>
            <Link href="https://www.mapquestasia.com/" target="_blank">
              MapQuestアジア（タイ・バンコク）
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link href="https://qreat.tech/" target="_blank">
              公式情報メディア「Qreat」
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link href="https://www.mapquest.co.jp/mqd" target="_blank">
              高機能GISエンジン「MQD」(SDK)
            </Link>
          </ListItemText>
        </ListItem>
      </List>
      <HomeButton />
    </>
  );
};

export default About;
