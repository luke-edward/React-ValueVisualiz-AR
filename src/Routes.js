import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Visualize from "./Visualize/Visualize";
import Contact from "./Contact/Contact";
import Finances from "./Finances/Finances";
import Home from "./Home/Home";
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
                </Switch>
            </Router>
        )
    }
}
