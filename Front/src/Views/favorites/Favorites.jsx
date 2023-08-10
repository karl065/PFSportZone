import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {isLoggedIn} from '../../helpers/helperLogin';
import {addProduct} from '../../redux/actions/cartActions';
import {successToast} from '../../helpers/toastNotification';
import useLocalCart from '../../helpers/useLocalCart';
import Styles from './Favorites.module.css';

export default function Favorites() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.app.user.favoritos);
  const inventario = useSelector(state => state.app.displayInventory);
  let favoritosDelUsuario = inventario?.filter((fav) => {
    const objeto2 = favoritos?.filter((objeto) => fav.id_inventory === objeto.InventarioIdInventory);
    return objeto2?.length > 0;
});
const {addToLocalCart} = useLocalCart();
const cartId = useSelector((state) => state.cart.id);

const redirectToDetail = (idProduct) => {
    navigate(`/product/${idProduct}`)
};

  console.log(favoritosDelUsuario);
  const handleAddToCart = async (product,id) => {
    if (!isLoggedIn()) {
      // * Si es un usuario que no esta registrado utiliza el cart de localStorage.
      addToLocalCart(product, 1);
    } else {
      await dispatch(addProduct(cartId, id, 1));
      successToast('Producto añadido correctamente!', 1500);
    }
  };

  return (
    <>
      <div className={Styles.texts}>
        <h1>Mi lista de Favoritos</h1>
        <h4>({favoritos?.length}) Productos</h4>
      </div>

      <div className={Styles.favorites}>
        {
          favoritosDelUsuario?.length
          ? favoritosDelUsuario.map((fav,index)=>{
            return (
              <span className={Styles.favSingle} key={index}>
                <img src={fav.image[0]} alt={fav.article_name} onClick={()=>redirectToDetail(fav.id_inventory)}/>
                <h3>{fav.article_name}</h3>
                <h4>{fav.marcas?.name}</h4>
                <h4>${fav.selling_price}</h4>
                <h6>Disponibles: {fav.stock}</h6>
                <button className={Styles.addToCart} onClick={()=>handleAddToCart(fav,fav.id_inventory)}>Añadir al carrito</button>
                <button className={Styles.deleteFav}>Eliminar de favoritos</button>
              </span>
            )
          })
          : <h2>No hay nada en su lista de favoritos</h2>
        }
      </div>
    </>
  );
}
