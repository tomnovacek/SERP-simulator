import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";
import rp from "request-promise";
import cheerio from "cheerio";

class MetaForm extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "reqview.com",
      title: "Requirements Management Tool | Easy & Flexible",
      description:
        "Requirements management for SW and HW products. Traceability to tests and risks. ISO/IEEE templates. Open data format. Free download and trial!"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  /*  componentDidMount() {
    // use the request-promise library to fetch the HTML from pokemon.org
    rp("https://web.com/").then((html) => {
      let title = [];
      let $ = cheerio.load(html);
      console.log(html);
    });
  } */

  render() {
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
              placeholder={this.state.url}
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
              id="title"
              placeholder={this.state.title}
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
              id="description"
              placeholder={this.state.description}
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
}

export default MetaForm;
