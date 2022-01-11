import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = ({ isAuth, login, logoutTK }) => {
  return (
    <header className={s.header}>
      <img src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg" />
      <div className={s.authBlock}>
        <p>
          {isAuth ? (
            <div>
              <div>{login}</div>
              <button onClick={logoutTK}>Log Out</button>
            </div>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </p>
      </div>
    </header>
  );
};

export default Header;
