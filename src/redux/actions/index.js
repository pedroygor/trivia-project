import { getAsksApi, getTokenApi } from '../../services/servicesApi';

export const USER = 'USER';
export const TOKEN = 'TOKEN';
export const SAVE_ASKS = 'SAVE_ASKS';

export const requestUser = (user) => ({
  type: USER,
  user,
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
    console.log(data.token);
    localStorage.setItem('token', JSON.stringify(data.token));
    dispatch(tokenAction(data.token));
    getAsksApi(data.token)
      .then((questions) => {
        dispatch(saveAsks(questions));
      });
  });
};
