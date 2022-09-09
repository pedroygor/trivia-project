import { getTokenApi } from '../../services/servicesApi';

export const USER = 'USER';
export const TOKEN = 'TOKEN';

export const requestUser = (name, email) => ({
  type: USER,
  name,
  email,
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
