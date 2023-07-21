/* eslint-disable no-unused-vars */
import {useState} from 'react';
import Styles from './Home.module.css';
import Pagination from '../../Components/Pagination/Pagination';

const Home = (props) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(3);
  const pageCount = items.length / amountPerPage;

  return (
    <div className={Styles.container}>
      <div className={Styles.cards}>
        {items
          .slice(
            (page - 1) * amountPerPage,
            (page - 1) * amountPerPage + amountPerPage
          )
          .map((item, index) => {
            return <h3 key={index}>{item}</h3>;
          })}
      </div>

      <Pagination page={page} setPage={setPage} pageCount={pageCount} />

      <footer>
        <p>2023 derechos reservados SPORTZONE s.a.</p>
      </footer>
    </div>
  );
};


export default Home;
