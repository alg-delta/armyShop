import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data from "./data";
import { useState } from "react";
import Vidguk from "./components/vidguk/Vidguk";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };
  const add10 = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 10 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 10 }]);
    }
  };
  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const remove10 = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 10 && productInCart.number > 10) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 10 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const buy = () => {
    setCartItems([]);
    alert("Ваше замовлення прийнято");
  };
  return (
    <div className="App">
      <Header count={cartItems.length} />

      <div>
        <Main products={data} add={add} />

        <Cart
          cartItems={cartItems}
          add={add}
          add10={add10}
          remove={remove}
          remove10={remove10}
          buy={buy}
        />
        <Vidguk />
      </div>
    </div>
  );
}

export default App;
