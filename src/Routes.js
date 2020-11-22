import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Visualize from "./Visualize/Visualize";
import Contact from "./Contact/Contact";
import Finances from "./Finances/Finances";
import Home from "./Home/Home";
import Code1 from "./QRCodes/Code1";
import Code2 from "./QRCodes/Code2";
import Code3 from "./QRCodes/Code3";
import Code4 from "./QRCodes/Code4";
import Code5 from "./QRCodes/Code5";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Visualize" component={Visualize} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Finances" component={Finances} />
                    <Route path="/QRCodes/Code1" component={Code1} />
                    <Route path="/QRCodes/Code2" component={Code2} />
                    <Route path="/QRCodes/Code3" component={Code3} />
                    <Route path="/QRCodes/Code4" component={Code4} />
                    <Route path="/QRCodes/Code5" component={Code5} />
                </Switch>
            </Router>
        )
    }
}
