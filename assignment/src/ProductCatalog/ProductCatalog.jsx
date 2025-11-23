import { useEffect, useState } from "react";

// Sample products
const sampleProducts = [
  { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1299, inStock: true, image: '/laptop.jpg' },
  { id: 2, name: 'Cotton T-Shirt', category: 'Clothing', price: 29, inStock: false, image: '/tshirt.jpg' },
  { id: 3, name: 'React Handbook', category: 'Books', price: 39, inStock: true, image: '/book.jpg' },
];

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
    }, 1000);
  }, []);

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    const catMatch = category === "All" || product.category === category;
    const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div className="product-catalog">
      
      {/* Category Filters */}
      <div className="filters">
        {["All", "Electronics", "Clothing", "Books"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginTop: "10px" }}
      />

      {/* Loading State */}
      {loading && <p className="loading">Loading products…</p>}

      {/* Empty State */}
      {!loading && filteredProducts.length === 0 && (
        <p className="empty">No products found.</p>
      )}

      {/* Product Grid */}
      <div className="grid">
        {!loading &&
          filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>

              {product.inStock ? (
                <span className="in-stock">In Stock</span>
              ) : (
                <span className="out-stock">Out of Stock</span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
