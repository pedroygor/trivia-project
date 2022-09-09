import { getAsksApi, getTokenApi } from '../../servicesApi';

export const ACTION_GENERIC = 'ACTION_GENERIC';
export const TOKEN = 'TOKEN';
export const SAVE_ASKS = 'SAVE_ASKS';

export const requestActionGeneric = (payload) => ({
  type: ACTION_GENERIC,
  payload,
});

export const tokenAction = (token) => ({
  type: TOKEN,
  token,
});

export const saveAsks = (asks) => ({
  type: SAVE_ASKS,
  asks,
});

export const fetchTokenAPI = () => (dispatch) => {
  getTokenApi().then((data) => {
    localStorage.setItem('token', JSON.stringify(data.token));
    dispatch(tokenAction(data.token));
    getAsksApi(data.token)
      .then((questions) => dispatch(saveAsks(questions.results)));
  });
};
