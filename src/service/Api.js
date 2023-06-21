import axios from "axios";

const url = "http://localhost:8000";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api");
  }
};

export const authenticateLogIn = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (error) {
    console.log("Error while calling login api", error);
    return error.response;
  }
};
