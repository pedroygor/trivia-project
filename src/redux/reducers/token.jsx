import { TOKEN } from '../actions';

const INITIAL_STATE = {
  login: {
    name: '',
    email: '',
    token: '',
  },
};

function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOKEN:
    return {
      ...state,
      token: action.token,
    };
  default:
    return state;
  }
}

export default token;
