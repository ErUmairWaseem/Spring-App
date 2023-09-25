import React from "react";

function Header({ name, title }) {
  return (
    <div style={{ background: "yellow", padding: 20, width: 400 }}>
      <h1>{title}</h1>
      <p>{name}</p>
      <p>This is a header component</p>
    </div>
  );
}
export default Header;
