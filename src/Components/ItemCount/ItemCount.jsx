import Button from "react-bootstrap/Button";
import React, { useState } from "react";

export default function ItemCount({ stock, handleHidden }) {
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
          <Button onClick={handleHidden} variant="outline-dark">
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}
