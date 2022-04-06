import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { products } from "../utils/products";
import Item from "./Item";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}
