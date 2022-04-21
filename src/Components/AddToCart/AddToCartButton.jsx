import React, { useContext } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartProvider";

export default function AddToCartButton() {
  return (
    <>
      <Button className="btn-default btn-outline btn-opacity btn-lg">
        Go to Cart
      </Button>
    </>
  );
}
