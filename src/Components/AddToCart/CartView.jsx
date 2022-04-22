import React, { useContext } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { CartContext } from "../../Context/CartProvider";
import { BsFillTrashFill } from "react-icons/bs";
import EmptyCart from "./EmptyCart";

function CartViewWithProducts() {
  const { cart, totalPriceProducts, removeFromCart, clearCart } =
    useContext(CartContext);

  return (
    <>
      <div className="section pt--100">
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="fontWeight600">Shopping Cart</h1>
              <hr />
              <Table responsive>
                <thead>
                  <tr>
                    <th style={{ width: "0%" }}></th>
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
                          <BsFillTrashFill
                            onClick={() => {
                              removeFromCart(item.product);
                            }}
                          />
                        </td>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td>{item.count}</td>
                        <td>{item.count * item.product.price}</td>
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
              >
                Clear Cart
              </Button>
              {/* End clear cart button */}
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <h2 className="fontWeight400">Order Summary</h2>
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
              <div className="d-grid gap-2">
                <Button>End Purchse</Button>
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
