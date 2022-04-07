import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

function Item({ id, name, category, price, image }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <Card key={id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <ItemCount stock={15} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Item;
