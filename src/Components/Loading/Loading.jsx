import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactLoading from "react-loading";

export default function Loading() {
  const LoadView = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={889} width={597} />
  );

  return (
    <>
      <div className="section-2xl">
        <Container>
          <div className="position-middle">
            <Row>
              <Col md={{ span: 8, offset: 3 }}>
                <LoadView type="spinningBubbles" color="#B4C424" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
