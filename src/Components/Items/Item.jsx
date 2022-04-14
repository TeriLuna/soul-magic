import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function Item({ id, name, category, price, image }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <Card key={id}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title className="d-flex flex-lg-row">
              <Link to={'/item/' + id}>{name}</Link>
            </Card.Title>
            <Card.Text className="d-flex flex-lg-row flex-end">${price}</Card.Text>
            <span className="text-italic">{category}</span>
            <ItemCount className='mt-5' stock={15} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Item;
