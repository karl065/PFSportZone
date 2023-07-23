/* eslint-disable no-unused-vars */
import {useState} from 'react';
import {useSelector} from 'react-redux';
import Styles from './Home.module.css';
import Pagination from '../../Components/Pagination/Pagination';

const Home = (props) => {
  //traigo el la propiedad inventory del estado global
  const inventory = useSelector(state => state.inventory);

  //paginado
  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(3);
  const pageCount = inventory.length / amountPerPage;

  return (
    <div className={Styles.container}>
      <div className={Styles.cards}>
        {inventory
          .slice(
            (page - 1) * amountPerPage,
            (page - 1) * amountPerPage + amountPerPage
          )
          .map((article, index) => {
            return <div key={index}>
                    <img src={article.image} alt={article.article_name} />
                    <h2 >{article.article_name}</h2>
                    <h3>{article.selling_price}</h3>
              </div>

          })}
      </div>

      <Pagination page={page} setPage={setPage} pageCount={pageCount} />

      <footer>
        <p>2023 derechos reservados SPORTZONE s.a.</p>
      </footer>
    </div>
  );
}

export default Home;
