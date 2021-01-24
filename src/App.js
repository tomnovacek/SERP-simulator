import React from "react";
import "./styles.css";
import MetaForm from "./Form";
import Serp from "./Serp";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>SERP Simulator</h1>

      <div>
        <h3>Google SERP Preview</h3>
        <h2>Update titles and meta description</h2>
        <div>
          <MetaForm />
        </div>
        <Serp
          url="https://reqview.com"
          title="Requirements Management Tool | Easy & Flexible"
          description="Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"
        />
        <Serp
          url="https://reqview.com"
          title="Requirements Management Tool | Easy & Flexible"
          description="Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"
        />
        <Serp
          url="https://reqview.com"
          title="Requirements Management Tool | Easy & Flexible"
          description="Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"
        />
        <Serp
          url="https://reqview.com"
          title="Requirements Management Tool | Easy & Flexible"
          description="Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"
        />
        <Serp
          url="https://reqview.com"
          title="Requirements Management Tool | Easy & Flexible"
          description="Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"
        />
      </div>
    </div>
  );
}
