/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({product}) => {
  const {id_inventory, article_name, selling_price, stock, image} = product;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id_inventory}`);
  };

  return (
    <div onClick={handleCardClick} className={styles.card}>
      <div className={styles.header_card}>
        <h2>{article_name}</h2>
        <img src={image[0]} alt={`${article_name} cover`} />
      </div>
      <div className={styles.info}>
        <p>${selling_price}</p>
        <p>Stock: {stock}</p>
      </div>
    </div>
  );
};

export default Card;
