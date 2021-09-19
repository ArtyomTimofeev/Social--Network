import React from 'react';

import s from './MyPosts.module.css';
import NewPostContainer from './NewPost/NewPostContainer';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <NewPostContainer />
      {postsElements}
    </div>
  );
};

export default MyPosts;
