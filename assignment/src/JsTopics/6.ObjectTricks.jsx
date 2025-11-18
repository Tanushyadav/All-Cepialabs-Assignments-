// Property shorthand
const name = "Reed";
const user = {
  name, // same as name: name
};

// Object destructuring
const profile = {
  age: 28,
  isEnglishSpeaker: true,
};

const { age, isEnglishSpeaker } = profile;

// Spread operator to copy/merge objects
const moreInfo = { country: "USA" };
const mergedUser = {
  ...user,
  ...profile,
  ...moreInfo,
};

export default function ObjectTricks() {
  return (
    <div>
      <h2>Object Tricks</h2>
      <p>User: {user.name}</p>
      <p>Age: {age}</p>
      <p>Speaks English: {isEnglishSpeaker ? "Yes" : "No"}</p>
      <p>Merged Country: {mergedUser.country}</p>
    </div>
  );
}
/* What I learned from this topic:
 Object property shorthand lets me use a variable name as both key and value
 Destructuring helps extract object properties into variables easily
 The spread operator lets me copy or merge objects without manually listing properties
*/
