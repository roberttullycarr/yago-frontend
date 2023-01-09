import axios from "axios";

export const baseURL =
  process.env.NODE_ENV === "production" ? "https://fathomless-beach-09511.herokuapp.com" : "http://localhost:3000";

const yagoApi = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

yagoApi.defaults.baseURL = baseURL;
yagoApi.defaults.headers.get["Content-Type"] = "application/json";
yagoApi.defaults.headers.post["Content-Type"] = "application/json";
yagoApi.defaults.headers.patch["Content-Type"] = "application/json";

export default yagoApi;
