import { useState } from "react";

const fruits = ["Apple", "Banana", "Mango", "Avocado", "Orange"];

export default function FruitApp() {
  const [showAOnly, setShowAOnly] = useState(false);

  // Filter fruits when "A Only" mode is active
  const filteredFruits = showAOnly
    ? fruits.filter((fruit) => fruit.startsWith("A"))
    : fruits;

  return (
    <div className="fruit-app">
      <h2>My Favorite Fruits</h2>

      {/* Button to toggle filter */}
      <button onClick={() => setShowAOnly(!showAOnly)}>
        {showAOnly ? "Show All Fruits" : "Show Fruits Starting with A"}
      </button>

      <ul>
        {/* If list is empty → show message */}
        {filteredFruits.length === 0 ? (
          <p>No fruits found</p>
        ) : (
          filteredFruits.map((fruit) => <li key={fruit}>{fruit}</li>)
        )}
      </ul>
    </div>
  );
}
