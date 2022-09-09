import { REQUEST_ADD_SCORE, REQUEST_SAVE_QUESTIONS } from '../actions/game';

// Esse reducer será responsável por tratar as informações do GAME

const INITIAL_STATE = {
  score: 0,
  questions: [],
};

function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_ADD_SCORE:
    return {
      ...state,
      score: action.score + 1,
    };
  case REQUEST_SAVE_QUESTIONS:
    return {
      ...state,
      questions: action.array,
    };
  default:
    return state;
  }
}

export default gameReducer;
