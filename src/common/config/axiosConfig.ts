import Cookies from "js-cookie";
export const axiosConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${
        typeof window !== "undefined" && Cookies.get("kaya_token")
      }`,
      "Content-Type": "application/json"
    },
  };
  