import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import customFetch from "../utils/customFetch";
import { productsData } from "../utils/productsData";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  // Promesa
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setError(false);
    setLoading(true);

    customFetch(500, productsData)
      .then((result) => {
        const productsFiltered = result.filter((item) => item.category === id);
        if (id) {
          setProducts(productsFiltered);
          setError(false);
        } else {
          setProducts(productsData);
          setError(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
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
