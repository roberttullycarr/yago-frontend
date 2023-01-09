import axios, { Axios } from "axios";
import yagoApi from "..";
import { getLegalEntityQuotesUrl } from "../apiUrls";

export const getLegalEntityQuotes = async (legalEntityID) => {
  const config = {
    headers: {
      Authorization: localStorage.auth_token,
    }
  }; 
  
  const url = getLegalEntityQuotesUrl(legalEntityID);
  const legalEntityQuotes = await yagoApi.get(url, config);

  if (legalEntityQuotes.status === 200) {
    return legalEntityQuotes;
  } else {
    return false;
  }
};
