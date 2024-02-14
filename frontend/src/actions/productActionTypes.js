export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

export const addProductRequest = () => ({
  type: ADD_PRODUCT_REQUEST,
});

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error,
});
