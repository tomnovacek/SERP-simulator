import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

function MetaForm(props) {
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
            placeholder="www.reqview.com"
          />
          {props.url}
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
            id="title"
            placeholder="Click Reqview"
          />
          {props.title}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2} for="formGroupExampleInput2">
          Description
        </Label>
        <Col>
          <Input
            sm={10}
            type="text"
            className="form-control"
            id="description"
            placeholder="ReqView is the best. Do not hesitate and buy it."
          />
          {props.description}
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
          {props.keyword}
        </Col>
      </FormGroup>
    </Form>
  );
}

export default MetaForm;
