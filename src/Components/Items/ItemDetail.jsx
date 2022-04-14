import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import s from "./ItemDetail.module.css";

export default function ItemDetail({
  product: { name, price, description, id, image, alt },
}) {
  return (
    <>
      <div className="section">
        <main className="page-wrapper">
          <Container>
            <Row>
              <Col md={2}>
                <ul className="">
                  <li>
                    <a href="/">
                      <img src={image} alt={alt} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={image} alt={alt} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={image} alt={alt} />
                    </a>
                  </li>
                </ul>
              </Col>

              <Col md={5}>
                <img src="https://picsum.photos/800/900/?random" alt={alt} />
              </Col>
              <Col md={5}>
                <h1>"{name}"</h1>
                <span> sku: {id} ... </span>
                <span>{price}</span>
                <p>{description}</p>
                <ItemCount className="" />
                <Accordion className="mt-5">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Product Description</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Shipping Details</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Warranty</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>
  );
}
