import axios from "axios";
import * as actionTypes from "../constants/CartConstants";

const url = "http://localhost:8000";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/product/${id}`);
    console.log(data);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => (dispatch) => {
  try {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
  } catch (error) {}
};
