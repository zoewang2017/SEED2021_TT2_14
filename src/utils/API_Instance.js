import axios from "axios";

const baseURL =
  "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/";

const apiKey = "Ps1TGitUkS8fV6jlp3ASuab0y4CS6mr59ngEoAU6";

export const axiosInstance = axios.create({
  baseURL,
  //   timeout: 2500,
  headers: {
    //"Content-Type": "application/json",
    // Authorization: `Bearer ${accessToken}`,

    "x-api-key": apiKey,
    "Access-Control-Allow-Origin": "*",
  },
});
