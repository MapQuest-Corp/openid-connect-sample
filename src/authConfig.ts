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
            console.error(message);

            return;
          case LogLevel.Info:
            console.info(message);

            return;
          case LogLevel.Verbose:
            console.debug(message);

            return;
          case LogLevel.Warning:
            console.warn(message);

            return;
          default:
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
  loginHint: "example@domain.net",
};
