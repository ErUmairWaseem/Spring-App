import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
//import { Button } from "reactstrap";

function App() {
  const btnHandle = () => {
    toast("this is my first message", { position: "top-center" });
  };
  return (
    <div>
      <ToastContainer />
      <h1>Hello</h1>
      <button
        type="button"
        class="btn btn-outline-secondary"
        onClick={btnHandle}
      >
        first react button
      </button>
    </div>
  );
}

export default App;
