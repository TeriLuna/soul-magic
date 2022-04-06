import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { productsData } from "../utils/productsData";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  // Promesa
  const [products, setProducts] = useState([]);

  useEffect(() => {
    customFetch(3000, productsData)
      .then((result) => setProducts(result)
      .cath((error) => console.log(error))
    );
  }, [products]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}
