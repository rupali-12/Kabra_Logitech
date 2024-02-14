import { ADD_TO_CART_REQUEST } from "../actions/cartActionTypes";
import { ADD_TO_CART_FAILURE } from "../actions/cartActionTypes";
import { ADD_TO_CART_SUCCESS } from "../actions/cartActionTypes";


const initialState = {
  error: null,
  products: [],
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
