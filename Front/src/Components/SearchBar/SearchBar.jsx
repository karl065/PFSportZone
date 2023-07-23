import {useState} from 'react';
import styles from './SearchBar.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {
  filterProductsByName,
  resetDisplayedProducts,
} from '../../redux/actions/actions';
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hideList, setHideList] = useState(false);
  const inventory = useSelector((state) => state.inventory);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    if (!event.target.value) dispatch(resetDisplayedProducts());
    setTimeout(handleListSuggestions, 300);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchResults([]);
    dispatch(filterProductsByName(query.trim()));
    if (window.location.href !== '/home') navigate('/home');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const handleListSuggestions = () => {
    const seen = {};

    // * Filtrado para la lista de sugerencias que no repitan los nombres idénticos.
    const filteredProducts = inventory.filter((product) => {
      const articleName = product.article_name.toLowerCase();
      const search = searchQuery.toLowerCase().trim();
      return (
        articleName.includes(search) &&
        !seen[articleName] &&
        (seen[articleName] = true)
      );
    });

    // * Solo quiero mostrar 6
    const limitedResults = filteredProducts.slice(0, 6);
    setSearchResults(limitedResults);
  };

  const handleClearSearch = () => {
    dispatch(resetDisplayedProducts());
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleBlur = () => {
    setTimeout(() => setHideList(true), 100);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.bar}
        onBlur={handleBlur}
        onFocus={() => setHideList(false)}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Busca entre nuestros productos..."
        />
        <button onClick={handleClearSearch}>X</button>

        {/* Mostrar resultados posibles/sugerencias según el input */}
        {!hideList && searchResults.length && (
          <ul className={styles.resultsList}>
            {searchResults.map((item) => (
              <li
                key={item.id_inventory}
                onClick={() => handleSearch(item.article_name)}
              >
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
