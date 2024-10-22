export const BASE_URL = process.env.REACT_APP_BACKEND_ENV === "live" ? "" : "https://e794-45-249-80-23.ngrok-free.app/api/v1/";

export const SOCKET_BASE_URL =
  process.env.REACT_APP_BACKEND_ENV === "live" ? "" : "";

export const STRIPE_API_KEY =
  process.env.REACT_APP_BACKEND_ENV === "live" ? "" : "";

export const SOCIAL_CREDENTIALS = {
  facebookAppId: process.env.REACT_APP_BACKEND_ENV === "live" ? "" : "",
  googleClientId: process.env.REACT_APP_BACKEND_ENV === "live" ? "" : "",
};

export const AWS_IMAGE_BUCKET_NAME =
  process.env.REACT_APP_BACKEND_ENV === "live" ? "" : "";

export const DEFAULT_PROFILE_PICTURE =
  require("../assets/img/default-profile.svg").default;
