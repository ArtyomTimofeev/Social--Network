import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hello man, I wanna smoke', likesCount: 46 },
      { id: 2, message: 'Okey, man! I have some G', likesCount: 42 },
      { id: 3, message: 'Oh gays! I wanna too', likesCount: 41 },
    ],
    newPostText: '',
  },
  dialogsPage: {
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
      { id: 5, message: 'Wtf?!' },
      { id: 6, message: 'Hi' },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
