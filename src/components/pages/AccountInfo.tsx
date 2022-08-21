import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { RootState } from "rootReducer";
import { msalInstance } from "index";

const AccountInfo: FC = () => {
  const { currentName } = useSelector((state: RootState) => state.profile);
  const accounts = msalInstance.getAllAccounts();

  return (
    <>
      <Helmet>
        <title>Account Info | MapQuest</title>
      </Helmet>
      <h2>アカウント情報</h2>
      <p>name: {currentName || accounts[0]?.idTokenClaims?.name}</p>
      <p>
        email:{" "}
        {accounts[0]?.idTokenClaims?.emails ||
          accounts[1]?.idTokenClaims?.emails}
      </p>
      <p>id provider: {accounts[0]?.idTokenClaims?.idp}</p>
    </>
  );
};

export default AccountInfo;
