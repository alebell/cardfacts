import { FETCH_RANDOM_FACT_SUCCESS } from "../actionTypes";

const DEFAULT_STATE = {};

const fact = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_RANDOM_FACT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default fact;
