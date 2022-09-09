import { TOKEN, USER } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  token: '',
};

function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOKEN:
    return {
      ...state,
      token: action.token,
    };
  case USER:
    return {
      ...state,
      name: action.username,
      email: action.email,
    };
  default:
    return state;
  }
}

export default token;
