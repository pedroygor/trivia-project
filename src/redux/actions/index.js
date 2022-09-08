import { getTokenApi } from '../../servicesApi';

export const ACTION_GENERIC = 'ACTION_GENERIC';
export const TOKEN = 'TOKEN';

export const requestActionGeneric = (payload) => ({
  type: ACTION_GENERIC,
  payload,
});

export const tokenAction = (token) => ({
  type: TOKEN,
  token,
});

export const fetchTokenAPI = () => (dispatch) => {
  getTokenApi().then((data) => {
    localStorage.setItem('token', data.token);
    dispatch(tokenAction(data.token));
  });
};
