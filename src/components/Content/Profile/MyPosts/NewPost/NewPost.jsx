import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let onAddPostClick = () => {
    props.addPost();
  };

  let onPostTextChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <textarea
        onChange={onPostTextChange}
        ref={newPostElement}
        placeholder="Введите текст"
        value={props.newPostText}
      ></textarea>
      <br />
      <button onClick={onAddPostClick}>Опубликовать</button>
    </div>
  );
};

export default NewPost;
