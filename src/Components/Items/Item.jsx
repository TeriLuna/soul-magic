import React from "react";
import { Button, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

function Item({ id, name, category, price, image }) {
  return (
    <>
      <Card key={id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <ItemCount stock={15} />
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
