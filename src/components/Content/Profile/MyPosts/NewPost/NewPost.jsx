import react from 'react';
import s from './NewPost.module.css';

const NewPost = () => {
  return (
    <div>
      <textarea placeholder="Введите текст"></textarea>
      <br />
      <button>Отправить</button>
    </div>
  );
};

export default NewPost;
