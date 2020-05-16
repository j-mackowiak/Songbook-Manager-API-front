import { LOG_IN, LOG_OUT } from "../constants";

const initialState = {
  user: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === LOG_IN) {
    return { ...state, user: action.payload }
  } else if (action.type === LOG_OUT) {
    return { ...state, user: {} }
  };
  return state;
};

export default rootReducer;