import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../footer/Footer";

const HomeList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Soul Magic",
    description: "Connecting the soul to everything",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

export default function HomeHero() {
  return (
    <>
      <div className="active-dark bg_color--10">
      <NavBar />
        <div className="slider-wrapper">
          {HomeList.map((value, index) => (
            <div
              className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--24"
              key={index}
              data-black-overlay="6"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      {value.title ? (
                        <h1 className="title theme-gradient">{value.title}</h1>
                      ) : (
                        ""
                      )}
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="btn-default btn-border btn-opacity"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
