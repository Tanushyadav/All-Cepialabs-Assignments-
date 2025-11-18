import React from "react";

export default function ArrayMethods() {
  const programmers = ["Tanush", "Sonu", "Simran"];

  // Using .map()
  const mappedList = programmers.map((name) => <li key={name}>{name}</li>);

  // Using .filter() + .map()
  const filteredList = programmers
    .filter((name) => !name.startsWith("S"))
    .map((name) => <li key={name}>{name}</li>);

  // Using .reduce() to achieve same filtering
  const reducedList = programmers
    .reduce((acc, name) => {
      if (!name.startsWith("S")) acc.push(name);
      return acc;
    }, [])
    .map((name) => <li key={name}>{name}</li>);

  return (
    <div>
      <h2>Array Methods: map(), filter(), reduce()</h2>

      <h3>.map()</h3>
      <ul>{mappedList}</ul>

      <h3>.filter() + .map()</h3>
      <ul>{filteredList}</ul>

      <h3>.reduce() version</h3>
      <ul>{reducedList}</ul>
    </div>
  );
}
/* What I learned from this topic:
    .map(), .filter(), and .reduce() are essential array methods used constantly in React
    .map() helps create lists of JSX elements by transforming each item in an array
    .filter() removes items based on conditions and is often chained with .map()
    .reduce() is the most powerful, allowing arrays to be converted into any value or structure
    These methods return new arrays and do not mutate the original one
*/
