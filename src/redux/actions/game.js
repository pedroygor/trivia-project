export const REQUEST_ADD_SCORE = 'REQUEST_ADD_SCORE';

export const requestScore = (score) => ({
  type: REQUEST_ADD_SCORE,
  score,
});

export const REQUEST_SHOW_NEXT = 'REQUEST_SHOW_NEXT';

export const requestShowBtnNext = (bool) => ({
  type: REQUEST_SHOW_NEXT,
  bool,
});
