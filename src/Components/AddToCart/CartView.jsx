import React, { useContext } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { CartContext } from "../../Context/CartProvider";
import { BsFillTrashFill } from "react-icons/bs";

export default function CartView() {
  const { cart, totalPriceProducts, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="fontWeight600">Shopping Cart</h1>
              <hr />
              <Table responsive>
                <thead>
                  <tr>
                    <th> </th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <BsFillTrashFill onClick={()=>{removeFromCart(item.product)}} />
                      </td>
                      <td>{item.product.name}</td>
                      <td>{item.product.price}</td>
                      <td>{item.count}</td>
                      <td>{item.count * item.product.price}</td>
                    </tr>
                  ))}
                </tbody>
                Total: {totalPriceProducts}
                <Button variant="danger" onClick={()=>{clearCart()}}>
                  Clear Cart
                </Button>
              </Table>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <h2 className="fontWeight400">Order Summary</h2>
              <hr />
              <Table responsive></Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
