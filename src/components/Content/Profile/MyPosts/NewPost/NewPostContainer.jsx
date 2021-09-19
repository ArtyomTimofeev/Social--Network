import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../../redux/profile-reducer';
import NewPost from './NewPost';

const NewPostContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <NewPost
      updateNewPostText={updateNewPostText}
      addPost={addPost}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default NewPostContainer;
