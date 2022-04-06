import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function ItemCount({ stock }) {
  // COUNT BUTTONS
  const initial = 1;

  const [count, setCount] = useState(initial);

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

  return (
    <>
      <div>
        <Button variant="outline-secondary" onClick={onRemove}>
          -
        </Button>
        <span>{count}</span>
        <Button variant="outline-secondary" onClick={onAdd}>
          +
        </Button>
      </div>
      <div>
        {" "}
        <Button
          variant="light"
          onClick={() => alert(`Added to cart: ${count} units`)}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
