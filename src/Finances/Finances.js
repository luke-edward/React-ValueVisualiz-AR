import React, { Component } from "react";
import { Form } from "react-bootstrap";
import FormDataComponent from "../components/form-data.component";

class Finances extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
        <div>
          <h1 style={{ textAlign: "center" }}>Financial Info</h1>
          <p style={{ textAlign: "center" }}>
            {" "}
            This is just for use to get a better understanding of your financial
            position.
          </p>
          <Form>
            <h3>Revenues</h3>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>How many sources of income do you have?</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                How much is your primary source of income annually?
              </Form.Label>
              <Form.Control type="Salary" placeholder="Yearly Salary"/>
            </Form.Group>
            <h3>Expenses</h3>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                Enter your yearly expenses on the following items below:
              </Form.Label>
              <Form.Control type="Loans" placeholder="Loans" />
              <br />
              <Form.Control type="Groceries" placeholder="Groceries" />
              <br />
              <Form.Control type="Entertainment" placeholder="Entertainment" />
              <br />
              <Form.Control type="Utilities" placeholder="Utilities" />
            </Form.Group>
          </Form>
          <h3>General</h3>
              <FormDataComponent/>
        </div>
      </div>
    );
  }
}

export default Finances;
