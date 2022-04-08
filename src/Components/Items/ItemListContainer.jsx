import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import NavBar from "../NavBar/NavBar";
import customFetch from "../utils/customFetch";
import { productsData } from "../utils/productsData";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  // Promesa
  const [products, setProducts] = useState([]);

  useEffect(() => {
    customFetch(3000, productsData)
      .then((result) => setProducts(result))
      .catch((error) => console.log(error));
  }, [products]);

  return (
    <div>

      {/* Main */}
      <main className="page-wrapper">
        <div className="portfolio-area py-3 bg_color--5">
          <div className="portfolio-sacousel-inner">
            <div className="container">

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
              <div className="row ">
                <ItemList products={products} />
              </div>
              {/* End Products list */}

            </div>
          </div>
        </div>
      </main>
      {/* End Main */}

    </div>
  );
}
