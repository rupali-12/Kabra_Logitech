import axios from "axios";

import {
  addProductFailure,
  addProductSuccess,
  addProductRequest,
} from "./productActionTypes";

export const addProduct = (productData) => {
  return async (dispatch) => {
    dispatch(addProductRequest());
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addproduct",
        productData
      );
      // console.log("response->>", response.data.product);
      alert("Product Added Successfully");
      dispatch(addProductSuccess(response.data));
    } catch (error) {
      dispatch(addProductFailure(error.message));
    }
  };
};

// List Products
export const addToCart = (product) => {};
