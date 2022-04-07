import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import s from "./ItemDetails.module.css";


export default function ItemDetail({
  product: { name, price, description, id, image },
}) {
  console.log({ name, image });
  return (
    <>
      <Container fluid>
        <Row>
          <h1>"222 {name}"</h1>
          <Col>
            <img className={s.productImg} src={image} alt={name} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
