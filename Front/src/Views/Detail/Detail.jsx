import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, LoadingSpinner } from "../../Components/index";
import { Link } from "react-router-dom";
import { getProductById, setLoading } from "../../redux/actions/actions";
import { addProduct } from "../../redux/actions/cartActions";
import styles from "./Detail.module.css";
import arrowLeft from "../../assets/arrow-left.svg";
import { successToast } from "../../helpers/toastNotification";
import {Rating} from '@micahlt/react-simple-star-rating';
import ProductQuestions from "../../Components/ProductQuestions/ProductQuestions";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) => state.app.product);
  let isLoading = useSelector((state) => state.app.isLoading);
  const { role, carrito } = useSelector((state) => state.app.user);

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const ratingArray = product.reviews?.map((review) => {
    let ratingNumber = Number(review?.evaluation);
    return ratingNumber;
  });

  const ratingGeneral = ratingArray?.reduce((acc,actualValue)=> acc + actualValue,0)/ratingArray?.length;

  const handleRedirectReview = () => {
    navigate(`/review/${id}`)
  };

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getProductById(id)).then(() => dispatch(setLoading(false)));
    console.log(product.reviews);
  }, [dispatch, id]);

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
    await dispatch(
      addProduct(carrito.idCar, product.id_inventory, selectedQuantity)
    );
    successToast("Producto añadido correctamente!", 1000);
  };

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
              {role === "Cliente" && (
                <>
                  <div className={styles.stock_box}>
                    <button onClick={decrementQuantity}>-</button>
                    <span>{selectedQuantity}</span>
                    <button onClick={incrementQuantity}>+</button>
                  </div>
                  <div className={styles.buttons_box}>
                    <button
                      className={styles.btn_cart}
                      onClick={handleAddProduct}
                    >
                      Añadir al carrito
                    </button>
                    <button className={styles.btn_favorites} onClick={handleRedirectReview}>
                      Opinar Del Producto
                    </button>
                  </div>
                </>
              )}
              
              
                  {
                    product.reviews.length ?
                    <div>
                      <h3>Rating General</h3>
                    <Rating 
                    initialValue={ratingGeneral}
                    readonly={true}
                    allowFraction={true}
                    />
                  <h3>Opiniones Del Producto</h3>
                  <ul>
                    {
                    product.reviews?.length 
                    ? product.reviews.map((review,index)=>{
                      return (
                          <li key={index}>{review.message}</li>
                      )
                    })
                    : null
                  }
                  </ul>
                    </div>
                    
                  : null
                  }
            </div>
          </div>
          <ProductQuestions productId={id}/>
        </>
      )}
    </section>
  );
};

export default Detail;
