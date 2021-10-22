const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  dialogsData: [
    { id: 1, name: 'John' },
    { id: 2, name: 'Shon' },
    { id: 3, name: 'Evan' },
    { id: 4, name: 'Nick' },
    { id: 5, name: 'Alex' },
    { id: 6, name: 'Mike' },
  ],
  messagesData: [
    { id: 1, message: 'Yo' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'Salam' },
    { id: 4, message: 'Yo yo' },
    { id: 5, message: '123' },
    { id: 6, message: 'Hi' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageBody,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageBody: '',
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.newBody };
    default:
      return state;
  }
};

export default dialogsReducer;

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newBody: body,
});
