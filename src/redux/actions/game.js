export const REQUEST_ADD_SCORE = 'REQUEST_ADD_SCORE';
export const requestScore = (score) => ({
  type: REQUEST_ADD_SCORE,
  score,
});

export const REQUEST_SAVE_QUESTIONS = 'REQUEST_SAVE_QUESTIONS';
export const requestSaveQuestions = (array) => ({
  type: REQUEST_SAVE_QUESTIONS,
  array,
});
