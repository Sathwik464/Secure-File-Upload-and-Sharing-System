// main.js
import { UserManager } from "https://cdn.jsdelivr.net/npm/oidc-client-ts/+esm";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_AnIEp26rO",
  client_id: "gg75nh2fisjv2jeke57a5hsd4",
  redirect_uri: "http://localhost:8000/upload.html",
  response_type: "code",
  scope: "openid email phone profile"
};

export const userManager = new UserManager({
  ...cognitoAuthConfig,
});

export async function signOutRedirect() {
  const logoutUri = "http://localhost:8000/";
  const cognitoDomain = "https://eu-central-1aniep26ro.auth.eu-central-1.amazoncognito.com";
  const clientId = "gg75nh2fisjv2jeke57a5hsd4";
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
}
