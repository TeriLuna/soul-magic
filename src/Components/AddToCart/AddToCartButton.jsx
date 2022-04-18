import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddToCartButton() {
  return (
    <>
      <Link to="/cart">
        <Button className="btn-default btn-outline btn-opacity btn-lg">Go to Cart</Button>
      </Link>
    </>
  );
}
