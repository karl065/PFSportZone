/* eslint-disable react/prop-types */
import axios from 'axios';
import server from '../../Connections/Server';
import {useNavigate} from 'react-router-dom';
import styles from './Card.module.css';
import {useState} from 'react';
import {addProduct} from '../../redux/actions/cartActions';
import {useDispatch, useSelector} from 'react-redux';
import {errorToast, successToast} from '../../helpers/toastNotification';
import {isLoggedIn} from '../../helpers/helperLogin';
import useLocalCart from '../../helpers/useLocalCart';
import { getFavorites } from '../../redux/actions/actions';

const Card = ({product}) => {
  const {id_inventory, article_name, selling_price, stock, image} = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {addToLocalCart} = useLocalCart();
  const cartId = useSelector((state) => state.cart.id);
  const {role, idUser,favoritos} = useSelector((state) => state.app.user);
  const [redirectDetail, setRedirectDetail] = useState(true);

  const handleCardClick = () => {
    if (redirectDetail) navigate(`/product/${id_inventory}`);
  };

  const handleAddToCart = async () => {
    if (!isLoggedIn()) {
      // * Si es un usuario que no esta registrado utiliza el cart de localStorage.
      addToLocalCart(product, 1);
    } else {
      await dispatch(addProduct(cartId, id_inventory, 1));
      successToast('Producto añadido correctamente!', 1500);
    }
  };
  const handleAddToFavorites = async () => {
    try {
      const info = {idUser, id_Inventory: id_inventory};
      await axios.post(`${server.api.baseURL}favorites`, info);
      successToast('Producto añadido correctamente!', 1500);
      dispatch(getFavorites(favoritos));
      console.log(favoritos);
    } catch (error) {
      errorToast(`${error.message}`, 1500);
    }
  };

  return (
    <div onClick={handleCardClick} className={styles.card}>
      <div className={styles.header_card}>
        <p>{article_name}</p>
        <img src={image[0]} alt={`${article_name} cover`} />
      </div>
      <div className={styles.info}>
        <p>${selling_price}</p>
        <p>Stock: {stock}</p>
        {(!isLoggedIn() || role === 'Cliente') && (
          <button
            onMouseOver={() => setRedirectDetail(false)}
            onMouseLeave={() => setRedirectDetail(true)}
            onClick={handleAddToCart}
            className={styles.addCartBtn}
          >
            Añadir al carrito
          </button>
        )}
        {role === 'Cliente' && (
          <button
            onMouseOver={() => setRedirectDetail(false)}
            onMouseLeave={() => setRedirectDetail(true)}
            onClick={handleAddToFavorites}
            className={styles.addCartBtn}
          >
            Añadir a favoritos
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
