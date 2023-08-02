import React, { useState } from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import EditProduct from "../Form/EditProduct/EditProduct";
import styles from "./AdminEditProduct.module.css";
import { useDispatch, useSelector } from "react-redux";

const AdminEditProduct = () => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState({});

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleSubmitSuccess = () => {
    setSelectedItem({});
  }

  // ? Searchbar
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [hideList, setHideList] = useState(false);
  const inventory = useSelector((state) => state.app.inventory);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    if (hideList) setHideList(false);
    if (!event.target.value) dispatch(resetDisplayedProducts());
    setTimeout(handleListSuggestions(event.target.value), 300);
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
    
    setSearchResults(filteredProducts);
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
        setSelectedItem(searchResults[highlightedIndex]);
        setHighlightedIndex(-1);
      }
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleBlur = () => {
    setHideList(true);
  };

  return (
    <div className={styles.view_container}>
      <Sidebar />
      <div className={styles.body_container}>
        <h1>EDITAR PRODUCTO</h1>
        <div className={styles.container}>
          <div className={styles.bar} onBlur={handleBlur}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setHideList(false)}
              placeholder="Buscar producto..."
            />
            {/* Mostrar resultados posibles/sugerencias según el input */}
            {!hideList && searchResults.length && (
              <ul
                className={styles.resultsList}
                onMouseDown={(e) => e.preventDefault()}
              >
                {searchResults.map((item, index) => (
                  <li
                    key={item.id_inventory}
                    onClick={() => handleItemClick(item)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={
                      index === highlightedIndex ? styles.highlighted : ""
                    }
                  >
                    {item.article_name}
                  </li>
                ))}
              </ul>
            )}
            <button onClick={handleClearSearch} className={styles.btnClear}>
              X
            </button>
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
        <EditProduct product={selectedItem} onSubmitSuccess={handleSubmitSuccess} />
      </div>
    </div>
  );
};

export default AdminEditProduct;
