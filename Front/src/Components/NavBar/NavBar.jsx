import {Link, useLocation} from 'react-router-dom';
import {SearchBar} from '../index';
import styles from './NavBar.module.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      {location.pathname === '/' ? (
        <Link to="/about">About us</Link>
      ) : (
        <Link to="/home">Home</Link>
      )}
      {location.pathname !== '/' && <SearchBar />}
      <ul className={styles.nav_list}>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/register">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

// import React from 'react'

// const NavBar = () => {
//   return (
//     <div>NavBar</div>
//   )
// }

// export default NavBar;
