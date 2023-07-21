import {useState} from 'react';
import styles from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByName, resetDisplayedProducts } from '../../redux/actions/actions';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inventory = useSelector(state => state.inventory);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    if(!event.target.value) dispatch(resetDisplayedProducts());
    setTimeout(filterProducts, 300);
  };

  const handleSearch = async (query) => {
    // ! Esto llamaría a un filtrado por nombre del home y..
    // ? Recordar hacerle trim() a la query antes de enviar
    setSearchQuery(query);
    setSearchResults([]);
    dispatch(filterProductsByName(query.trim()));
    console.log(`Busco con el input ${query}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const filterProducts = () => {
    // * Filtrando productos basados en la lista.
    const filteredProducts = inventory.filter((product) =>
      product.article_name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    // * Solo quiero mostrar 6
    const limitedResults = filteredProducts.slice(0, 6);
    setSearchResults(limitedResults);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    dispatch(resetDisplayedProducts());
    setSearchResults([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Busca entre nuestros productos..."
        />
        <button onClick={handleClearSearch}>X</button>

        {/* Mostrar resultados posibles según el input */}
        {searchResults.length && (
          <ul className={styles.resultsList}>
            {searchResults.map((item) => (
              <li key={item.id_inventory} onClick={() => handleSearch(item.article_name)}>
                {item.article_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={() => handleSearch(searchQuery)}>Lupa</button>
    </div>
  );
};

export default SearchBar;
