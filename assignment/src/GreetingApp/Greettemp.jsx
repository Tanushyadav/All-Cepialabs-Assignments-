import { useState } from "react";

export default function GreetingApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [success, setSuccess] = useState("");

  const isValid =
    name.length >= 2 &&
    /\S+@\S+\.\S+/.test(email) &&
    password.length >= 8 &&
    confirm === password;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("Registration Successful!");
  };

  return (
    <div>
      <h2>Mini Greeting App</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name.length < 2 && <p style={{ color: "red" }}>Name must be 2+ letters</p>}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!/\S+@\S+\.\S+/.test(email) && email && (
          <p style={{ color: "red" }}>Invalid Email</p>
        )}

        <input
          type="password"
          placeholder="Password (8+ chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.length < 8 && password && (
          <p style={{ color: "red" }}>Password must be 8+ chars</p>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {confirm !== password && confirm && (
          <p style={{ color: "red" }}>Passwords do not match</p>
        )}

        <button disabled={!isValid}>Submit</button>
      </form>

      {success && <h3 style={{ color: "green" }}>{success}</h3>}
    </div>
  );
}
