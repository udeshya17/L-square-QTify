import React, { useEffect } from "react";
import NavBar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { useState } from "react";
import Section from "./components/Section/Section";
import styles from "./App.module.css";
import FilterTabs from "./components/FilterTab/FilterTab";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [allSongsData, setAllSongsData] = useState([]);

  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
  };

  const generateNewAlbumData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumData(data);
  };

  const generateAllSongsData = async () => {
    const data = await fetchSongs();
    setAllSongsData(data);
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className={styles.albumSectionWrapper}>
        <Section title="Top Albums" data={topAlbumData} type="album" />
        <Section title="New Albums" data={newAlbumData} type="album" />
        <hr />
        <div>
          <h3 className={styles.tabs}>Songs</h3>
        </div>

        <FilterTabs data={allSongsData} />
      </div>
    </>
  );
}

export default App;


// import React from "react";
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero'
// import Card from './components/Card/Card'

// function App() {
//   return (
//     <div>
//     <Navbar />
//     <Hero />
//     <Card />
//     </div>
//   );
// }

// export default App;
