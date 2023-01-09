import yagoApi from "..";
import { createNewLegalEntityUrl } from "../apiUrls";

export const createNewLegalEntity = async (legalEntityData, userID) => {
  const payload = {...legalEntityData, user_id: userID};

  const url = createNewLegalEntityUrl();
  const newLegalEntity = await yagoApi.post(url, payload);
  if (newLegalEntity.status === 200) {
    return newLegalEntity;
  } else {
    return false;
  }
};
