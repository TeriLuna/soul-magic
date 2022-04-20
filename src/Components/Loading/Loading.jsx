import React from "react";
import { Spinner } from "react-bootstrap";

const styles = {
  center: {
    marginLeft: -50,
    marginRight: -50,
    marginTop: -50,
  }
}

export default function Loading() {
  return (
    <>
      <div className="section">
        <div className="container fullscreen w-100">
          <div className="row">
            <div className={styles.center}>
              <Spinner animation="grow" variant="info">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
