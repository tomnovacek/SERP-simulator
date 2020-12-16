import React from "react";
import "./styles.css";
import MetaForm from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>SERP Simulator</h1>
      <h2>Insert titles and meta description</h2>
      <div>
        <MetaForm />
      </div>
    </div>
  );
}
