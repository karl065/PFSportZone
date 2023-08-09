import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Styles from './Favorites.module.css';

export default function Favorites() {
  const navigate = useNavigate();
  const favoritos = useSelector((state) => state.app.user.favoritos);
  const inventario = useSelector(state => state.app.displayInventory);
  let favoritosDelUsuario = inventario?.filter((fav) => {
    const objeto2 = favoritos?.filter((objeto) => fav.id_inventory === objeto.InventarioIdInventory);
    return objeto2.length > 0;
});

const redirectToDetail = (idProduct) => {
    navigate(`/product/${idProduct}`)
};

  console.log(favoritosDelUsuario);
  return (
    <>
      <div className={Styles.texts}>
        <h1>Mi lista de Favoritos</h1>
        <h4>({favoritos.length}) Productos</h4>
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
                <button className={Styles.addToCart}>Añadir al carrito</button>
              </span>
            )
          })
          : <h2>No hay nada en su lista de favoritos</h2>
        }
      </div>
    </>
  );
}
