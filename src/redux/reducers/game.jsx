import { REQUEST_ADD_SCORE, REQUEST_SHOW_NEXT } from '../actions/game';
import { SAVE_ASKS } from '../actions';

// Esse reducer será responsável por tratar as informações do GAME

const INITIAL_STATE = {
  score: 0,
  questions: [],
  showNext: false,
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
      questions: action.asks,
    };
  case REQUEST_SHOW_NEXT:
    return {
      ...state,
      showNext: action.bool,
    };
  default:
    return state;
  }
}

export default gameReducer;
