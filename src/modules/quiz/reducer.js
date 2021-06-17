import { SET_OPTIONS, SET_QUIZ } from "./actions";

const initialState = {
  quizOptions: null,
  quiz: null,
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return Object.assign({}, state, { quizOptions: action.payload.newOption });
    case SET_QUIZ:
      return Object.assign({}, state, { quiz: action.payload.quiz });
    default:
      return state;
  }
};

export default quiz;
