import React, { Component } from 'react';
import {Image,Col} from 'react-bootstrap';

class Code1 extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div>
                    <h2 style={{ textAlign: "center" }}>Your Results</h2>
                    <h5>You got code 3!</h5>
                    <p style={{ textAlign: "center" }}> Scan the QR code below to see your funds in augmented reality!</p>
                </div>
                <Col>
                <div>
                    <br/>
                     <Image src="../img/break_even.png" thumbnail style={{border:"none"}} />
                </div>
                </Col>
            </div>
            
        );
    }
}

export default Code1;