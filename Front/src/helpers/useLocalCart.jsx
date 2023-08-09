import { useDispatch, useSelector } from "react-redux";
import { setLocalCart } from "../redux/actions/cartActions";
import { infoToast, successToast } from "./toastNotification";

// * Hook personalizado.
const useLocalCart = () => {
  const localCart = useSelector((state) => state.cart.localCart);
  const dispatch = useDispatch();

  // ? Agregar un producto al carrito
  const addToLocalCart = (product, quantity) => {
    let existingCart = [...localCart];

    const indexExistingProduct = existingCart.findIndex(
      (item) => item.id_inventory === product.id_inventory
    );

    // * Si existe el producto le cambiamos la cantidad
    if (indexExistingProduct !== -1) {
      existingCart[indexExistingProduct].cant = quantity;
      infoToast("Cantidad actualizada correctamente", 300);
    } else {
      // * Si el producto no existe le añadimos la propiedad cant y le añadimos la cantidad
      // * Poniendolo dentro del carrito.
      product.cant = quantity;
      existingCart.push(product);
      successToast("Producto añadido correctamente", 1500);
    }

    dispatch(setLocalCart(existingCart));
  };

  //  ? Eliminar un producto del carrito
  const removeFromLocalCart = (productId) => {
    const cart = [...localCart];
    const updatedCart = cart.filter((item) => item.id_inventory !== productId);
    dispatch(setLocalCart(updatedCart));
  };

  // * Eliminar el carrito completo
  const removeLocalCart = () => {
    dispatch(setLocalCart([]));
    localStorage.removeItem("localCart");
  };

  return {
    localCart,
    addToLocalCart,
    removeFromLocalCart,
    removeLocalCart,
  };
};

export default useLocalCart;
