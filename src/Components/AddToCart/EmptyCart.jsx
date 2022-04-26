import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <>
      <div className="section pt--100">
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <h5>
                It looks that you don't have any products in the cart, let's
                return to home and look for something interesting!
              </h5>
            </Col>
            <Col style={{marginTop: 20}}>
              <Link to="/" className="btn-default btn-outline btn-opacity">
                Return to home
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
