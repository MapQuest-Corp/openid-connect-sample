import React, { FC } from "react";
import HomeButton from "components/molecules/HomeButton";
import { Helmet } from "react-helmet";

const Training: FC = () => {
  return (
    <>
      <Helmet>
        <title>Training | MapQuest</title>
      </Helmet>
      <h2>本研修の目的</h2>
      <p>
        ・MapQuestの開発メインストリームであるWeb,
        クラウド開発を行える人材育成を目指す。
      </p>
      <p>
        ・2か月後にMQPlatformStudioや交通安全プロジェクトなどで1人月として数えらえる状態になるのが期待値
      </p>
      <p>
        ※過去にASP.NET
        Coreを使用したSSRのWebアプリケーションの開発を行った経験があるため、本研修では主にフロントエンドの学習を行うことを計画。
      </p>
      <HomeButton />
    </>
  );
};

export default Training;
