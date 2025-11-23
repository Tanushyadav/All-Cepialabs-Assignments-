export const siteName = "React App";
export const version = 1;

export default function getSiteName() {
  return siteName;
}

//React Component Using Imports
import React from "react";
import getSiteName, { siteName, version } from "./8.Modules"; 

export default function Modules() {
  return (
    <div>
      <h2>ES Modules + Import/Export</h2>
      <p>Site: {siteName}</p>
      <p>Version: {version}</p>
      <p>Default Import: {getSiteName()}</p>
    </div>
  );
}
/* What I learned from this topic:
 ES modules let me share code between files using import and export.
 A file can have multiple named exports but only one default export.
 Default exports can be imported with any name, named exports must use curly braces.
 This is very useful for organizing utilities, constants, and React components.
*/