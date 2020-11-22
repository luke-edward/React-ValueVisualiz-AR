import React, { Component } from 'react';
import {Image, Row, Col} from 'react-bootstrap';

class Code2 extends Component {
    render() {
        return (
            <Row>
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
            <Col>
                <div>
                    <h2 style={{ textAlign: "center" }}>Your Results</h2>
                    <h5>You got code 2!</h5>
                    <p style={{ textAlign: "center" }}> Scan the QR code below to see your funds in augmented reality!</p>
                </div>
                <div>
                     <Image src="../img/debt_little.png"/>
                </div>
                </Col>
                <Col>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                     <Image src="../img/qrvector.svg"/>
                </div>
                </Col>
            </div>
            </Row>
        );
    }
}

export default Code2;