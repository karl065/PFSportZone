import LocalCartItem from '../LocalCartItem/LocalCartItem';
import useLocalCart from '../../../helpers/useLocalCart';

const LocalCart = () => {
  const {localCart} = useLocalCart();

  return (
    <div>
      {localCart.map((product, index) => (
        <div key={index}>
          <LocalCartItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default LocalCart;
