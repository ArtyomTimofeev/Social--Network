import React from 'react';
import s from './Content.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';

const Content = () => {
  return (
    <BrowserRouter>
      <div className={s.content}>
        <Route component={Dialogs} path="/messages" />
        <Route component={Profile} path="/profile" />
        <Route component={Music} path="/music" />
        <Route component={News} path="/news" />
      </div>
    </BrowserRouter>
  );
};

export default Content;
