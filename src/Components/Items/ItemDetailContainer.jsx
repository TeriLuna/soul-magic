import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {
  getFirestore,
  getDoc,
  doc,
} from "firebase/firestore";
import Loading from "../Loading/Loading";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /*----------------------------------------------------------------------------------*/
  //Atrapar ID con hook
  const { id } = useParams();
  /*----------------------------------------------------------------------------------*/

  useEffect(() => {
    setLoading(true);
    setError(false);

    const db = getFirestore();
    const item = doc(db, "Items", id);
    getDoc(item)
      .then((res) => {
        setProduct({ ...res.data() });
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, [id]);

  return (
    <>
      {loading ? <Loading /> : null}
      {error && <>Ocurrio un error, contacta al email</>}

      <div>
        <ItemDetail product={product} />
      </div>
    </>
  );
}
