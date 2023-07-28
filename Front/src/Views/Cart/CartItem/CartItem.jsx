/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  addProduct,
  deleteProduct,
  getCart,
} from '../../../redux/actions/cartActions';
import styles from './CartItem.module.CSS';

const CartItem = ({product, cartId}) => {
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
      // dispatch(addProduct(cartId, id_inventory, newQuantity));
    }
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      const newQuantity = selectedQuantity - 1;
      setSelectedQuantity(newQuantity);
      // dispatch(addProduct(cartId, id_inventory, newQuantity));
    }
  };

  const handleDeleteProduct = (idProduct) => {
    dispatch(deleteProduct(cartId, idProduct));
  };
  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    // Solo si selectedQuantity es diferente de CarritoInventarios.cant, dispatch para actualizar el producto
    if (selectedQuantity !== CarritoInventarios.cant) {
      dispatch(addProduct(cartId, id_inventory, selectedQuantity));
    }
  }, [selectedQuantity]);
  return (
    <div className={styles.product_container}>
      {image && <img src={image[0]} alt={article_name} />}
      <p className={styles.article_name}>{article_name}</p>
      <div className={styles.stock_box}>
        <button onClick={decrementQuantity} disabled={selectedQuantity === 1}>-</button>
        <span>{selectedQuantity}</span>
        <button onClick={incrementQuantity} disabled={selectedQuantity >= stock}>+</button>
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
