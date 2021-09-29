import React from 'react';
import s from './Content.module.css';
import { Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';

const Content = () => {
  return (
    <div className={s.content}>
      <Route component={Profile} path="/profile" />
      <Route component={DialogsContainer} path="/dialogs" />
      <Route component={News} path="/news" />
      <Route component={Music} path="/music" />
      <Route component={UsersContainer} path="/users" />
    </div>
  );
};

export default Content;
