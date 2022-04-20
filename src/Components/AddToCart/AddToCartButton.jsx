import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartProvider";

export default function AddToCartButton({product, count}) {

  const { addToCart } = useContext(CartContext)

  return (
    <>
      <Link to="cart">
        <Button className="btn-default btn-outline btn-opacity btn-lg" onClick={()=>{addToCart({...product, count})}}>Go to Cart</Button>
      </Link>
    </>
  );
}
