export default function ProductList({ products, addToCart }) {
  return (
    <div>
      <h3>Products</h3>
      {products.map((p) => (
        <div key={p.id}>
          <p>
            {p.name} – ₹{p.price}
          </p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
