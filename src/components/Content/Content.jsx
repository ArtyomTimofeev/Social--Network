import React from 'react';
import s from './Content.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import DialogsContainer from './Dialogs/DialogsContainer';

const Content = (props) => {
  return (
    <div className={s.content}>
      <Route
        render={() => <DialogsContainer store={props.store} />}
        path="/dialogs"
      />

      <Route render={() => <Profile store={props.store} />} path="/profile" />
      <Route component={Music} path="/music" />
      <Route component={News} path="/news" />
    </div>
  );
};

export default Content;
