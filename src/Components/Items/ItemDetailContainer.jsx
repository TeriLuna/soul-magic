import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { productsData } from "../utils/productsData";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  const getItem = (id, products) => {
    const product = products.find((p) => p.id === parseInt(id));
    return product;
  };
  /*----------------------------------------------------------------------------------*/
  //Atrapar ID con hook
  const { id } = useParams();
  /*----------------------------------------------------------------------------------*/

  useEffect(() => {
    customFetch(500, getItem(id, productsData))
      .then((result) => {
        console.log({ result });
        setProduct(result);
      })
      .catch((error) => console.log(error));
  }, [product, id]);


  return <div>{product && <ItemDetail product={product} />}</div>;
}
