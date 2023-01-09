import axios, { Axios } from "axios";
import yagoApi from "..";
import { getUserLegalEntitiesUrl } from "../apiUrls";

export const getUserLegalEntities = async (userID) => {
  const config = {
    headers: {
      Authorization: localStorage.auth_token,
    }
  }; 
  
  const url = getUserLegalEntitiesUrl(userID);
  const legalEntities = await yagoApi.get(url, config);

  if (legalEntities.status === 200) {
    return legalEntities;
  } else {
    return false;
  }
};
