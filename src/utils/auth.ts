// utils/auth.ts
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const storeTokens = (accessToken: string, refreshToken: string) => {
  // Store tokens in cookies with expiration times
  Cookies.set("access_token", accessToken, { expires: 1, secure: true }); // expires in 1 day
  Cookies.set("refresh_token", refreshToken, { expires: 7, secure: true }); // expires in 7 days
};

export const getAccessToken = (): string | null => {
  // Retrieve the access token from cookies
  return Cookies.get("access_token") || null;
};

export const isAuthenticated = (): boolean => {
  // Check if access token is available and not expired
  const token = getAccessToken();
  if (!token) return false;

  try {
    const decoded: any = jwtDecode(token); // Decode the token to get the payload
    return decoded.exp * 1000 > Date.now(); // Check if token is expired by comparing exp time with current time
  } catch (error) {
    return false;
  }
};

export const logout = () => {
  // Remove the tokens from cookies and redirect to the login page
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  window.location.href = "/login"; // Redirect to login page
};
