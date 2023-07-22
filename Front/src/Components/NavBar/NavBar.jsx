import {Link, useLocation} from 'react-router-dom';
import {SearchBar} from '../index';
import styles from './NavBar.module.css';

const NavBar = () => {
  const location = useLocation();

  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <nav className={styles.nav}>
      {location.pathname === '/' ? (
        <Link to="/about">About us</Link>
      ) : (
        <>
          <Link to="/">SPORTZONE</Link>
        </>
      )}
      {location.pathname !== '/' && <SearchBar />}
      <ul className={styles.nav_list}>
        <li>
          <Link to="/home">Catalog</Link>
        </li>
        {token ? (
          <li>
            <Link onClick={logout} to={'/'}>
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </>
        )}
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
