import React, { useContext } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { CartContext } from "../../Context/CartProvider";


export default function CardWidget() {
  const { numberOfItems } = useContext(CartContext)
  const num =() => {
    if (numberOfItems === 0) {
      return <></>
    } else {
      return (numberOfItems)
    }
  }
  const cantItems = num()

  return (
    <>
      <BiShoppingBag size="20px" />{cantItems}
    </>
  );
}
