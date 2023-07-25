import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner } from "../../Components/index";
import { Link } from "react-router-dom";
import { getProductById, setLoading } from "../../redux/actions/actions";
import { addProduct } from "../../redux/actions/cartActions";
import styles from "./Detail.module.css";
import arrowLeft from "../../assets/arrow-left.svg";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.app.product);
  let isLoading = useSelector((state) => state.app.isLoading);
  // const token = localStorage.getItem('token');
  const role = localStorage.getItem("role");
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getProductById(id)).then(() => dispatch(setLoading(false)));
  }, [dispatch, id]);

  return (
    <section className={styles.detail_wrapper}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Link to="/home">
            <img
              src={arrowLeft}
              alt="Arrow left"
              className={styles.arrow_left}
            />
          </Link>
          <div className={styles.detail}>
            {product.image && (
              <img
                src={product.image[0]}
                alt={product.article_name}
                className={styles.img}
              />
            )}
            <div className={styles.info_container}>
              <h1>{product.article_name}</h1>
              <h2>${product.selling_price}</h2>
              <div className={styles.description_box}>
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>
              {role === "Cliente" && (
                <div className={styles.buttons_box}>
                  <button
                    className={styles.btn_cart}
                    onClick={() => dispatch(addProduct(id))}
                  >
                    Add to cart
                  </button>
                  <button className={styles.btn_favorites}>
                    Add to favorite
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Detail;
