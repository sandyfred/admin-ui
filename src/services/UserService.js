import axios from "axios";
import { ENDPOINT } from "../BackendEndpoint";

export const getUsers = async () => {
  try {
    const res = await axios.get(ENDPOINT);
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};
