import { BrowserUtils } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import React, { FC, useEffect } from "react";

const Logout: FC = () => {
  const { instance } = useMsal();

  const getBasename = (path: string): string =>
    path.substring(0, path.lastIndexOf("/"));

  useEffect(() => {
    console.log(getBasename(window.location.href));
    void instance.logoutRedirect({
      account: instance.getActiveAccount(),
      onRedirectNavigate: () => !BrowserUtils.isInIframe(),
      postLogoutRedirectUri: getBasename(window.location.href),
    });
  }, [instance]);

  return <h5>Logoutしています...</h5>;
};

export default Logout;
