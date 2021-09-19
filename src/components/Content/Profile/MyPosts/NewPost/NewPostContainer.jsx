import { connect } from 'react-redux';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../../redux/profile-reducer';
import NewPost from './NewPost';

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
