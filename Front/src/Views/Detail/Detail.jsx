import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/actions/actions";
import { LoadingSpinner } from "../../Components/index";
import styles from "./Detail.module.css";
import axios from "axios";
import server from "../../Connections/Server";

const Detail = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  let isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get(`${server.api.baseURL}inventory/${id}`)
      .then((response) => setProduct(response.data))
      .then(() => setLoading(false));
  }, [dispatch, id]);

  return (
    <section className={styles.detail_wrapper}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.detail}>
          <img src={product.image} alt="" className={styles.img} />
          <div className={styles.info_container}>
            <h1>{product.article_name}</h1>
            <h2>${product.selling_price}</h2>
            <div className={styles.description_box}>
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
          <div className={styles.buttons_box}>
            <button className={styles.btn_cart}>Add to cart</button>
            <button className={styles.btn_favorites}>Add to favorite</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
