import React from "react";

export default function PromisesAsync() {
  const [avatar, setAvatar] = React.useState("");

  React.useEffect(() => {
    async function fetchAvatar() {
      const response = await fetch("https://api.github.com/users/tanushyadav");
      const data = await response.json();
      setAvatar(data.avatar_url);
    }

    fetchAvatar();
  }, []);

  return (
    <div>
      <h2>Promises + Async/Await</h2>
      <img src={avatar} alt="Avatar" width={80} />
    </div>
  );
}
/* What I learned from this topic:
 Promises handle asynchronous tasks using .then() and .catch()
 async/await makes promise-based code look cleaner and easier to read
 For async functions inside useEffect, we must define a separate async function
*/
