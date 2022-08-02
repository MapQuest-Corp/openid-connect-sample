import React, { FC } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const UnauthenticatedRoute: FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AuthenticatedTemplate>
        <Navigate to="/" replace />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        {children || <Outlet />}
      </UnauthenticatedTemplate>
    </>
  );
};

export default UnauthenticatedRoute;
