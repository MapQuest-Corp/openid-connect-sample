import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { b2cPolicies } from "authConfig";
import { useMsal } from "@azure/msal-react";

const EditProfile: FC = () => {
  const { instance } = useMsal();

  const getBasename = (path: string): string =>
    path.substring(0, path.lastIndexOf("/"));

  void instance.loginRedirect({
    scopes: ["openid"],
    redirectUri: getBasename(window.location.href),
    redirectStartPage: getBasename(window.location.href),
    ...b2cPolicies.authorities.editProfile,
  });

  return (
    <>
      <Helmet>
        <title>EditProfile | MapQuest</title>
      </Helmet>
      <h5>プロフィール編集ページに移行します...</h5>
    </>
  );
};

export default EditProfile;
