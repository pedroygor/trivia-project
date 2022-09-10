import { REQUEST_ADD_SCORE } from '../actions/game';
import { SAVE_ASKS } from '../actions';

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
  case SAVE_ASKS:
    return {
      ...state,
      questions: [...action.asks],
    };
  default:
    return state;
  }
}

export default gameReducer;
