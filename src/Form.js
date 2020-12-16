import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

function MetaForm() {
  return (
    <Form>
      <FormGroup row>
        <Label sm={2} for="formGroupExampleInput">
          Title
        </Label>
        <Col>
          <Input
            sm={10}
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Click Reqview"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2} for="formGroupExampleInput2">
          Metadata
        </Label>
        <Col>
          <Input
            sm={10}
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="ReqView is the best. Do not hesitate and buy it."
          />
        </Col>
      </FormGroup>
    </Form>
  );
}

export default MetaForm;
