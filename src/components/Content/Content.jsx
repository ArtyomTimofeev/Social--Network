import React from 'react';
import s from './Content.module.css';
import { Route } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';

const Content = () => {
  return (
    <div className={s.content}>
      <Route component={ProfileContainer} path="/profile/:userId?" />
      <Route component={DialogsContainer} path="/dialogs" />
      <Route component={News} path="/news" />
      <Route component={Music} path="/music" />
      <Route component={UsersContainer} path="/users" />
    </div>
  );
};

export default Content;
