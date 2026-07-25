import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Songs from "./components/Songs/Songs";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => res.json())
      .then((data) => setTopAlbums(data));

    fetch("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => res.json())
      .then((data) => setNewAlbums(data));

    fetch("https://qtify-backend.labs.crio.do/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data));

    fetch("https://qtify-backend.labs.crio.do/genres")
      .then((res) => res.json())
      .then((data) => setGenres(data.data));
  }, []);

  return (
    <>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />

      <Hero />

      <Section title="Top Albums" data={topAlbums} />

      <Section title="New Albums" data={newAlbums} />

      <Songs songs={songs} genres={genres} />
    </>
  );
}

export default App;
