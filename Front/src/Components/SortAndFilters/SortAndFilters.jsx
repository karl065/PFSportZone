import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Styles from './SortAndFilters.module.css';
import { filterProductsByStatus, orderProductsByPrice, resetDisplayedProducts } from '../../redux/actions/actions';
import axios from 'axios';
import  server from '../../Connections/Server';

export default function SortAndFilters(props) {
  const [menuView, setMenuView] = useState(false);
  const dispatch = useDispatch();
  const displayInventory = useSelector(state => state.app.displayInventory);


//*funcion que maneja los filtros por status de los productos
const handleFilters = async(e) => {
  if(e.target.checked) {
    const response = await axios.get(`${server.api.baseURL}filters/?status=${e.target.value}`);
    dispatch(filterProductsByStatus(response.data));
    props.setPage(1);
  } else {
    dispatch(resetDisplayedProducts())
  }
}


//*funcion que maneja los ordenamientos de los productos por orden de valor(precio)
  const handleOrders = (e) => {
    if(e.target.checked) {
      dispatch(orderProductsByPrice(e.target.value))
      props.setPage(1);
    } else {
      dispatch(resetDisplayedProducts())
    }
  }


//*funciones que cambian el estado para desplegar y cerrar el menu de filtros
  const handleViewFiltersAndOrdereds = () => {
    setMenuView(true);
  };
  const closeMenuFilters = () => {
    setMenuView(false);
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.order_container}>
        <label htmlFor="ordenamientos">ordenar por:</label>
        <br/>
        <select name="ordenamientos" id="ordenamientos">
          <option value="NUEVO">novedades</option>
          <option value="PA">mas barato a mas caro</option>
          <option value="PD">mas caro a mas barato</option>
        </select>
      </div>

      <div className={Styles.filters_container}>
        <button onClick={handleViewFiltersAndOrdereds} className={Styles.button_onMenu}>filtros</button>
        <br />
        <div className={ menuView ? Styles.menu_filters_active : Styles.menuDisabled}>
          <span>
          <button onClick={closeMenuFilters}>X</button>
          <button>eliminar filtros</button>
          </span>
          <p>Filtros elegidos:</p>
          <br />
          <label htmlFor="filters">por tipo de prenda:</label>
          <select name="filters" id="filters">
          </select>
          <label htmlFor="filters">por deporte:</label>
          <select name="filters" id="filters">
          </select>
          <label htmlFor="filters">por rango de precio:</label>
          <select name="filters" id="filters">
          </select>
          <label htmlFor="filters">por genero:</label>
          <select name="filters" id="filters">
          </select>
          <label htmlFor="filters">por marcas:</label>
          <select name="filters" id="filters">
          </select>
          <br />
          <button className={Styles.applyButton}>Aplicar Filtros</button>
        </div>
      </div>
    </div>
  );
}
