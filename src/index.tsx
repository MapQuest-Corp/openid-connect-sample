import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import "./index.css";
import App from "./App";
import { msalConfig } from "./authConfig";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

const msalInstance = new PublicClientApplication(msalConfig);

const getBasename = (path: string): string =>
  path.substring(0, path.lastIndexOf("/"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename(window.location.pathname)}>
      <QueryClientProvider client={queryClient}>
        <MsalProvider instance={msalInstance}>
          <App />
        </MsalProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
