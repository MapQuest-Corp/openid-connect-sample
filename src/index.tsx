import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { msalConfig } from "./authConfig";
import store from "./store";

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

// eslint-disable-next-line import/prefer-default-export
export const msalInstance = new PublicClientApplication(msalConfig);

const getBasename = (path: string): string =>
  path.substring(0, path.lastIndexOf("/"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename(window.location.pathname)}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MsalProvider instance={msalInstance}>
            <App />
          </MsalProvider>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
