import yagoApi from "..";
import { createNewSessionUrl } from "../apiUrls";

export const createNewSession = async (loginToken) => {

  const url = createNewSessionUrl(loginToken);
  const newSession = await yagoApi.get(url);
  if (newSession.status === 200) {
    return newSession;
  } else {
    return false;
  }
};