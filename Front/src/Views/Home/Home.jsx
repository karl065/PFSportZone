/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../Components";
import { LoadingSpinner } from "../../Components";
import Pagination from "../../Components/Pagination/Pagination";
import SortAndFilters from "../../Components/SortAndFilters/SortAndFilters";
import Styles from "./Home.module.css";
import { resetDisplayedProducts } from "../../redux/actions/actions";

const Home = (props) => {
  const dispatch = useDispatch();
  const displayInventory = useSelector((state) => state.app.displayInventory);
  const isLoading = useSelector((state) => state.app.isLoading);
  const [page, setPage] = useState(1);
  const [amountPerPage, setAmountPerPage] = useState(8);
  const pageCount = displayInventory.length / amountPerPage;

  useEffect(() => {
    setPage(1);
  }, [pageCount]);

  return (
    <div className={Styles.container}>
      {displayInventory.length > 0 && <SortAndFilters setPage={setPage} />}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={Styles.cards}>
          {displayInventory.length ? (
            displayInventory
              .slice(
                (page - 1) * amountPerPage,
                (page - 1) * amountPerPage + amountPerPage
              )
              .map((item, index) => {
                if (
                  !(
                    item.stock === 0 ||
                    item.status === "Discontinued" ||
                    item.status === "Not Available"
                  )
                ) {
                  return <Card key={index} product={item} />;
                }
                return null;
              })
          ) : (
            <div className={Styles.no_matches_box}>
              <h3>Sin resultados... ☹️</h3>
              <button
                className={Styles.resetBtn}
                onClick={() => dispatch(resetDisplayedProducts())}
              >
                Volver a cargar
              </button>
            </div>
          )}
        </div>
      )}

      {displayInventory.length >= amountPerPage && (
        <Pagination page={page} setPage={setPage} pageCount={pageCount} />
      )}

      <footer className={Styles.footer}>
        <p>2023 derechos reservados SPORTZONE s.a.</p>
      </footer>
    </div>
  );
};

export default Home;
