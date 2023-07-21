/* eslint-disable no-unused-vars */
import { useState } from "react";
import Styles from "./Home.module.css";
import Pagination from "../../Components/Pagination/Pagination";
import { Card } from "../../Components";
import { useSelector } from "react-redux";

const Home = (props) => {
  const displayInventory = useSelector((state) => state.displayInventory);
  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(3);
  const pageCount = displayInventory.length / amountPerPage;

  return (
     <div className={Styles.container}>
      <div className={Styles.cards}>
        {displayInventory.length ? (
          displayInventory
            .slice(
              (page - 1) * amountPerPage,
              (page - 1) * amountPerPage + amountPerPage
            )
            .map((item) => {
              return <Card key={item.id_inventory} product={item} />;
            })
        ) : (
          <h3 className={Styles.no_matches}>No results found... ☹️</h3>
        )}
      </div>

      <Pagination page={page} setPage={setPage} pageCount={pageCount} />

      <footer>
        <p>2023 derechos reservados SPORTZONE s.a.</p>
      </footer>
    </div>
  );
};


export default Home;
