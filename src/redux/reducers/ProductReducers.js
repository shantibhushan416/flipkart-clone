import * as actionTypes from "../constants/ProductConstants";

export const getProductsReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
