import axios from "axios";

import * as actionTypes from "../constants/ProductConstants";

const url = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`);
    console.log(data);

    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
};
