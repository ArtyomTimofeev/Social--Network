import react from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <img src="https://vk-wiki.ru/wp-content/uploads/2019/04/male-user-profile-picture.png"></img>
      <p>{props.message}</p>
    </div>
  );
};

export default Post;
