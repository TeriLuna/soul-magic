import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div
        className="fullscreen d-flex align-items-center justify-content-center bg_image bg_image--25"
        data-bg-src="../assets/images/background.jpg"
      >
        <div className="bg-black-04">
          <div className="container text-center">
            <div className="position-top text-center">
              <h4>Soul Magic</h4>
            </div>
            <div className="position-middle">
              <div className="row">
                <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <h1 className="display-1 font-weight-extra-light">404</h1>
                  <h5 className="font-weight-light text-light">
                    Sorry, It appears that the page you were looking for doesn't
                    exist or might have been moved.
                  </h5>
                  <Link
                    to="/"
                    className="bnt btn-xl btn-radius btn-reveal-left-white mt-4"
                  >
                    <i className="fas fa-home"></i>
                    <span>Go home page</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="position-bottom text-center">
              <p>&copy; 2022 Fcking Brand Me, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
