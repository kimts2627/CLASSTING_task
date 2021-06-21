import { SET_OPTIONS, SET_QUIZ, SET_CURRENT_QUIZ, RESET_QUIZ } from "./actions";

const initialState = {
  quizOptions: {},
  quiz: [
    {
      category: "",
      type: "",
      difficulty: "",
      question: "",
      correct_answer: "",
      incorrect_answers: ["", "", ""],
    },
  ],
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
    case RESET_QUIZ:
      return initialState;
    default:
      return state;
  }
};

export default quiz;
