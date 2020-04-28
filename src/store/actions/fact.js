import axios from "axios";
import { FETCH_RANDOM_FACT_SUCCESS } from "../actionTypes";

export const fetchRandomFactSuccess = payload => {};

export const fetchRandomFact = () => {
  return dispatch => {
    return axios
      .get("https://cat-fact.herokuapp.com/facts/random")
      .then(response => {
        dispatch({
          type: FETCH_RANDOM_FACT_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
