export const SET_RESULT = "results/SET_RESULT";
export const SET_TIMER = "results/SET_TIMER";
export const RESET_RESULT = "results/RESET_RESULT";

export const setResult = (result) => ({
  type: SET_RESULT,
  payload: {
    result,
  },
});

export const setTimer = (time) => ({
  type: SET_TIMER,
  payload: {
    time,
  },
});

export const resetResult = () => ({ type: RESET_RESULT });
