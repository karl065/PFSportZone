/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { useState } from "react";
import { addProduct } from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { successToast } from "../../helpers/toastNotification";

const Card = ({ product }) => {
  const { id_inventory, article_name, selling_price, stock, image } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartId = useSelector((state) => state.cart.id);
  const role = localStorage.getItem("role");
  const [redirectDetail, setRedirectDetail] = useState(true);

  const handleCardClick = () => {
    if (redirectDetail) navigate(`/product/${id_inventory}`);
  };

  const handleAddToCart = async () => {
    await dispatch(addProduct(cartId, id_inventory, 1));
    successToast("Producto añadido correctamente!", 1500);
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
        {role === "Cliente" && (
          <button
            onMouseOver={() => setRedirectDetail(false)}
            onMouseLeave={() => setRedirectDetail(true)}
            onClick={handleAddToCart}
            className={styles.addCartBtn}
          >
            Añadir al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
