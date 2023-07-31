/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../../redux/actions/cartActions";
import styles from "./CartItem.module.css";
import { LoadingSpinner } from "../../../Components/index";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // * Debounce y flag para detectar cunado el usuario dejo de escribir.
  const [stopWriting, setStopWriting] = useState(false);
  const debounceStopWriting = useRef(null);

  const handleChange = (event) => {
    setStopWriting(false);
    clearTimeout(debounceStopWriting.current);
    const { value } = event.target;

    if (value.trim() === "" || value == 0) {
      setError("Al menos una unidad");
    } else if (!/^\d+$/.test(value.trim())) {
      setError("No es un entero");
    } else if (value < 1 || value > stock) {
      setError("Unidades no disponibles");
    } else {
      setError("noerror");
    }

    setSelectedQuantity(value);

    debounceStopWriting.current = setTimeout(() => {
      setStopWriting(true);
    }, 800);
  };

  const updateCart = (newValue) => {
    setStopWriting(false); // ? Para que no se bugee una vez que cambia el input y también spamea el botón y haga doble request.
    setIsLoading(true);
    dispatch(addProduct(cartId, id_inventory, newValue)).then(() =>
      setIsLoading(false)
    );
  };

  // ? Para evitar el desfase del cambio de selectedQuantity declaro una nueva variable "newValue".
  const incrementQuantity = () => {
    const newValue =
      selectedQuantity < stock ? Number(selectedQuantity) + 1 : stock;
    setSelectedQuantity(newValue);
    updateCart(newValue);
    setError("noerror");
  };

  const decrementQuantity = () => {
    const newValue =
      selectedQuantity > 1 && selectedQuantity <= stock
        ? Number(selectedQuantity) - 1
        : stock - 1;

    setSelectedQuantity(newValue);
    updateCart(newValue);
    setError("noerror");
  };

  const handleDeleteProduct = async (idProduct) => {
    // * Esto es para que si el usuario presiona eliminar mientras ya estaba cargando una cantidad
    // * No se bugee y se elimine bien luego de que se elimine el producto.
    clearTimeout(debounceStopWriting.current);
    setStopWriting(false);
    await dispatch(deleteProduct(cartId, idProduct));
  };

  // * Cuando el usuario escriba algo correcto y hayan pasado 800ms desde que dejo de escribir también
  // * Se actualize el monto.
  useEffect(() => {
    if (error === "noerror" && stopWriting) {
      // * Por si dejo 0 zeros a la izquierda, se parsee a entero 0002 => 2.
      setSelectedQuantity(parseInt(selectedQuantity));
      updateCart(selectedQuantity);
    }
  }, [stopWriting, selectedQuantity]);

  return (
    <div className={styles.product_container}>
      {image && <img src={image[0]} alt={article_name} />}
      <p className={styles.article_name}>{article_name}</p>
      {isLoading ? (
        <div className={styles.loading_box}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={styles.stock_container}>
          <div className={styles.stock_box}>
            <button
              onClick={decrementQuantity}
              disabled={selectedQuantity == 1}
            >
              -
            </button>
            <input
              type="text"
              value={selectedQuantity}
              onChange={handleChange}
            />
            <button
              onClick={incrementQuantity}
              disabled={selectedQuantity == stock}
            >
              +
            </button>
          </div>
          {error && error !== "noerror" && (
            <p className={styles.error}>{error}</p>
          )}
        </div>
      )}
      <p className={styles.price_per_amount}>
        ${CarritoInventarios.precioPorCant}
      </p>
      <p className={styles.price_per_unit}>Por unidad: ${selling_price}</p>
      <p className={styles.stockAvailable}>Disponibles: {stock}</p>
      <p
        onClick={() => handleDeleteProduct(id_inventory)}
        className={styles.actions_p}
      >
        Eliminar
      </p>
    </div>
  );
};

export default CartItem;
