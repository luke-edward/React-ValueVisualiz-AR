import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

class Code1 extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div>
                    <h2 style={{ textAlign: "center" }}>Your Results</h2>
                    <h5>You got code 2!</h5>
                    <p style={{ textAlign: "center" }}> Scan the QR code below to see your funds in augmented reality!</p>
                </div>
                <div>
                    <br/>
                     <Image src="../img/debt_little.png" thumbnail style={{border:"none"}} />
                </div>
            </div>
        );
    }
}

export default Code1;