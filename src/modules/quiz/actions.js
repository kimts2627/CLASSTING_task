export const SET_OPTIONS = "quiz/SET_OPTIONS";
export const SET_QUIZ = "quiz/SET_QUIZ";
export const SET_CURRENT_QUIZ = "quiz/SET_CURRENT_QUIZ";

export const setOptions = (newOption) => ({
  type: SET_OPTIONS,
  payload: {
    newOption,
  },
});

export const setQuiz = (quiz) => ({
  type: SET_QUIZ,
  payload: {
    quiz,
  },
});

export const setCurrentQuiz = (idx) => ({
  type: SET_CURRENT_QUIZ,
  payload: {
    idx,
  },
});
