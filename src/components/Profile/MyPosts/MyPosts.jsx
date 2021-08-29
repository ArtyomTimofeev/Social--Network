import react from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea placeholder="Enter text"></textarea>
        <button>Отправить</button>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
