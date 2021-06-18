export const SET_RESULT = "results/SET_RESULT";

export const setResult = (result) => ({
  type: SET_RESULT,
  payload: {
    result,
  },
});
