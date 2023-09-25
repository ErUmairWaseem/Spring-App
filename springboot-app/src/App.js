import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div style={{ background: "grey", width: 440 }}>
      <Header name="Umair" title="first card" />
      <hr />
      <Header name="Waseem" title="second card" />
      <h1>This is my react app</h1>
      <p>This is paragraph in app.js</p>
      <hr />
      <Header name="Sufiyan" title="third card" />
      <hr />
      <Header name="Uroos" title="Footer" />
    </div>
  );
}

export default App;
