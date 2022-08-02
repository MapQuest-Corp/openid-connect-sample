import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { loginRequest } from "authConfig";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";

const Login: FC = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress } = useMsal();

  if (inProgress === InteractionStatus.None && !isAuthenticated) {
    void instance.loginRedirect(loginRequest);
  }

  return (
    <>
      <Helmet>
        <title>Login | MapQuest</title>
      </Helmet>
      <h5>ログインします...</h5>
    </>
  );
};

export default Login;
