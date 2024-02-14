import axios from "axios";

import {
  addToCartFailure,
  addToCartSuccess,
  addToCartRequest,
} from "./cartActionTypes";

// Add to cart
// cartActions.js

export const addToCart = (productId, quantity) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/api/addtocart", {
        productId,
        quantity,
      });
      dispatch({ type: "ADD_TO_CART_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "ADD_TO_CART_FAILURE", payload: error.message });
    }
  };
};

export const updateQuantity = (productId, newQuantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: {
      productId,
      newQuantity,
    },
  };
};
