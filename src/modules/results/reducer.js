import { SET_RESULT } from "./actions";

const initialState = {
  quizResult: {},
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return Object.assign({}, state, { quizOptions: action.payload.newOption });
    default:
      return state;
  }
};

export default quiz;
