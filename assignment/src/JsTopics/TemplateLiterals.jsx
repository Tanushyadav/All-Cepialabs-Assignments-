
function old(name) {
  return "Hello " + name + "!";
}

function newway(name) {
  return `Hello again, ${name}!`;
}

// React component demonstrating template literals
export default function TemplateLiterals() {
  const user = "React Developer";
  const message = newway(user);

  const age = 20;
  const Info = `User age is ${age > 18 ? "Adult" : "Minor"}`;

  return (
    <div>
      <h2>Template Literals</h2>
      <p>{old(user)}</p>
      <p>{Info}</p>
    </div>
  );
}

/* What I learned from this topic:
  Template literals allow easier string building using backticks instead of quotes
  The ${} syntax lets us insert any JavaScript expression directly inside a string
  Template literals make dynamic values in JSX much cleaner
  They are more readable than using string concatenation with the + operator
*/

