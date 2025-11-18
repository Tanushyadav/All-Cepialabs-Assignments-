function javascriptFunction() {
  return "Hello world";
}

// React component using function declaration
export default function FunctionDeclarations() {
  const message = javascriptFunction();

  return (
    <div>
      <h2>Function Declarations</h2>
    </div>
  );
}
/* What I learned from this topic:
 1. Function declarations can be call them before they are defined
 2. React components can be written using both function declarations and arrow functions
 3. I can use both styles in React, but I must remember arrow functions are not hoisted.
*/
