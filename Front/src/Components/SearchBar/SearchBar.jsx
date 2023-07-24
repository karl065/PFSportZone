import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductsByName,
  resetDisplayedProducts,
} from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [hideList, setHideList] = useState(false);
  const inventory = useSelector((state) => state.inventory);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    if (hideList) setHideList(false);
    if (!event.target.value) dispatch(resetDisplayedProducts());
    setTimeout(handleListSuggestions(event.target.value), 300);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchResults([]);
    dispatch(filterProductsByName(query.trim()));
    if (window.location.href !== "/home") navigate("/home");
  };

  const handleListSuggestions = (query) => {
    const seen = {};

    // * Filtrado para la lista de sugerencias que no repitan los nombres idénticos.
    const filteredProducts = inventory.filter((product) => {
      const articleName = product.article_name.toLowerCase();
      const search = query.toLowerCase().trim();
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

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown" && searchResults.length) {
      event.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const newIndex = Math.min(prevIndex + 1, searchResults.length - 1);
        setSearchQuery(searchResults[newIndex].article_name);
        return newIndex;
      });
    } else if (event.key === "ArrowUp" && searchResults.length) {
      event.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const newIndex = Math.max(prevIndex - 1, 0);
        setSearchQuery(searchResults[newIndex].article_name);
        return newIndex;
      });
    } else if (event.key === "Enter") {
      if (highlightedIndex > -1 && searchResults[highlightedIndex]) {
        handleSearch(searchResults[highlightedIndex].article_name);
        setHighlightedIndex(-1);
      } else {
        handleSearch(searchQuery);
      }
    }
  };

  const handleClearSearch = () => {
    dispatch(resetDisplayedProducts());
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleBlur = () => {
    setTimeout(() => setHideList(true), 100);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bar} onBlur={handleBlur}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setHideList(false)}
          placeholder="Busca entre nuestros productos..."
        />
        <button onClick={handleClearSearch} className={styles.btnClear}>X</button>

        {/* Mostrar resultados posibles/sugerencias según el input */}
        {!hideList && searchResults.length && (
          <ul className={styles.resultsList}>
            {searchResults.map((item, index) => (
              <li
                key={item.id_inventory}
                onClick={() => handleSearch(item.article_name)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={index === highlightedIndex ? styles.highlighted : ""}
              >
                {item.article_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={() => handleSearch(searchQuery)}
        className={styles.btnSearch}
      >
        <img
          src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690157479/PF/dsbscy8syldhvnr9ppsx.png"
          alt="Lupa busqueda"
        />
      </button>
    </div>
  );
};

export default SearchBar;
