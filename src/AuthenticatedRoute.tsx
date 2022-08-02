import React, { FC } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { Navigate, Outlet } from "react-router-dom";
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "authConfig";

type Props = {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
};

const AuthenticatedRoute: FC<Props> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress } = useMsal();

  if (inProgress === InteractionStatus.None && !isAuthenticated) {
    void instance.loginRedirect(loginRequest);
  }

  return (
    <>
      <AuthenticatedTemplate>{children || <Outlet />}</AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Navigate to="/Login" replace />
      </UnauthenticatedTemplate>
    </>
  );
};

export default AuthenticatedRoute;
