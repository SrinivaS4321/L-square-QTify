import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";

import Card from "../Card/Card";

function Songs({ songs = [], genres = [] }) {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div style={{ padding: "32px" }}>
      <h2>Songs</h2>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={selectedGenre}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All" value="all" />

          {genres.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
            />
          ))}
        </Tabs>
      </Box>

      <Carousel
        data={filteredSongs}
        renderComponent={(song) => (
          <Card
            image={song.image}
            title={song.title}
            likes={song.likes}
            follows={song.follows}
            type="song"
          />
        )}
      />
    </div>
  );
}

export default Songs;