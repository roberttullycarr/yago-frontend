export const createNewLoginUrl = () => `api/v1/authentication/create`;
export const createNewSessionUrl = (loginToken) => `api/v1/sessions/create?login_token=${loginToken}`;

export const getNacebelCodesUrl = () => `api/v1/nacebel_codes`;
export const createNewUserUrl = () => `api/v1/users`;
export const createNewLegalEntityUrl = () => `api/v1/legal_entities`;
export const createNewEntityCodeUrl = () => `api/v1/entity_codes`;
export const createNewQuoteUrl = () => `api/v1/quotes`;

export const getUserLegalEntitiesUrl = (userID) => `api/v1/legal_entities?user_id=${userID}`;
export const getLegalEntityQuotesUrl = (legalEntityID) => `api/v1/quotes?legal_entity_id=${legalEntityID}`