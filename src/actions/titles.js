import axios from "axios";
import { FETCH_TITLES } from "./actionTypes";

const BASE_URL = "http://localhost:5000/api/posts";

const fetchTitles = (titles) => {
  return {
    type: FETCH_TITLES,
    titles
  };
}

export const fetchTitlesAPI = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${BASE_URL}`);
    return dispatch(fetchTitles(data));
  };
}