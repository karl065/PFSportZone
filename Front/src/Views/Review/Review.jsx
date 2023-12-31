/* eslint-disable no-unused-vars */
import axios from 'axios';
import {useState} from 'react';
import Styles from './Review.module.css';
import {Rating} from '@micahlt/react-simple-star-rating';
import server from '../../Connections/Server';
import {useNavigate, useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
import {useSelector} from 'react-redux';

const Review = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const id_inventory = id;
  const idUser = useSelector((state) => state.app.user.idUser);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formReview, setFormReview] = useState({
    idUser: idUser,
    id_inventory: id_inventory,
    message: '',
    evaluation: 0,
  });

  const handleRating = (number) => {
    setFormReview({
      idUser: idUser,
      id_inventory: id_inventory,
      message: '',
      evaluation: number,
    });
  };
  const handleReset = () => {
    setFormReview({
      idUser: idUser,
      id_inventory: id_inventory,
      message: '',
      evaluation: 0,
    });
  };

  const handleComment = (e) => {
    setFormReview({
      ...formReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitReview = () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      axios
        .post(`${server.api.baseURL}review`, formReview)
        .then(() => {
          Swal.fire('¡Buen trabajo!', 'Review creada exitosamente', 'success');
          handleReset();
          navigate(`/product/${id}`);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error creando una review. Intente nuevamente.',
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error creando una review. Intente nuevamente.',
      });
      setIsSubmitting(false);
    }
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
          <label htmlFor="stars">Califica tu producto:</label>
          <Rating onClick={handleRating} />
        </span>

        <span>
          <label htmlFor="comment">Danos tu opinión:</label>
          <textarea
            name="message"
            id="comment"
            cols="35"
            rows="10"
            value={formReview.comment}
            onChange={handleComment}
          ></textarea>
        </span>
        <button onClick={handleSubmitReview}>Enviar</button>
      </div>
    </div>
  );
};

export default Review;
