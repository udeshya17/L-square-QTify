import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input 
                type="text" 
                className={styles.searchInput} 
                placeholder="Search an album of your choice" 
            />
            <button className={styles.searchButton}>
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
}

export default SearchBar;
