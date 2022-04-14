import React from "react";
import { Container } from "react-bootstrap";
import { FiCheck, FiHeart, FiSend, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function About() {
  let title = "Conecting the soul with the universe!";

  const namesItemOne = [
    "loreum ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.",
    "loreum ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.",
    "loreum ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.",
    "loreum ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.",
    "loreum ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.",
  ];

  // const imgProfile = URL("https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-15/121740249_1636107346549468_8756983190730815149_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=rnS9MzJXh_wAX_pO_9k&edm=AABBvjUBAAAA&ccb=7-4&ig_cache_key=MjQyMTQzNjU4MjI0OTQ0MzcwNQ%3D%3D.2-ccb7-4&oh=00_AT-vFVJuHdGzIY4_2MT-7BmK-3H02H9C2tjIJX4xNp7Kbw&oe=625DD3FD&_nc_sid=83d603")

  return (
    <>
      <div className="section">
        <div className="about-wrapper py-5">
          <Container>
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="https://picsum.photos/400/500/?random"
                    alt="Profile of creator"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <div className="icon">
                      <FiHeart />
                    </div>
                    <h2 className="title">{title}</h2>
                    <ul className="list-style--1">
                      {namesItemOne.map((name, index) => {
                        return (
                          <li key={index}>
                            <FiStar />
                            {name}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="purchase-btn mt--30">
                      <Link className="btn-transparent" to="/">
                        SOUL MAGIC
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
