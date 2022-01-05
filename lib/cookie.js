import { serialize } from "cookie";

const TOKEN_NAME = "api-token";
// token maintains for 8 hours: 60 seconds * 60 minutes * 8 hours = 28800 seconds
const MAX_AGE = 60 * 60 * 8;

function createCookie(name, data, options = {}) {
  return serialize(name, data, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    secure: process.env.NODE_ENV === "production",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    ...options,
  });
}

function setTokenCookie(res, token) {
  res.setHeader("Set-Cookie", [
    createCookie(TOKEN_NAME, token),
    createCookie("authed", true, { httpOnly: false }),
  ]);
}

function getAuthToken(cookies) {
  return cookies[TOKEN_NAME];
}

export default handler = {setTokenCookie, getAuthToken};