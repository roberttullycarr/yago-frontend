import yagoApi from "..";
import { createNewUserUrl } from "../apiUrls";

export const createNewUser = async (userData) => {

  const url = createNewUserUrl();
  const newUserData = await yagoApi.post(url, userData);
  if (newUserData.status === 200) {
    return newUserData;
  } else {
    return false;
  }
};
