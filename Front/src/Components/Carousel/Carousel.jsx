import { useState } from "react";
import ChevronLeft from "../../assets/chevron-left.svg";
import ChevronRight from "../../assets/chevron-right.svg";
import styles from "./Carousel.module.css";

export default function Carousel({ slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className={styles.container}>
      <div
        className={styles.slides_box}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((url) => (
          <img key={url} src={url} alt="Product image" className={styles.image} />
        ))}
      </div>

      {slides.length > 1 && (
        <div className={styles.buttons_container}>
        <button onClick={prev}>
          <img src={ChevronLeft} alt="Chevron left" />
        </button>
        <button onClick={next}>
          <img src={ChevronRight} alt="Chevron Right" />
        </button>
      </div>
      )}

      <div className={styles.slider}>
        <div className={styles.slider_buttons}>
          {slides.map((_, i) => (
            <div key={i}
              className={`${styles.general} ${
                curr === i ? styles.padding : styles.opacity
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
