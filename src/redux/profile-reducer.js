import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: 'Hello man!', likesCount: 46 },
    { id: 2, message: '123', likesCount: 42 },
    { id: 3, message: '345', likesCount: 41 },
  ],
  profile: null,
  profileStatusText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_PROFILE_STATUS:
      return { ...state, profileStatusText: action.profileStatusText };
    default:
      return state;
  }
};
export default profileReducer;

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setProfileStatus = (profileStatusText) => ({
  type: SET_PROFILE_STATUS,
  profileStatusText,
});

export const setUsersProfileTK = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getProfileStatusTK = (userId) => (dispatch) => {
  profileAPI.getProfileStatus(userId).then((profileStatus) => {
    dispatch(setProfileStatus(profileStatus));
  });
};

export const updateProfileStatusTK = (profileStatus) => (dispatch) => {
  profileAPI.updateProfileStatus(profileStatus).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setProfileStatus(profileStatus));
    }
  });
};
