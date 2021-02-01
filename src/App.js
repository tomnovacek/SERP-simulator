import React, { useState } from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";
import "./styles.css";
import Serp from "./Serp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, setState] = useState({});
  const url = "https://reqview.com";
  const title = "Requirements Management Tool | Easy & Flexible";
  const description =
    "Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!";
  /*   const [state, setState] = useState([{
  url: "reqview.com", 
  title: "Requirements Management Tool | Easy & Flexible",
  description: "Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"}]); */

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  return (
    <div className="App">
      <h1>SERP Simulator</h1>

      <div>
        <h3>Google SERP Preview</h3>
        <h2>Update titles and meta description</h2>
        <div>
          <Form>
            <FormGroup row>
              <Label sm={1} for="formGroupExampleInput">
                URL
              </Label>
              <Col>
                <Input
                  sm={11}
                  type="text"
                  className="form-control"
                  id="url"
                  name="url"
                  defaultValue="https://reqview.com"
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={1} for="formGroupExampleInput">
                Title
              </Label>
              <Col>
                <Input
                  sm={11}
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  defaultValue="Requirements Management Tool | Easy & Flexible"
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={1} for="formGroupExampleInput2">
                Description
              </Label>
              <Col>
                <Input
                  sm={11}
                  type="textarea"
                  className="form-control"
                  name="description"
                  id="description"
                  defaultValue="Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={1} for="formGroupExampleInput2">
                Bold kw
              </Label>
              <Col>
                <Input
                  sm={11}
                  type="text"
                  classNameName="form-control"
                  id="keyword"
                  defaultValue="Requirements management"
                />
              </Col>
            </FormGroup>
            <button>Update</button>
          </Form>
        </div>
        <Serp
          url={state.url ? state.url : url}
          title={state.title ? state.title : title}
          description={state.description ? state.description : description}
        />
        <Serp
          url="https://www.guru99.com/traceability-matrix"
          title="What is Requirements Traceability Matrix (RTM)? Example ..."
          description="A Traceability Matrix is a document that co-relates any two-baseline documents that require a many-to-many ..."
        />
        <Serp
          url="www.perforce.com › resources › requirements-traceabil..."
          title="What Is a Requirements Traceability Matrix? Your A–Z Guide ..."
          description="A traceability matrix in software testing — otherwise known as a test matrix — is used to prove that tests have been run. It documents test cases, test runs, and test results. Requirements and issues may also be used in a test matrix."
        />
        <Serp
          url="www.reqview.com › blog › 2016-05-31-news-end-to-e..."
          title="How To Progress from Traceability Matrix to Automatic Reports?"
          description="Dec 30, 2020 — A traceability matrix is a table displaying relations between high-level stakeholder requirements, detailed software or hardware requirements, ..."
        />
        <Serp
          url="www.reqview.com › blog › 2016-05-31-news-end-to-e..."
          title="How To Progress from Traceability Matrix to Automatic Reports?"
          description="Why Is Requirements Traceability Important? · General: IEC 61508 — Functional Safety of Electrical/Electronic/Programmable Electronic Safety- "
        />
      </div>
    </div>
  );
}

export default App;
