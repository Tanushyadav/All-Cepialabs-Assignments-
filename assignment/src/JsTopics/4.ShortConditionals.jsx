import React from "react";

export default function ShortConditionals() {
  const isLoggedIn = true;
  const userName = "Tanush";
  const isAdmin = false;

  return (
    <div>
      <h2>Short Conditionals</h2>

      {/* Ternary operator example */}
      <p>{isLoggedIn ? `Welcome back, ${userName}!` : "Please log in."}</p>

      {/* && operator example */}
      <p>{isLoggedIn && "You are successfully logged in!"}</p>

      {/* || operator example */}
      <p>{isAdmin || "You do not have admin privileges."}</p>
    </div>
  );
}
/* What I learned from this topic:
  Short conditionals like &&, ||, and the ternary operator make JSX cleaner and more concise
  The ternary operator replaces long if-else statements and can be used directly inside JSX
  The && operator renders something only when the first condition is true
  The || operator shows the fallback value when the first condition is falsy
*/
