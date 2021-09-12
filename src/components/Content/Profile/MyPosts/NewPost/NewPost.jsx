import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;

    props.updateNewPostText(text);
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
      <button onClick={addPost}>Отправить</button>
    </div>
  );
};

export default NewPost;
