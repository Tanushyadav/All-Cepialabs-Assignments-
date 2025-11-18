// Regular arrow function
const sayHello = (text) => {
  return `Hello, ${text}!`;
};

// React component written as an arrow function
const ArrowFunctions = () => {
  const msg1 = sayHello("React");
 
  return (
    <div>
      <h2>Arrow Functions</h2>
      <p>{msg1}</p>
    </div>
  );
};

export default ArrowFunctions;

/* What I learned from this topic:
 Arrow functions provide a shorter and cleaner syntax
 They support implicit returns, allowing components or functions to be written in a single line
 Arrow functions are NOT hoisted, so they must be declared before they are used
 Both arrow functions and function declarations can be used to create React components
*/