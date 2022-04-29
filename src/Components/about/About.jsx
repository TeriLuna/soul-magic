import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GiDrippingStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import imgAbout from "../../assets/images/about/about-1.jpg";
import logo from "../../assets/images/logo/logo3.png";

export default function About() {
  let title = "Conecting the soul with the universe!";

  const namesItemOne = [
    "My goal is to help most people to connect with the universe, with the essence that is themselves.",
    "There is a reason why are you here. Nothing that occurs is an aleatory event. So, let's see why your Magic Soul is connecting with this Magic Soul.",
    "About me? There's not too much to say. I'm nobody... No-body. My soul was claiming for this site so, here I'm if you need anything.",
    "About the page? This is just a tool to help you, to help all the people in their spiritual path.",
    "What do you think is the energy? Have you ever asked yourself about it? what is the water? And I'm not talking about what component it or how to use it, I mean, what is it?",
  ];

  return (
    <>
      <div className="section-xl">
        <div className="about-wrapper">
          <Container>
            <Row className='row--35 align-items-center'>
              <Col lg={5} md={12}>
                <div className="thumbnail">
                  <img alt="Soul Magic creators" src={imgAbout} />
                </div>
              </Col>
              <Col lg={7} md={12}>
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <ul className="list-style--1">
                      {namesItemOne.map((name, index) => {
                        return (
                          <li key={index}>
                            <GiDrippingStar />
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
                    <div className="d-flex justify-content-end">
                      <img src={logo} alt="Soul Magic's logo" style={{ width: "500px" }} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
