import { AuthAPI } from '../api/api';

const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setAuthUsersData = (id, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  payload: { id, email, login, isAuth },
});

export const getAuthUsersDataTK = () => (dispatch) => {
  AuthAPI.getAuthMe().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUsersData(id, email, login, true));
    }
  });
};

export const loginTK =
  (email, password, rememberMe, setStatus) => (dispatch) => {
    AuthAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUsersDataTK());
      } else {
        setStatus(data.messages);
      }
    });
  };
export const logoutTK = () => (dispatch) => {
  AuthAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUsersData(null, null, null, false));
    }
  });
};
export default authReducer;
