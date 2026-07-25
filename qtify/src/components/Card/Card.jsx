import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, title, follows, likes, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />

        <Chip
          label={type === "song" ? `${likes} Likes` : `${follows} Follows`}
          size="small"
          className={styles.chip}
        />
      </div>

      <div className={styles.bottom}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default Card;