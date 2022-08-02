import ZipCodeFailed from "components/organisms/ZipCodeFailed";
import ZipCodeSuccess from "components/organisms/ZipCodeSuccess";
import React, { FC } from "react";
import { ZipCodeResponse } from "types/zipCodeResponse";

const ZipCodeResult: FC<Pick<ZipCodeResponse, "results">> = ({ results }) => {
  return (
    <div>
      {results != null ? (
        <ZipCodeSuccess results={results} />
      ) : (
        <ZipCodeFailed />
      )}
    </div>
  );
};

export default ZipCodeResult;
