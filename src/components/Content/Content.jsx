import React, { useEffect } from 'react';
import s from './Content.module.css';
import { Route } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import Login from './Login/Login';
import { connect } from 'react-redux';
import { initializeAppTK } from '../../redux/app-reducer';
import Preloader from '../Common-components/Preloader';

const Content = ({ initialized, initializeAppTK }) => {
  useEffect(() => {
    initializeAppTK();
  }, []);

  if (!initialized) return <Preloader />;
  return (
    <div className={s.content}>
      <Route component={ProfileContainer} path="/profile/:userId?" />
      <Route component={DialogsContainer} path="/dialogs" />
      <Route component={News} path="/news" />
      <Route component={Music} path="/music" />
      <Route component={UsersContainer} path="/users" />
      <Route component={Login} path="/login" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeAppTK })(Content);
