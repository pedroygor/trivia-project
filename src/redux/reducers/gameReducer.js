import { REQUEST_EMAIL } from '../actions/gameActions';

// Esse reducer será responsável por tratar as informações do GAME

const INITIAL_STATE = {
  data: {
    name: 'Antonio, O Sicrano', // string que armazena o nome da pessoa usuária
    score: 0,
    email: 'antoniosicrano@.bol.com.br',
  },
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
