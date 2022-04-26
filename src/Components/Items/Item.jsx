import React, { memo } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

export default memo(function Item({ product }) {
  const { id, name, category, price, image } = product;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <Card key={id}>
          <Link to={"/item/" + id}>
            <Card.Img variant="top" src={image} />{" "}
          </Link>
          <Card.Body>
            <Card.Title className="d-flex flex-lg-row">
              <Link to={"/item/" + id}>{name}</Link>
            </Card.Title>
            <Card.Text className="d-flex flex-lg-row flex-end">
              ${price}
            </Card.Text>
            <span className="text-italic">{category}</span>
            <ItemCount key={id} product={product} className="mt-5" />
          </Card.Body>
        </Card>
      </div>
    </>
  );
});
