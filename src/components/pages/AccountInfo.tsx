import React, { FC } from "react";
import { useMsal } from "@azure/msal-react";
import { Helmet } from "react-helmet";

const AccountInfo: FC = () => {
  const { accounts } = useMsal();

  return (
    <>
      <Helmet>
        <title>Account Info | MapQuest</title>
      </Helmet>
      <h2>アカウント情報</h2>
      <p>name: {accounts[0]?.idTokenClaims?.name}</p>
      <p>email: {accounts[0]?.idTokenClaims?.emails}</p>
      <p>id provider: {accounts[0]?.idTokenClaims?.idp}</p>
    </>
  );
};

export default AccountInfo;
