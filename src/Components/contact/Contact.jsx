import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import contactImg from "../../assets/images/about/about-12.jpg";
import { ImHappy, ImHeart } from "react-icons/im";

export default function Contact() {
  const [showModalContact, setShowModalContact] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullname: " ",
    email: " ",
    phone: " ",
    subject: " ",
    message: " ",
  });

  const handleOnChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonSent = () => {
    console.log(contactForm);
    if (
      contactForm.fullname === " " ||
      contactForm.email === " " ||
      contactForm.phone === " " ||
      contactForm.subject === " " ||
      contactForm.message === " "
    ) {
      console.log("There are missing data in the form contact");
    } else {
      console.log("Your message has been sent!");
      setShowModalContact(true);
    }
  };

  const onClick = () => {
    setShowModalContact(false)
    window.location.href = "/contact";
  };

  const ShowModalContact = () => {
    return (
      <>
        <Modal
          show={showModalContact}
          onHide={() => setShowModalContact(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Message sent
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <h4>Hi there!!!  <ImHappy size={20} /></h4>
                  <h5>
                    Your message has been sent! <br /> Thank you for write us{" "}
                    <span className="theme-color">{contactForm.fullname}</span>, we will contact you soon!! 
                    <ImHeart size={18} color={'red'} className='ml--10'/>
                  </h5>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={onClick}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formContact = (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} action="">
        <div className="rn-form-group">
          <input
            type="text"
            name="fullname"
            placeholder="Your Name"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="rn-form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="rn-form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="rn-form-group">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="rn-form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleOnChange}
            required
          ></textarea>
        </div>

        <div className="rn-form-group">
          <button
            className="btn-default"
            type="submit"
            value="submit"
            name="submit"
            onClick={handleButtonSent}
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      {setShowModalContact ? <ShowModalContact /> : null}
      <div className="section">
        <Container>
          <div className="contact-form--1">
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
                {formContact}
                {/* END FORM */}
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="thumbnail mb_md--30 mb_sm--30">
                  <img
                    src={contactImg}
                    alt="Teri, the person who made this posible"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
