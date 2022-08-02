import React, { FC } from "react";
import { useQuery } from "react-query";
import ZipCodeResult from "components/templates/ZipCodeResult";
import { ZipCodeResponse } from "types/zipCodeResponse";

type ZipCodeProps = {
  zipCode: string;
};

const fetchZipCode = async (zipCode: string) => {
  const response = await fetch(
    `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`
  );

  return response.json();
};

// react-queryを使ったデータ取得を採用
const EnhancedZipCodeResult: FC<ZipCodeProps> = ({ zipCode }) => {
  const response = useQuery("zipCode", () => fetchZipCode(zipCode));
  const { results } = response.data as ZipCodeResponse;

  return <ZipCodeResult results={results} />;
};

export default EnhancedZipCodeResult;
