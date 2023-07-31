/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import Styles from './SortAndFilters.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSliders} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {
  orderProductsByAbc,
  orderProductsByPrice,
  productsFiltered,
  resetDisplayedProducts,
} from '../../redux/actions/actions';
import server from '../../Connections/Server';

export default function SortAndFilters() {
  const [menuView, setMenuView] = useState(false);
  const dispatch = useDispatch();
  const sports = useSelector((state) => state.app.sports);
  const marca = useSelector((state) => state.app.marca);
  const categorys = useSelector((state) => state.app.category);
  const [filters, setFilters] = useState({
    id_categorias: '',
    idDeportes: '',
    minPrice: '',
    maxPrice: '',
    genre: '',
    idMarca: '',
  });
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  //?FUNCIONES PARA LOS ORDERS
  const handleOrderByPrice = (e) => {
    const {value} = e.target;
    dispatch(orderProductsByPrice(value));
  };

  const handleOrderByAbc = (e) => {
    const {value} = e.target;
    dispatch(orderProductsByAbc(value));
  };

  //*funciones para capturar los valores de los selects y tambien para limpiar los filtros
  const handleFiltersChange = async (e) => {
    setFilters({...filters, [e.target.name]: e.target.value});
  };

  const handleFiltersClean = () => {
    setFilters({
      id_categorias: 'default',
      idDeportes: 'default',
      minPrice: 'default',
      maxPrice: 'default',
      genre: 'default',
      idMarca: 'default',
    });
    dispatch(resetDisplayedProducts());
  };

  //*funcion para que al ir modificando filters se sigan agregando querys a la request para filtrar
  const fetchFilteredProducts = async (filters) => {
    try {
      const queryString = Object.keys(filters)
        .map((key) => {
          const value = filters[key];
          if (
            value !== undefined &&
            value !== null &&
            value !== '' &&
            value !== 'default'
          ) {
            return `${key}=${value}`;
          }
          return null; // Si el valor no es válido, se devuelve null
        })
        .filter((query) => query !== null) // Filtrar los valores nulos
        .join('&');
      const response = await axios.get(
        `${server.api.baseURL}filters?${queryString}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching filtered products:', error);
      return [];
    }
  };

  //! el useEffect llama a la funcion de arriba cada vez que los filtros se actualizan y va actualizando los productos filtrados
  useEffect(() => {
    const areAllFiltersEmpty = Object.values(filters).every(
      (value) => value === ''
    );

    if (areAllFiltersEmpty) {
      return;
    }
    // Llamar a la función fetchFilteredProducts con los filters actuales
    fetchFilteredProducts(filters)
      .then((filteredProducts) => {
        // Actualizar el estado de productosFiltrados con los resultados filtrados
        setProductosFiltrados(filteredProducts);
        dispatch(productsFiltered(filteredProducts));
      })
      .catch((error) => {
        console.error('Error fetching filtered products:', error);
      });
  }, [filters]);

  //*funciones que cambian el estado para desplegar y cerrar el menu de filtros
  const handleViewFiltersAndOrdereds = () => {
    setMenuView(true);
  };
  const closeMenuFilters = () => {
    setMenuView(false);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.order_container}>
        <label htmlFor="ordenamientos">ordenar por:</label>
        <br />
        <select
          name="ordenamientos"
          id="ordenamientos"
          onChange={handleOrderByPrice}
        >
          <option value="default">precio</option>
          <option value="PA">mas barato a mas caro</option>
          <option value="PD">mas caro a mas barato</option>
        </select>
        <select
          name="ordenamientos"
          id="ordenamientos"
          onChange={handleOrderByAbc}
        >
          <option value="default">alfabeticamente</option>
          <option value="ABCA">abc ascendente</option>
          <option value="ABCD">abc descendente</option>
        </select>
      </div>

      <div className={Styles.filters_container}>
        <button
          onClick={handleViewFiltersAndOrdereds}
          className={Styles.button_onMenu}
        >
          <FontAwesomeIcon icon={faSliders} className={Styles.button_onMenu} />
          filtrar por
        </button>
        <br />
        <div
          className={
            menuView ? Styles.menu_filters_active : Styles.menuDisabled
          }
        >
          <span>
            <button onClick={closeMenuFilters}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={Styles.arrowButton}
              />
            </button>
            <button onClick={handleFiltersClean}>eliminar filtros</button>
          </span>
          <p>Filtros elegidos:</p>
          <br />

          <label htmlFor="filters">por tipo de prenda:</label>
          <select
            value={filters.id_categorias}
            name="id_categorias"
            id="filters"
            onChange={(e) => handleFiltersChange(e)}
          >
            <option value="default">Elige una opcion</option>
            {categorys?.length &&
              categorys.map((category, index) => {
                return (
                  <option value={category.id_categories} key={index}>
                    {category.categoryName}
                  </option>
                );
              })}
          </select>

          <label htmlFor="filters">por deporte:</label>
          <select
            value={filters.idDeportes}
            name="idDeportes"
            id="filters"
            onChange={(e) => handleFiltersChange(e)}
          >
            <option value="default">Elige una opcion</option>
            {sports?.length &&
              sports.map((sport, index) => {
                return (
                  <option value={sport.idDeportes} key={index}>
                    {sport.deporteName}
                  </option>
                );
              })}
          </select>

          <label htmlFor="filters">por genero:</label>
          <select
            value={filters.genre}
            name="genre"
            id="filters"
            onChange={(e) => handleFiltersChange(e)}
          >
            <option value="default">Elige una opcion</option>
            <option value="Man">Hombre</option>
            <option value="Women">Mujer</option>
            <option value="Unisex">Unisex</option>
          </select>

          <label htmlFor="filters">por marcas:</label>
          <select
            value={filters.idMarca}
            name="idMarca"
            id="filters"
            onChange={(e) => handleFiltersChange(e)}
          >
            <option value="default">Elige una opcion</option>
            {marca?.length &&
              marca.map((marc, index) => {
                return (
                  <option value={marc.idMarca} key={index}>
                    {marc.name}
                  </option>
                );
              })}
          </select>

          <label htmlFor="filters">precio minimo:</label>
          <select
            value={filters.minPrice}
            name="minPrice"
            id="filters"
            onChange={(e) => handleFiltersChange(e)}
          >
            <option value="default">Elige una opcion</option>
            <option value="0">0</option>
            <option value="1000">1.000</option>
            <option value="5000">5.000</option>
            <option value="20000">20.000</option>
            <option value="40000">40.000</option>
            <option value="50000">50.000</option>
          </select>

          <label htmlFor="filters">precio maximo:</label>
          <select
            value={filters.maxPrice}
            name="maxPrice"
            id="filters"
            onChange={(e) => handleFiltersChange(e)}
          >
            <option value="default">Elige una opcion</option>
            <option value="1000">1.000</option>
            <option value="5000">5.000</option>
            <option value="10000">10.000</option>
            <option value="50000">50.000</option>
            <option value="Infinity">mas de 50.000</option>
          </select>

          <br />
          <button className={Styles.applyButton} onClick={closeMenuFilters}>
            Aplicar Filtros({productosFiltrados.length} resultados)
          </button>
        </div>
      </div>
    </div>
  );
}
