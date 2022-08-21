import { BrowserUtils } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { initialize } from "modules/profileModule";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

const Logout: FC = () => {
  const { instance } = useMsal();
  const dispatch = useDispatch();

  const getBasename = (path: string): string =>
    path.substring(0, path.lastIndexOf("/"));

  useEffect(() => {
    dispatch(initialize());
    void instance.logoutRedirect({
      account: instance.getActiveAccount(),
      onRedirectNavigate: () => !BrowserUtils.isInIframe(),
      postLogoutRedirectUri: getBasename(window.location.href),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instance]);

  return <h5>Logoutします...</h5>;
};

export default Logout;
