import { getAsksApi, getTokenApi } from '../../services/servicesApi';

export const USER = 'USER';
export const TOKEN = 'TOKEN';
export const SAVE_ASKS = 'SAVE_ASKS';

export const requestUser = (name, email) => ({
  type: USER,
  name,
  email,
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
    localStorage.setItem('token', data.token);
    dispatch(tokenAction(data.token));
    getAsksApi(data.token)
      .then((questions) => {
        dispatch(saveAsks(questions));
      });
  });
};
