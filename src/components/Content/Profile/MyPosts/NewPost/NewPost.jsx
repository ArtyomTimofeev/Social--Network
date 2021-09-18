import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../../redux/profile-reducer';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;

    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        placeholder="Введите текст"
        value={props.newPostText}
      ></textarea>
      <br />
      <button onClick={addPost}>Опубликовать</button>
    </div>
  );
};

export default NewPost;
