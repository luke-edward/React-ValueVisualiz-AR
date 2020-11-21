import React, { Component } from "react";
import {Form, Button } from 'react-bootstrap';
import history from '../history';

class Finances extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
        <div>
          <h1 style = {{textAlign: "center"}}>Financial Info</h1>
          <p style = {{textAlign: "center"}}> This is just for use to get a better understanding of your financial position.</p>
          <Form>
            <h3>Revenues</h3>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>How much is your primary source of income annually?</Form.Label>
              <Form.Control type="Salary" placeholder="Yearly Salary" />
            </Form.Group>
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
            <h3>Expenses</h3>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter your yearly expenses on the following items below:</Form.Label>
              <Form.Control type="Loans" placeholder="Loans" />
              <br/>
              <Form.Control type="Groceries" placeholder="Groceries" />
              <br/>
              <Form.Control type="Entertainment" placeholder="Entertainment" />
              <br/>
              <Form.Control type="Utilities" placeholder="Utilities" />
            </Form.Group>
            <Button style = {{width:400,height: 50, background:"#7037ed", borderRadius: 50, borderWidth: 0, marginLeft: 70}} variant="btn btn-success" onClick={() => history.push('/Visualize')}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Finances;
