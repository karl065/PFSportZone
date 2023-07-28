/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../../redux/actions/cartActions";
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

  const [selectedQuantity, setSelectedQuantity] = useState(
    CarritoInventarios.cant
  );

  const incrementQuantity = () => {
    if (selectedQuantity < stock) {
      const newQuantity = selectedQuantity + 1;
      setSelectedQuantity(newQuantity);
      dispatch(addProduct(cartId, id_inventory, newQuantity));
    }
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      const newQuantity = selectedQuantity - 1;
      setSelectedQuantity(newQuantity);
      dispatch(addProduct(cartId, id_inventory, newQuantity));
    }
  };

  const handleDeleteProduct = async (idProduct) => {
    await dispatch(deleteProduct(cartId, idProduct));
  };

  return (
    <div className={styles.product_container}>
      {image && <img src={image[0]} alt={article_name} />}
      <p className={styles.article_name}>{article_name}</p>
      <div className={styles.stock_box}>
        <button onClick={decrementQuantity}>-</button>
        <span>{selectedQuantity}</span>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <p className={styles.price_per_amount}>
        ${CarritoInventarios.precioPorCant}
      </p>
      <p className={styles.price_per_unit}>Price per unit: ${selling_price}</p>
      <p className={styles.stockAvailable}>Available: {stock}</p>
      <p
        onClick={() => handleDeleteProduct(id_inventory)}
        className={styles.actions_p}
      >
        Delete
      </p>
      <p className={styles.actions_p}>Buy Now</p>
    </div>
  );
};

export default CartItem;
