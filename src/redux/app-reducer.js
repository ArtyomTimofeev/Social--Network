import { getAuthUsersDataTK } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const setInitializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeAppTK = () => (dispatch) => {
  dispatch(getAuthUsersDataTK()).then(() => {
    dispatch(setInitializedSuccess());
  });
};

export default appReducer;
