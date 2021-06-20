export const SET_RESULT = "results/SET_RESULT";
export const SET_TIMER = "results/SET_TIMER";

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
