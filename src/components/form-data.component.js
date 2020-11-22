import React, { Component } from 'react';
import history from "../history";
export default class FormDataComponent extends Component {

    constructor(props) {
        super(props);

        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeExpenses = this.onChangeExpenses.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            salary: '',
            expenses: ''
        }
    }

    // Form Values
    onChangeSalary(e) {
        this.setState({ salary: e.target.value })
    }

    onChangeExpenses(e) {
        this.setState({ expenses: e.target.value })
    }


    // React Life Cycle
    componentDidMount() {

        if (localStorage.getItem('user')) {
            this.setState({
                salary: this.state.salary,
                expenses: this.state.expenses
            })
        } else {
            this.setState({
                salary: '',
                expenses: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        if(this.state.expenses > 2*this.state.salary){
            history.push('/QRCodes/Code1')
            console.log("salary: " + this.state.salary + " expenses: " + this.state.expenses + " lotta debt ");
        } else if (this.state.expenses > this.state.salary){
            history.push('/QRCodes/Code2')
            console.log("salary: " + this.state.salary + " expenses: " + this.state.expenses + " little debt ");
        } else if (this.state.expenses === this.state.salary){
            history.push('/QRCodes/Code3')
            console.log("salary: " + this.state.salary + " expenses: " + this.state.expenses + " neutral money ");
        } else if (this.state.expenses*2 < this.state.salary){
            history.push('/QRCodes/Code5')
            console.log("salary: " + this.state.salary + " expenses: " + this.state.expenses + "lotta money ");
        } else if (this.state.expenses < this.state.salary){
            history.push('/QRCodes/Code4')
            console.log("salary: " + this.state.salary + " expenses: " + this.state.expenses + " little money ");
        }
        this.setState({
            salary: '',
            expenses: ''
        })
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>What is your total annual income?</label>
                        <input type="salary" className="form-control" value={this.state.salary} onChange={this.onChangeSalary} />
                    </div>
                    <div className="form-group">
                        <label>What are your total annual expenses?</label>
                        <input type="expenses" className="form-control" value={this.state.expenses} onChange={this.onChangeExpenses} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}