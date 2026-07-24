import { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({
  title,
  data = [],
  type = "album",
  showToggle = true,
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {showToggle && (
          <button
            className={styles.toggle}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
              likes={item.likes}
              type={type}
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={data}
          renderComponent={(item) => (
            <Card
              image={item.image}
              title={item.title}
              follows={item.follows}
              likes={item.likes}
              type={type}
            />
          )}
        />
      )}
    </div>
  );
}

export default Section;