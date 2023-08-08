/* eslint-disable no-unused-vars */
import {useState} from 'react';
import Styles from './Review.module.css';
import {Rating} from '@micahlt/react-simple-star-rating';

const Review = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (number) => {
    setRating(number);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.texto}>
        <p>
          ¿Que
          <br />
          te <br />
          parecio <br />
          tu <br />
          producto?🤔
          <br />
          cuentanos!!!...
        </p>
      </div>

      <div className={Styles.form}>
        <span>
          <label htmlFor="stars">califica tu producto:</label>
          <Rating onClick={handleRating} />
        </span>

        <span>
          <label htmlFor="comentario">danos tu opinion:</label>
          <textarea
            name="comentario"
            id="comentario"
            cols="50"
            rows="10"
          ></textarea>
        </span>
        <button>enviar</button>
      </div>
    </div>
  );
};

export default Review;
