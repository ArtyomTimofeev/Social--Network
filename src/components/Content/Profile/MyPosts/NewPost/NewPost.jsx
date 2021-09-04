import React from 'react';
import s from './NewPost.module.css';

const NewPost = () => {
  let newPostElement = React.createRef();

  let addPost = (props) => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <textarea ref={newPostElement} placeholder="Введите текст"></textarea>
      <br />
      <button onClick={addPost}>Отправить</button>
    </div>
  );
};

export default NewPost;
