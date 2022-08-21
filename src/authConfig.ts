/* eslint-disable no-console */
import { LogLevel } from "@azure/msal-browser";

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_signupsignin",
    forgotPassword: "B2C_1_reset_password",
    editProfile: "B2C_1_profileediting",
  },
  authorities: {
    signUpSignIn: {
      authority:
        "https://mapquestcorp.b2clogin.com/mapquestcorp.onmicrosoft.com/B2C_1_signupsignin",
    },
    forgotPassword: {
      authority:
        "https://mapquestcorp.b2clogin.com/mapquestcorp.onmicrosoft.com/B2C_1_reset_password",
    },
    editProfile: {
      authority:
        "https://mapquestcorp.b2clogin.com/mapquestcorp.onmicrosoft.com/B2C_1_profileediting",
    },
  },
  authorityDomain: "mapquestcorp.b2clogin.com",
};

export const msalConfig = {
  auth: {
    clientId: "bfca7d80-3491-485c-9b36-f5011edc585b",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (
        level: unknown,
        message: unknown,
        containsPii: unknown
      ) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            // eslint-disable no-console
            console.error(message);

            return;
          case LogLevel.Info:
            // eslint-disable no-console
            console.info(message);

            return;
          case LogLevel.Verbose:
            // eslint-disable no-console
            console.debug(message);

            return;
          case LogLevel.Warning:
            // eslint-disable no-console
            console.warn(message);

            return;
          default:
            // eslint-disable no-console
            console.log(message);
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["openid"],
};

export const silentRequest = {
  scopes: ["openid", "profile"],
};
