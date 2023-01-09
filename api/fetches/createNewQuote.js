import yagoApi from "..";
import { createNewQuoteUrl } from "../apiUrls";

export const createNewQuote = async (legalEntityID) => {
  const payload = {
    legal_entity_id: legalEntityID,
  }

  const url = createNewQuoteUrl();
  const newQuote = await yagoApi.post(url, payload);
  if (newQuote.status === 200) {
    return newQuote;
  } else {
    return false;
  }
};
