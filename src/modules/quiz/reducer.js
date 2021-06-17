import { SET_OPTIONS, SET_QUIZ, SET_CURRENT_QUIZ } from "./actions";

const initialState = {
  quizOptions: null,
  quiz: null,
  currentQuiz: 0,
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return Object.assign({}, state, { quizOptions: action.payload.newOption });
    case SET_QUIZ:
      return Object.assign({}, state, { quiz: action.payload.quiz });
    case SET_CURRENT_QUIZ:
      return Object.assign({}, state, { currentQuiz: action.payload.idx });
    default:
      return state;
  }
};

export default quiz;
