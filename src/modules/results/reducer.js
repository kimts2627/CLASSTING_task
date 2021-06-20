import { SET_RESULT } from "./actions";

const initialState = {
  quizResult: [],
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      return Object.assign({}, state, { quizResult: action.payload.result });
    default:
      return state;
  }
};

export default results;
