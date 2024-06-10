import React from "react";
import Alert from "react-bootstrap/Alert";

import Button from "react-bootstrap/Button";
export default function Cart(props) {
  const { cartItems, add, add10, remove10, remove, buy } = props;
  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.number * product.price,
    0
  );
  return (
    <Alert id="cart" variant="warning">
      <Alert.Heading>Корзина</Alert.Heading>
      {cartItems.length === 0 && <p>Корзина порожня</p>}
      <table>
        <tr>
          <td width="25%">назва</td>
          <td width="25%">кількість</td>
          <td width="25%">ціна</td>
          <td width="25%">всього</td>
        </tr>
        {cartItems.map((product) => (
          <tr>
            <td width="25%">{product.name}</td>
            <td width="25%">{product.number}</td>
            <td width="25%">{product.price}</td>
            <td width="25%">{product.number * product.price}€</td>
            <Button onClick={() => remove(product)} variant="danger">
              -
            </Button>
            <Button onClick={() => add(product)} variant="success">
              +
            </Button>
            <Button onClick={() => remove10(product)} variant="danger">
              -10
            </Button>
            <Button onClick={() => add10(product)} variant="success">
              +10
            </Button>
          </tr>
        ))}
      </table>
      <p className="mb-0">Всього для сплати {totalPrice}€ </p>
      <Button onClick={buy} disabled={cartItems.length === 0} variant="warning">
        Оформлити замовлення
      </Button>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}
