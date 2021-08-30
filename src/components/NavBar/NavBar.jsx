import react from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" activeClassName={s.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={s.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={s.active}>
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
