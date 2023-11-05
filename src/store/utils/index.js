export const buildActionCreator = (type) => (payload) => ({
  type,
  payload,
});

export const buildRequestActionTypes = (type, namespace) => ({
  REQUEST: `${namespace}/${type}_REQUEST`,
  SUCCESS: `${namespace}/${type}_SUCCESS`,
  FAILURE: `${namespace}/${type}_FAILURE`,
});

export const buildEventActionCreator =
  (type) =>
  (name = "", data = {}) => ({
    type,
    event: { name, data },
  });

const mapTypeToRequest = (type) => ({
  request: buildActionCreator(`${type}_REQUEST`),
  success: buildActionCreator(`${type}_SUCCESS`),
  failure: buildActionCreator(`${type}_FAILURE`),
});

export const buildRequestCreator =
  (type, requestCallback) => (payload) => (dispatch) =>
    requestCallback({ request: mapTypeToRequest(type), payload, dispatch });
