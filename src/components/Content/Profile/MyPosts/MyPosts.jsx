import react from 'react';
import s from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <NewPost />
      <Post message="Hello man, I wanna smoke" />
      <Post message="Okey, man! I have some G" />
      <Post message="Oh gays! I wanna too" />
    </div>
  );
};

export default MyPosts;
