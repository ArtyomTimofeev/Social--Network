import react from 'react';
import s from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <NewPost />
      {postsElements}
    </div>
  );
};

export default MyPosts;
