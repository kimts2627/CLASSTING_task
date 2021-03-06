import { SET_RESULT, SET_TIMER, RESET_RESULT } from "./actions";

const initialState = {
  quizResult: [],
  time: 0,
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      return Object.assign({}, state, { quizResult: action.payload.result });
    case SET_TIMER:
      return Object.assign({}, state, { time: action.payload.time });
    case RESET_RESULT:
      return initialState;
    default:
      return state;
  }
};

export default results;
