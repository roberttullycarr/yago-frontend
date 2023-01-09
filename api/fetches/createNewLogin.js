import yagoApi from "..";
import { createNewLoginUrl } from "../apiUrls";

export const createNewLogin = async (payload) => {

  const url = createNewLoginUrl();
  const newLogin = await yagoApi.post(url, payload);
  if (newLogin.status === 200) {
    return newLogin;
  } else {
    return false;
  }
};