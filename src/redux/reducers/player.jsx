import { REQUEST_ADD_SCORE } from '../actions/game';
import { USER } from '../actions/index';
// Esse reducer será responsável por tratar as informações do GAME

const INITIAL_STATE = {
  score: 0,
  name: '',
  assertion: '',
  gravatarEmail: '',
};

function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      name: action.user.username,
      email: action.user.email,
    };
  case REQUEST_ADD_SCORE:
    return {
      ...state,
      score: Number(state.score) + Number(action.score),
    };
  default:
    return state;
  }
}

export default gameReducer;
