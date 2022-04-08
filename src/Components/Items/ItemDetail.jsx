import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import s from "./ItemDetails.module.css";

export default function ItemDetail({
  product: { name, price, description, id, image },
}) {

  return (
    <>
      <Container fluid>
        <Row>
          <h1>"{name}"</h1>
          <span> sku: {id}</span>
          <Col>
            <img className={s.productImg} src={image} alt={name} />
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
