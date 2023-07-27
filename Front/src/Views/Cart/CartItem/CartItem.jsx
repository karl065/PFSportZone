import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/actions/cartActions";
import styles from "./CartItem.module.css";

const CartItem = ({ product, cartId }) => {
  const dispatch = useDispatch();
  const {
    id_inventory,
    article_name,
    selling_price,
    stock,
    image,
    CarritoInventarios,
  } = product;

  const handleDeleteProduct = async (idProduct) => {
    await dispatch(deleteProduct(cartId, idProduct));
  };

  return (
    <div className={styles.product_container}>
      {image && <img src={image[0]} alt={article_name} />}
      <p onClick={() => handleDeleteProduct(id_inventory)}>Delete</p>
      <div className={styles.stock_box}>
        <button>-</button>
        <span>{CarritoInventarios.cant}</span>
        <button>+</button>
      </div>
      <h3>{article_name}</h3>
      <p>Price per unit: ${selling_price}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default CartItem;
