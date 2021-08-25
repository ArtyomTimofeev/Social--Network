import react from "react";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
