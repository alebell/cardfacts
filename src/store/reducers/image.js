import { FETCH_RANDOM_IMAGE_SUCCESS } from "../actionTypes";

const DEFAULT_STATE = {};

const image = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_RANDOM_IMAGE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default image;
