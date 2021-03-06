import Button from "react-bootstrap/Button";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartProvider";

export default function ItemCount({ handleHidden, product }) {
  // COUNT BUTTONS
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const onRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const onAdd = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const onClickAddToCart = () => {
    addToCart(product, count, setCount);
    if (handleHidden) handleHidden();
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
          <button
            onClick={onClickAddToCart}
            className="btn-default size-sm color-secondary"
            style={{ borderRadius: 10 + "px" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
