import CartItem from "./CartItem";

export default function CartSummary({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ₹{total}</p>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}
