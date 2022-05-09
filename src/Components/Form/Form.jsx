import React, { useContext, useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { CartContext } from "../../Context/CartProvider";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { CgMoon, CgSmile } from "react-icons/cg";
import { GiUbisoftSun } from "react-icons/gi";
import { BsStars } from "react-icons/bs";

export default function Form() {
  const { cart, totalPriceProducts } = useContext(CartContext);
  const [id, setId] = useState();
  const [showModalSuccessPurchase, setShowModalSuccessPurchase] =
    useState(false);
  const [showModalMissingData, setShowModalMissingData] = useState(false);
  const handleClose = () => {
    setShowModalSuccessPurchase(false);
    setShowModalMissingData(false);
  };

  const [buyer, setBuyer] = useState({
    fullname: " ",
    phone: " ",
    email: " ",
  });

  let date = serverTimestamp();

  const order = {
    ...buyer,
    date,
    cart,
    totalPrice: totalPriceProducts,
  };

  const handleOnChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEndPurchase = () => {
    if (buyer.fullname === " " || buyer.phone === " " || buyer.email === " ") {
      console.log("There are missing data");
      setShowModalMissingData(true);
    } else {
      console.log("The purchase has been completed");
      firebaseOrderData();
    }
  };
  const ProductsOrder = () => {
    return order.cart.products.map(({ product }) => {
      return (
        <>
          <p>
            <BsStars style={{ color: "orange" }} /> {product.name}
          </p>
        </>
      );
    });
  };

  const ModalPurchaseFillForm = () => (
    <>
      <Modal
        show={showModalMissingData}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton />
        <Container>
          <Row>
            <Modal.Body>
              Please fill the form to complete your purchase.{" "}
              <GiUbisoftSun size={30} style={{ color: "orange" }} />
            </Modal.Body>
          </Row>
        </Container>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  const onClick = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  const ModalPurchase = () => (
    <>
      <Modal
        show={showModalSuccessPurchase}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            Your purchase is ready! <CgMoon />
          </Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Modal.Body>
              <p>
                Thank you so much{" "}
                <span className="fw-bold theme-color">{buyer.fullname}</span>{" "}
                for your purchase!!!
                <br />
                We are happy to know that with this purchase you are in the path
                to connect with your escence and soul.
              </p>
              <p className="text-decoration-underline">
                This is the information of your purchase:
              </p>
              <ProductsOrder />
              <p className="mt--10">
                Total price was:{" "}
                <span className="fw-bold"> $ {order.totalPrice}</span>
              </p>
              <p>
                Status: Order id {" "}
                <span className="fw-bold theme-color">{id}</span> generated.
              </p>
              <p>
                We will contact you soon!!! <CgSmile color="green" />
              </p>
            </Modal.Body>
          </Row>
        </Container>
        <Modal.Footer className="justify-content-center">
          <button
            className="btn-default btn-outline btn-opacity"
            onClick={onClick}
          >
            Return to HOME
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );

  const firebaseOrderData = () => {
    const db = getFirestore();
    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order)
      .then((res) => {
        setId(res.id);
        setShowModalSuccessPurchase(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const endPurchaseButtonUI = (
    <div className="rn-form-group d-flex justify-content-end">
      <button
        className="btn-default"
        style={{ borderRadius: 10 + "px" }}
        type="submit"
        value="submit"
        name="submit"
        onClick={handleEndPurchase}
      >
        End Purchase
      </button>
    </div>
  );

  const formUI = (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} action="">
        <h1 className="fontWeight600">Shopping Cart</h1>
        <div className="rn-form-group">
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            onInput={handleOnChange}
            required
          />
        </div>
        <div className="rn-form-group">
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            onInput={handleOnChange}
            required
          />
        </div>
        <div className="rn-form-group">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onInput={handleOnChange}
            required
          />
        </div>
        {endPurchaseButtonUI}
      </form>
    </div>
  );

  const productsTable = (
    <>
      <Table responsive>
        <tbody>
          {cart.products.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <h6>{item.product.name}</h6>
                  <span>Qty: {item.count}</span>
                </td>
                <td>$ {item.count * item.product.price}</td>
              </tr>
            );
          })}
        </tbody>
        <tbody>
          <tr>
            <td>
              <h5>Total</h5>
            </td>
            <td>$ {totalPriceProducts}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );

  const sideBarCart = (
    <>
      <h2 className="fw-bold">Order Summary</h2>
      <hr />
      {productsTable}
    </>
  );

  return (
    <>
      {setShowModalMissingData ? <ModalPurchaseFillForm /> : null}
      {setShowModalSuccessPurchase ? <ModalPurchase /> : null}
      <div className="section-xl">
        <Container>
          <Row>
            <Col md={3} xs={12}>
              {sideBarCart}
            </Col>
            <Col md={{ span: 8, offset: 1 }} xs={12} className="mt-sm-5">
              {formUI}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
