import axios from "axios";
import { FETCH_RANDOM_IMAGE_SUCCESS } from "../actionTypes";

export const fetchRandomImageSuccess = payload => {
  return {
    type: FETCH_RANDOM_IMAGE_SUCCESS,
    payload
  };
};

export const fetchRandomImage = () => {
  return dispatch => {
    return axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then(response => {
        const url =
          response && response.data && response.data[0] && response.data[0].url
            ? response.data[0].url
            : "";
        dispatch({
          type: FETCH_RANDOM_IMAGE_SUCCESS,
          payload: url
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
