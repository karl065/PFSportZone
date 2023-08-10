/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Carousel, LoadingSpinner} from '../../Components/index';
import {Link} from 'react-router-dom';
import {clearProduct, getProductById} from '../../redux/actions/actions';
import {addProduct} from '../../redux/actions/cartActions';
import styles from './Detail.module.css';
import arrowLeft from '../../assets/arrow-left.svg';
import {successToast} from '../../helpers/toastNotification';
import {Rating} from '@micahlt/react-simple-star-rating';
import ProductQuestions from '../../Components/ProductQuestions/ProductQuestions';
import {isLoggedIn} from '../../helpers/helperLogin';
import useLocalCart from '../../helpers/useLocalCart';
import server from '../../Connections/Server';
import axios from 'axios';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {addToLocalCart} = useLocalCart();
  const {id} = useParams();
  const product = useSelector((state) => state.app.product);
  const {role, carrito} = useSelector((state) => state.app.user);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [productQuestions, setProductQuestions] = useState([]);

  const ratingArray = product.reviews?.map((review) => {
    let ratingNumber = Number(review?.evaluation);
    return ratingNumber;
  });

  const ratingGeneral =
    ratingArray?.reduce((acc, actualValue) => acc + actualValue, 0) /
    ratingArray?.length;

  const handleRedirectReview = () => {
    navigate(`/review/${id}`);
  };

  // * Obtiene las preguntas y el nuevo producto.
  useEffect(() => {
    console.log('Mensaje para ver cuantas veces se escibre useEffect');
    Promise.all([
      dispatch(getProductById(id)),
      axios
        .get(`${server.api.baseURL}questions/${id}`)
        .then(({data}) => setProductQuestions(data)),
    ]).finally(() => setIsLoading(false));
  }, [dispatch]);

  const incrementQuantity = () => {
    if (selectedQuantity < product.stock) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const handleAddProduct = async () => {
    if (!isLoggedIn()) {
      // * Si es un usuario que no esta registrado utiliza el carrito en localStorage.
      addToLocalCart(product, selectedQuantity);
    } else {
      await dispatch(
        addProduct(carrito.idCar, product.id_inventory, selectedQuantity)
      );
      successToast('Producto añadido correctamente!', 1000);
    }
  };

  // * Al desmontar el componente también se borra el producto si lo obtiene del redux.
  useEffect(() => {
    return () => {
      dispatch(clearProduct());
    };
  }, []);

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
            {product.image && <Carousel slides={product.image} />}
            <div className={styles.info_container}>
              <h1>{product.article_name}</h1>
              <h2>${product.selling_price}</h2>
              <div className={styles.description_box}>
                <h3>Descripción</h3>
                <p>{product.description}</p>
              </div>
              <p className={styles.stock_p}>Stock: {product.stock}</p>
              {(!isLoggedIn() || role === 'Cliente') && (
                <>
                  <div className={styles.stock_box}>
                    <button onClick={decrementQuantity} disabled={selectedQuantity <= 1}>-</button>
                    <span>{selectedQuantity}</span>
                    <button onClick={incrementQuantity} disabled={selectedQuantity >= product.stock}>+</button>
                  </div>
                  <div className={styles.buttons_box}>
                    <button
                      className={styles.btn_cart}
                      onClick={handleAddProduct}
                    >
                      Añadir al carrito
                    </button>
                    <button
                      className={styles.btn_favorites}
                      onClick={handleRedirectReview}
                    >
                      opinar del producto
                    </button>
                  </div>
                </>
              )}
              <h3>rating general</h3>
              <Rating
                initialValue={ratingGeneral}
                readonly={true}
                allowFraction={true}
              />
              <h3>opiniones del producto</h3>
              <ul>
                {product.reviews?.length
                  ? product.reviews.map((review, index) => {
                      return <li key={index}>{review.message}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
          <ProductQuestions
            productQuestions={productQuestions}
            setProductQuestions={setProductQuestions}
            productId={product.id_inventory}
          />
        </>
      )}
    </section>
  );
};

export default Detail;
