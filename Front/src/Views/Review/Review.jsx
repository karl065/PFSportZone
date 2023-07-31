/* eslint-disable no-unused-vars */
import {useState} from 'react';
import Styles from './Review.module.css';
import {Rating} from '@micahlt/react-simple-star-rating';

const Review = () => {

  const [formReview, setFormReview] = useState({
    rating: 0,
    comment: ''
  })

  const handleRating = (number) => {
<<<<<<< HEAD
    setFormReview({
      rating: number,
      comment: ''
    })
}
  console.log(formReview);
=======
    setRating(number);
  };
>>>>>>> 63332ae699339503c861e33443d4004f770662fe
  return (
    <div className={Styles.container}>
      <div className={Styles.texto}>
      <p>
        ¿Que<br />
        te <br />
        parecio <br />
        tu <br />
        producto?🤔<br />
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
        <textarea name="comentario" id="comentario" cols="50" rows="10"></textarea>
      </span>
        <button>enviar</button>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 63332ae699339503c861e33443d4004f770662fe

export default Review;
