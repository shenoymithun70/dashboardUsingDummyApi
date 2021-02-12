import React from "react"
import FormInput from './form-input.component'
import {addEmployees} from '../../redux/table/table.actions.js'
import {connect} from 'react-redux';
import './form.styles.scss'

class AddEmployee extends React.Component {
    constructor() {
        super() 
        this.state = {
            employee_name: "",
            employee_salary: "",
            employee_age: "",
            profile_image: null,
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {employee_name, employee_salary, employee_age, profile_image} = this.state;
        console.log(this.state);
        try {
        this.props.addEmployee(this.state);
        this.setState({
            employee_name: "",
            employee_salary: "",
            employee_age: "",
            profile_image: null,
        })
        } catch(error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const {name , value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {employee_name, employee_salary, employee_age, profile_image} = this.state;
        return(
            <div className="form-container">
                <h2 className="title">Add Employees Data</h2>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="employee_name"
                    value={employee_name}
                    onChange={this.handleChange}
                    label="employee name"
                    placeholder="employee name"
                    required />
                    <FormInput
                    type="text"
                    name="employee_salary"
                    value={employee_salary}
                    onChange={this.handleChange}
                    label="employee salary"
                    placeholder="employee salary"
                    required />
                     <FormInput
                    type="text"
                    name="employee_age"
                    value={employee_age}
                    onChange={this.handleChange}
                    label="employee age"
                    placeholder="employee age"
                    required />
                    <button type="submit">ADD EMPLOYEE</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addEmployee: employee => dispatch(addEmployees(employee))
})


export default connect(null, mapDispatchToProps)(AddEmployee);