import React, { useContext } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { CartContext } from "../../Context/CartProvider";
import { BsFillTrashFill } from "react-icons/bs";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

function CartViewWithProducts() {
  const { cart, totalPriceProducts, removeFromCart, clearCart } =
    useContext(CartContext);

  return (
    <>
      <div className="section-2xl">
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="fw-bold">Shopping Cart</h1>
              <hr />
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th>Imgage</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center">
                          <button
                            className="btn-default size-sm"
                            style={{ borderRadius: 5 + "px" }}
                            onClick={() => {
                              removeFromCart(item.product);
                            }}
                          >
                            <BsFillTrashFill />
                          </button>
                        </td>
                        <td width={"25%"}>
                          <img
                            src={item.product.imgb1}
                            alt={item.product.alt}
                            width={"25%"}
                          />
                        </td>

                        <td>{item.product.name}</td>
                        <td>$ {item.product.price}</td>
                        <td className="text-center">{item.count}</td>
                        <td>$ {item.count * item.product.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              {/* Clear cart button */}
              <Button
                variant="danger"
                onClick={() => {
                  clearCart();
                }}
                className="mb-5 mt-2"
              >
                Clear Cart
              </Button>
              {/* End clear cart button */}
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <h2 className="fw-bold">Order Summary</h2>
              <hr />
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
              <div className="d-grid gap-2 justify-content-center">
                <Link to="/form">
                  <button
                    className="btn-default"
                    style={{ borderRadius: 10 + "px" }}
                  >
                    <span>End Purchase</span>
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default function CartView() {
  const { cart } = useContext(CartContext);
  return cart.products !== undefined && cart.products.length !== 0 ? (
    <CartViewWithProducts />
  ) : (
    <EmptyCart />
  );
}
