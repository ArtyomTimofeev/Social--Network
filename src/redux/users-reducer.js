const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    {
      id: 1,
      imgUrl:
        'https://w7.pngwing.com/pngs/891/105/png-transparent-computer-icons-user-others-miscellaneous-face-service.png',
      followed: false,
      fullName: 'Artyom',
      status: 'React dev',
      location: {
        city: 'Ekaterinburg',
        country: 'Russia',
      },
    },
    {
      id: 2,
      imgUrl:
        'https://w7.pngwing.com/pngs/891/105/png-transparent-computer-icons-user-others-miscellaneous-face-service.png',
      followed: true,
      fullName: 'Alex',
      status: 'Angular dev',
      location: {
        city: 'Moscow',
        country: 'Russia',
      },
    },
    {
      id: 3,
      imgUrl:
        'https://w7.pngwing.com/pngs/891/105/png-transparent-computer-icons-user-others-miscellaneous-face-service.png',
      followed: false,
      fullName: 'Nick',
      status: 'Vue dev',
      location: {
        city: 'Saint-P',
        country: 'Russia',
      },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export default usersReducer;
