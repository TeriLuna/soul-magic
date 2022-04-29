import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

export default function NotFound() {
  return (
    <>
      <div
        className="fullscreen d-flex align-items-center justify-content-center bg_image bg_image--22"
        data-bg-src="../assets/images/background.jpg"
      >
        <div className="section bg-black-04">
          <div className="container text-center">
            <div className="position-top text-center">
              <h2 className="fw-light title theme-gradient">Soul Magic</h2>
            </div>
            <div className="position-middle">
              <div className="row">
                <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <h1 className="display-1 fw-lighter text-white">404</h1>
                  <h5 className="font-weight-light text-light">
                    Sorry, It appears that the page you were looking for doesn't
                    exist or might have been moved.
                  </h5>
                  <Link to="/">
                    <Button className="btn-default btn-border btn-opacity">
                      <span className="mr--30 fw-bold">Back to Home</span>
                      <GoHome size={25} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="position-bottom text-center mt--100 text-white-50">
              <p>&copy; 2022 Fcking Brand Me, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
