import Button from "react-bootstrap/Button";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartProvider";

export default function ItemCount({ stock, handleHidden, product }) {

  // COUNT BUTTONS
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const onRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onClickAddToCart = () => {
    addToCart(product, count);
    if(handleHidden) handleHidden();
  };

  return (
    <>
      <div className="d-flex align-items-center flex-column">
        <div>
          <Button variant="outline-secondary" onClick={onRemove}>
            -
          </Button>
          <span className="m-3">{count}</span>
          <Button variant="outline-secondary" onClick={onAdd}>
            +
          </Button>
        </div>
        <div className="mt-2">
          {" "}
          <Button onClick={onClickAddToCart} variant="outline-dark">
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}
