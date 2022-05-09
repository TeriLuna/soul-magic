import React, { useState } from "react";
import { Accordion, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import AddToCartButton from "../AddToCart/AddToCartButton";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail(product) {
  const {
    name,
    price,
    description,
    imgb1,
    imgb2,
    imgb3,
    alt,
    category,
    minidescription,
  } = product.product;
  const [hiddenCount, setHiddenCount] = useState(true);
  const handleHidden = () => {
    setHiddenCount((s) => !s);
  };

  const { id } = useParams();

  return (
    <>
      <div className="section">
        <main className="page-wrapper">
          <Container>
            <Row>
              <Col md={6}>
                <Carousel fade>
                  <Carousel.Item>
                    <img className="d-block w-100" src={imgb1} alt={alt} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={imgb2} alt={alt} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={imgb3} alt={alt} />
                  </Carousel.Item>
                </Carousel>
              </Col>

              <Col md={{side:5, offset:1}} className="mt-sm-4">
                <h1 className="text-center fw-bolder">{name}</h1>
                <div className="text-center">
                  <h3 className="theme-color fw-bold">$ {price}</h3>
                  <p className="fw-lighter">
                    Item: {id}
                    <span className="fw-light theme-color "> | | </span>
                    Category: {category}
                  </p>
                  <h5 className="mt--20 fw-light">{minidescription}</h5>
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
                      Every product will be shipped within 3-5 days. Please check your email for the tracking number after you place your order. Shipping is free for all orders in the Colombia and over $150.000.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Warranty</Accordion.Header>
                    <Accordion.Body className=" text-break">
                      Books: 1 month warranty just for the book flap.
                      Quartz:  2 months just to see that your quartz arrived in perfects conditions. We will send you a replacement if it is not.
                      Tibetan bowls: 1 year warranty.
                      Rest of the products: 3 months of warranty.ou a replacement if it is not.
                      Tibetan bowls: 1 year warranty.
                      Rest of the products: 3 months of warranty.
                      Please send us an email with the photo of the product you want to get a warranty for and tell us what happened to it and we will contact you as soon as possible to coordinate the replacement.
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
