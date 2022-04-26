import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemList from "./ItemList";
import {
  collection,
  getFirestore,
  getDocs,
  where,
  query,
} from "firebase/firestore";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);

    const db = getFirestore();

    let itemsRef;
    if (!id) {
      itemsRef = collection(db, "Items");
    } else {
      itemsRef = query(collection(db, "Items"), where("category", "==", id));
    }

    getDocs(itemsRef, id)
      .then((res) => {
        const resp = res.docs.filter((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(resp);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? <Loading /> : null}
      {error && <>Ocurrio un error, contacta al email</>}

      {/* MAIN */}
      <main className="page-wrapper pt--50">
        <div className="portfolio-area">
          <div className="portfolio-sacousel-inner">
            <div className="container me--4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--40">
                    <h2 className="title">Our products</h2>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aut at veniam ipsa, temporibus velit, adipisci accusamus
                      minima molestiae amet nulla dolorum magnam porro quas
                      itaque doloribus culpa. Sunt, quod similique!
                    </p>
                  </div>
                </div>
              </div>

              {/* Products list */}
              <div className="row">
                <ItemList products={products} />
              </div>
              {/* End Products list */}
            </div>
          </div>
        </div>
      </main>
      {/* End Main */}
    </>
  );
}
