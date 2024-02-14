import { ADD_PRODUCT_REQUEST } from "../actions/productActionTypes";
import { ADD_PRODUCT_FAILURE } from "../actions/productActionTypes";
import { ADD_PRODUCT_SUCCESS } from "../actions/productActionTypes";

const initialState = {
  error: null,
  products: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
