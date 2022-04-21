import React from "react";
import { Container } from "react-bootstrap";
import contactImg from "../../assets/images/about/about-12.jpg";

export default function Contact() {
  return (
    <>
      <div className="section">
        <Container>
          <div className="contact-form--1 mt--50">
            <div className="row row--35 align-items-start">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="section-title text-left mb--50">
                  <span className="subtitle">Let's Say Hi</span>
                  <h2 className="title">Contact With Us.</h2>
                  <div className="im_address">
                    <span>Call us directly:</span>
                    <a className="link im-hover" href="phone">
                      +111 (0)55 5869 8976
                    </a>
                  </div>
                  <div className="im_address mt--5">
                    <span>Contact Email:</span>
                    <a className="link im-hover" href="email">
                      example@gmail.com
                    </a>
                  </div>
                </div>

                {/* FORM */}
                <div className="form-wrapper">
                  <form action="">
                    <div className="rn-form-group">
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="rn-form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="rn-form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <div className="rn-form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="rn-form-group">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                    <div className="rn-form-group">
                      <button
                        className="btn-default"
                        type="submit"
                        value="submit"
                        name="submit"
                      >
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
                {/* END FORM */}
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="thumbnail mb_md--30 mb_sm--30">
                  <img src={contactImg} alt="Me" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
