import React, { useState } from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";
/* import rp from "request-promise";
import cheerio from "cheerio"; */

function MetaForm() {
  const [state, setState] = useState({});
  /*   const [state, setState] = useState([{
    url: "reqview.com", 
    title: "Requirements Management Tool | Easy & Flexible",
    description: "Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"}]); */

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  /*  componentDidMount() {
    // use the request-promise library to fetch the HTML from pokemon.org
    rp("https://web.com/").then((html) => {
      let title = [];
      let $ = cheerio.load(html);
      console.log(html);
    });
  } */

  return (
    <Form>
      <FormGroup row>
        <Label sm={2} for="formGroupExampleInput">
          URL
        </Label>
        <Col>
          <Input
            sm={10}
            type="text"
            className="form-control"
            id="url"
            name="url"
            placeholder="https://reqview.com"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2} for="formGroupExampleInput">
          Title
        </Label>
        <Col>
          <Input
            sm={10}
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Requirements Management Tool | Easy & Flexible"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2} for="formGroupExampleInput2">
          Description
        </Label>
        <Col>
          <Input
            sm={10}
            type="textarea"
            className="form-control"
            name="description"
            id="description"
            placeholder="Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2} for="formGroupExampleInput2">
          Bold kw
        </Label>
        <Col>
          <Input
            sm={10}
            type="text"
            classNameName="form-control"
            id="keyword"
            placeholder="Requirements management"
          />
        </Col>
      </FormGroup>
      <button>Update</button>
    </Form>
  );
}

export default MetaForm;
