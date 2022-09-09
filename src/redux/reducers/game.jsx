import { REQUEST_EMAIL } from '../actions/game';

// Esse reducer será responsável por tratar as informações do GAME

const INITIAL_STATE = {
  score: 0,
};

function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_EMAIL:
    return {
      ...state,
    };
  default:
    return state;
  }
}

export default gameReducer;
