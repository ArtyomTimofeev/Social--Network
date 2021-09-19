import React from 'react';
import s from './MyPosts.module.css';
import NewPostContainer from './NewPost/NewPostContainer';
import Post from './Post/Post';

const MyPosts = (props) => {
  let state = props.store.getState();
  let postsElements = state.profilePage.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <NewPostContainer store={props.store} />
      {postsElements}
    </div>
  );
};

export default MyPosts;
