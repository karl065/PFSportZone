import React from "react";
import LocalCartItem from "../LocalCartItem/LocalCartItem";
import useLocalCart from "../../../helpers/useLocalCart";

const LocalCart = () => {
  const { localCart } = useLocalCart();

  return (
    <div>
      {localCart.map((product) => (
        <LocalCartItem product={product} />
      ))}
    </div>
  );
};

export default LocalCart;
