import { useState } from "react";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

const products = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Headphones", price: 1500 },
  { id: 3, name: "Keyboard", price: 800 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <ProductList products={products} addToCart={addToCart} />

      <CartSummary cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
