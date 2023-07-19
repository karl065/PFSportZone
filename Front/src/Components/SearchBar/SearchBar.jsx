import {useState} from 'react';
import styles from './SearchBar.module.css';

// ! Prueba funcionamiento => Borrar luego.
const products = [
  {id: 1, name: 'Balón de fútbol'},
  {id: 2, name: 'Camiseta de baloncesto'},
  {id: 3, name: 'Raqueta de tenis'},
  {id: 4, name: 'Pelota de voleibol'},
  {id: 5, name: 'Guantes de boxeo'},
  {id: 6, name: 'Patines en línea'},
  {id: 7, name: 'Saco de boxeo'},
  {id: 8, name: 'Casco de ciclismo'},
  {id: 9, name: 'Red de bádminton'},
  {id: 10, name: 'Pesa rusa'},
  {id: 11, name: 'Gorra de natación'},
  {id: 12, name: 'Tabla de surf'},
  {id: 13, name: 'Gafas de esquí'},
  {id: 14, name: 'Cuerda de saltar'},
  {id: 15, name: 'Bicicleta de montaña'},
  {id: 16, name: 'Botas de fútbol'},
  {id: 17, name: 'Tablero de ajedrez'},
  {id: 18, name: 'Pelota de rugby'},
  {id: 19, name: 'Gorro de waterpolo'},
  {id: 20, name: 'Balón de béisbol'},
  {id: 21, name: 'Tabla de snowboard'},
  {id: 22, name: 'Pelota de golf'},
  {id: 23, name: 'Cinta de correr'},
  {id: 24, name: 'Máscara de buceo'},
  {id: 25, name: 'Patines de hielo'},
  {id: 26, name: 'Bolso de deporte'},
  {id: 27, name: 'Muñequeras de tenis'},
  {id: 28, name: 'Zapatillas de running'},
  {id: 29, name: 'Balón de balonmano'},
  {id: 30, name: 'Cuerdas de escalada'},
];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    setTimeout(filterProducts, 300);
  };

  const handleSearch = async (query) => {
    // * Lógica para filtrar las cards en función de la búsqueda => Dispatch Redux
    // ! Esto seria con dispatch a la action post. No va a tener .results cambiarlo luego.
    // ? Recordar hacerle trim() a la query antes de enviar
    console.log(`Busco con el input ${query}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const filterProducts = () => {
    // * Filtrando productos basados en la lista.
    // ! Estos products vendrían del estado global [useSelector], faltaría el redux.
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    // * Solo quiero mostrar 6
    const limitedResults = filteredProducts.slice(0, 6);
    setSearchResults(limitedResults);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
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
              <li key={item.id} onClick={() => handleSearch(item.name)}>
                {item.name}
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
