import { AuthAPI } from '../api/api';

const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};

export const setAuthUsersData = (id, email, login) => ({
  type: SET_USERS_DATA,
  data: { id, email, login },
});
export const getAuthUsersDataTK = () => (dispatch) => {
  AuthAPI.getAuthMe().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUsersData(id, email, login));
    }
  });
};

export default authReducer;
