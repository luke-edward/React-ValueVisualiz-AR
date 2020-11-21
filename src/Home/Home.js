import React, { Component } from "react";
import {Form, Button, Col, Image, Row } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <Row>
          <Col>
          <h1>Sign Up</h1>
          <p>Personal Finance made fun.</p>
          <Form style={{width:"80%", marginLeft:"10%"}}>
                <Form.Group>
                    <Form.Label>
                        Enter your first name:
                    </Form.Label> <Form.Control placeholder="First Name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Enter your last name:
                    </Form.Label> <Form.Control placeholder="Last Name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Enter your email:
                    </Form.Label> <Form.Control type = "email" placeholder="Email Address"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Enter your password:
                    </Form.Label> <Form.Control type = "password" placeholder="Password"/>
                </Form.Group>
                <Button style = {{width:400,height: 50, background:"#7037ed", borderRadius: 50, borderWidth: 0}} variant="btn btn-success" onClick={() => history.push('/Finances')}>Submit</Button>
            </Form>
            </Col>
            <Col><div>
            <br/>
            <br/>
            <Image src="./img/vectorperson.png" thumbnail style={{border:"none"}} />
        </div>
        </Col>
        </Row>
        </div>
      </div>
    );
  }
}
