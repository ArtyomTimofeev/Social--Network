import React from 'react';
import s from './Content.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';

const Content = (props) => {
  return (
    <div className={s.content}>
      <Route
        render={() => (
          <Dialogs
            messagesData={props.messagesData}
            dialogsData={props.dialogsData}
          />
        )}
        path="/dialogs"
      />

      <Route
        render={() => <Profile postsData={props.postsData} />}
        path="/profile"
      />
      <Route component={Music} path="/music" />
      <Route component={News} path="/news" />
    </div>
  );
};

export default Content;
