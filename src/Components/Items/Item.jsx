import React, { memo } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

export default memo(function Item({ product }) {
  const { id, name, price, imgb1 } = product;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <Card key={id}>
          <Link to={"/item/" + id}>
            <Card.Img variant="top" src={imgb1} />
          </Link>
          <Card.Body>
          <Col md={12}>
              <Link to={"/item/" + id} className="fw-bolder text-black">
                {name}
              </Link>
              <span className="fw-bold text-black float-end">${price}</span>
            </Col>
            <Col md={12}>
              <ItemCount key={id} product={product} className="mt-5" />
            </Col>
          </Card.Body>
        </Card>
      </div>
    </>
  );
});
