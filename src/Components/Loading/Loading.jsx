import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <>
      <div className="section d-flex justify-content-center flex-wrap" >
        <div className="container align-content-center d-flex">
          <div className="row">
            <div>
              <Spinner animation="grow" variant="info" style={{width: 100, height:100}}>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
