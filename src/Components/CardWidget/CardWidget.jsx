import React, { useContext } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { CartContext } from "../../Context/CartProvider";


export default function CardWidget() {
  const { numberOfItems } = useContext(CartContext)
  return (
    <>
      <BiShoppingBag size="20px" />({numberOfItems})
    </>
  );
}
