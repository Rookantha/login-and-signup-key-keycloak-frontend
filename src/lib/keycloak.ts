import Keycloak from "keycloak-js";

const KEYCLOAK_API_URL = process.env.KEYCLOAK_API_URL;

const keycloak = new Keycloak({
  url: KEYCLOAK_API_URL,
  realm: "contentnexus",
  clientId: "iam-service", // Make sure this matches your Keycloak client ID
});

/*export const initKeycloak = () => {
  return keycloak.init({
    onLoad: "login-required",  // Ensures user is logged in
    checkLoginIframe: false,   // Prevents silent-check-sso error
    silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
  });
};

*/
export default keycloak;
