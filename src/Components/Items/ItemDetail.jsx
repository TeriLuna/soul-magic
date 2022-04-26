import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCart/AddToCartButton";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail(product) {
  const { name, price, description, id, image, alt } = product.product;
  const [hiddenCount, setHiddenCount] = useState(true);
  const handleHidden = () => {
    setHiddenCount((s) => !s);
  };

  return (
    <>
      <div className="section">
        <main className="page-wrapper py-5">
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
              <Col md={5} className="mt-sm-4">
                <h1 className="text-center">{name}</h1>
                <div className="text-center">
                  <h3 className="mb-0 theme-color fontWeight400">$ {price}</h3>
                  <span className="fontWeight100"> Item: {id}</span>
                </div>
                <Col className="mt-5 text-center">
                  {hiddenCount ? (
                    <ItemCount
                      product={product.product}
                      handleHidden={handleHidden}
                    />
                  ) : (
                    <Link to="/cart">
                      <AddToCartButton />
                    </Link>
                  )}
                </Col>
                <Accordion className="mt-5">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Product Description</Accordion.Header>
                    <Accordion.Body>{description}</Accordion.Body>
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
