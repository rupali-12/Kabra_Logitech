export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const addToCartRequest = () => ({
  type: ADD_TO_CART_REQUEST,
});

export const addToCartSuccess = (product) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: product,
});

export const addToCartFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error,
});
