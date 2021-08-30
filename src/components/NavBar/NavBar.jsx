import react from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/messages">Messages</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
