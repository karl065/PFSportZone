import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Styles from './SortAndFilters.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSliders} from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { resetDisplayedProducts } from '../../redux/actions/actions';
import  server from '../../Connections/Server';


export default function SortAndFilters(props) {

  const [menuView, setMenuView] = useState(false);
  const dispatch = useDispatch();
  const displayInventory = useSelector(state => state.app.displayInventory);
  const sports = useSelector(state => state.app.sports);
  const categorys = useSelector(state => state.app.category);
  const [filters, setFilters] = useState({
    category: "",
    sports: "",
    rangeOfPrices: "",
    genres: "",
    brands: "",
  });


//*funciones para capturar los valores de los selects y tambien para limpiar los filtros
const handleFiltersChange = (e) => {
  setFilters({ ...filters,
    [e.target.name] : e.target.value
  })
}

//?capturo el valor del select de rango de precios aparte ya que necesito minPrice y MaxPrice
const handleRangeOfPrices = (e) => {
  const {value} = e.target;
  const valuesSeparated = value.split("-");
  setFilters({
    ...filters,
    [e.target.name] : valuesSeparated
  })
};


const handleFiltersClean = () => {
  setFilters({
    category: "",
    sports: "",
    rangeOfPrices: "",
    genres: "",
    brands: "",
  });
  dispatch(resetDisplayedProducts());
}
//*funciones que cambian el estado para desplegar y cerrar el menu de filtros
  const handleViewFiltersAndOrdereds = () => {
    setMenuView(true);
  };
  const closeMenuFilters = () => {
    setMenuView(false);
  }
  console.log(filters)
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
        <button onClick={handleViewFiltersAndOrdereds} className={Styles.button_onMenu}>
        <FontAwesomeIcon icon={faSliders} className={Styles.button_onMenu}/>
        filtrar por
        </button>
        <br />
        <div className={ menuView ? Styles.menu_filters_active : Styles.menuDisabled}>
          <span>
          <button onClick={closeMenuFilters}>
          <FontAwesomeIcon icon={faArrowLeft} className={Styles.arrowButton} />
          </button>
          <button onClick={handleFiltersClean}>eliminar filtros</button>
          </span>
          <p>Filtros elegidos:</p>
          <br />

          <label htmlFor="filters">por tipo de prenda:</label>
          <select name="category" id="filters" onChange={handleFiltersChange}>
            {categorys?.length && categorys.map((category,index)=>{
              return <option value={category.categoryName} key={index}>{category.categoryName}</option>
            })}
          </select>

          <label htmlFor="filters">por deporte:</label>
          <select name="sports" id="filters" onChange={handleFiltersChange}>
            {sports?.length && sports.map((sport,index) => {
              return <option value={sport.deporteName} key={index}>{sport.deporteName}</option>
            })}
          </select>

          <label htmlFor="filters">por rango de precio:</label>
          <select name="rangeOfPrices" id="filters" onChange={handleRangeOfPrices}>
            <option value="0-1000">0-1000</option>
            <option value="1000-5000">1000-5000</option>
            <option value="5000-10000">5000-10000</option>
            <option value="Infinity">Mas de 10000</option>
          </select>

          <label htmlFor="filters">por genero:</label>
          <select name="genres" id="filters" onChange={handleFiltersChange}>
            <option value="Men">Hombre</option>
            <option value="Woman">Mujer</option>
            <option value="Unisex">Unisex</option>
          </select>

          <label htmlFor="filters">por marcas:</label>
          <select name="brands" id="filters" onChange={handleFiltersChange}>
          </select>

          <br />
          <button className={Styles.applyButton}>Aplicar Filtros</button>
        </div>
      </div>
    </div>
  );
}


//TODO: Filtros
////desde el back se resumio todo a un solo llamado, eso facilita los elementos que puedo traer para renderizar
//// desde el front entonces podria:
// todo: REDUX
////crear un estado que se llame productsFiltered, que reciba el resultado de la peticion al back
//// una action que cada vez que invoque un filtro renderice lo filtrado
//todo: componente
////tengo que capturar el valor de los filtros seleccionados y pasar esos valores  a la peticion como querys
//ademas que cada vez que esos filtros se modifican, que se aplique a lo renderizado al instante
//todo: filtros a aplicar
// minPrice = 0,
// maxPrice,
// genre,
// state,
// idDeportes,
// id_categories,
// idMarca