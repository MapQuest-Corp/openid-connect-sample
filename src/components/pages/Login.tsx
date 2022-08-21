import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useMsal } from "@azure/msal-react";

const Login: FC = () => {
  const { instance } = useMsal();

  const getBasename = (path: string): string =>
    path.substring(0, path.lastIndexOf("/"));

  void instance.loginRedirect({
    scopes: ["openid"],
    redirectUri: getBasename(window.location.href),
    redirectStartPage: getBasename(window.location.href),
  });

  return (
    <>
      <Helmet>
        <title>Login | MapQuest</title>
      </Helmet>
      <h5>Loginします...</h5>
    </>
  );
};

export default Login;
