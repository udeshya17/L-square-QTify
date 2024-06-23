import React from 'react';
import Logo from '../Logo/Logo';  
import styles from './Navbar.module.css';  
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <SearchBar />
        <Button />
    </nav>
  );
}

export default Navbar;