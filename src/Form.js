import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

function MetaForm() {
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
            class="form-control"
            id="url"
            placeholder="www.reqview.com"
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
            class="form-control"
            id="title"
            placeholder="Click Reqview"
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
            type="text"
            class="form-control"
            id="description"
            placeholder="ReqView is the best. Do not hesitate and buy it."
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
            class="form-control"
            id="bold"
            placeholder="Requirements management"
          />
        </Col>
      </FormGroup>
    </Form>
  );
}

export default MetaForm;
