import yagoApi from "..";
import { createNewEntityCodeUrl } from "../apiUrls";

export const createNewEntityCodes = async (nacebelIds, legalEntityId) => {
  try {
    const batch = nacebelIds.map(async (nacebelId) => {
      try {
          const attributes = {
              legal_entity_id: legalEntityId,
              nacebel_code_id: nacebelId,
          };

          const response = await createEntityCode(attributes);
          return response;

      } catch (e) {
        return e;
      }
    });

    const results = await Promise.all(batch);
    console.log(results);
    return results;
  } catch (e) {
    return e;
  }
};

export const createEntityCode = async (attributes) => {
  const url = createNewEntityCodeUrl();
  try {
    const request = await yagoApi.post(url, attributes);
    return request;
  } catch (e) {
    return e.response;
  }
};
