/* eslint-disable no-unused-vars */
import axios from 'axios';
import {useState} from 'react';
import Styles from './Review.module.css';
import {Rating} from '@micahlt/react-simple-star-rating';
import server from '../../Connections/Server';

const Review = () => {
  const id_inventory = "cb01";
  const idUser = Number(localStorage.getItem('idUser'));
  const [formReview, setFormReview] = useState({
    idUser: idUser,
    id_inventory: id_inventory,
    message: '',
    evaluation: 0
  })

  const handleRating = (number) => {
    setFormReview({
    idUser: idUser,
    id_inventory: id_inventory,
    message: '',
    evaluation: number
    })
}

const handleComment = (e) => {
  setFormReview({
    ...formReview,
    [e.target.name] : e.target.value
  })
}
const handleSubmitReview = async() => {
  try {
    const post= await axios.post(`${server.api.baseURL}review`, formReview);
    console.log(post.data);
  } catch (error) {
    console.log(error);
  }
};

  console.log(formReview);
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
        <label htmlFor="comment">danos tu opinion:</label>
        <textarea 
        name="message" 
        id="comment" 
        cols="50" 
        rows="10" 
        value={formReview.comment}
        onChange={handleComment}></textarea>
      </span>
        <button onClick={handleSubmitReview}>enviar</button>
      </div>

      <div className={Styles.products}>
        Tus productos:
      </div>
    </div>
  );
}

export default Review;
