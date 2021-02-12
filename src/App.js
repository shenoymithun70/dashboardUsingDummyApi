import React, { Fragment } from 'react'
import './App.scss';
import axios from 'axios';
import {connect} from 'react-redux'
import {loadEmployees} from './redux/table/table.actions'
import AddEmployee from './components/form-input/AddEmployee.component.jsx'

import TablePage from './components/table/table.component.jsx'
import Chart from './components/chart/chart.component.jsx'

class App extends React.Component {
 

  async componentDidMount() {
    console.log("component mounting")
    const {loadEmployees} = this.props;
    axios.get("http://dummy.restapiexample.com/api/v1/employees")
    .then(res => {
      // console.log(res);
      loadEmployees(res.data.data)
    })
    .catch(error => {
      console.log(error);
    })

    // .then(users => this.setState({
    //   users: users.data
    // }), () => console.log(this.state.users))
  }


  render() {
    return(
      <Fragment>
        <div className="home-page">
          <AddEmployee />
          

          <div className="flex-container">
            <div className="flex-box">
          <TablePage 
          tableData={this.props.employees}
          headingColumns={['Sr no', 'Employee_Name', 'Employee salary', 'Age']}
          title="Employees" />
            </div>
          
          <div className="flex-box">
            <Chart chartData={this.props.employees} />
          </div>
        </div>
        </div>
        
        
        
      </Fragment>

      
    )


        // {
        //   this.props.employees.map(employee => 
          
        //     /* (<TablePage key={employee.id} employee={employee} />) */
           
        //   )
        // }
  
        
     
    
    
  }

}

const mapStateToProps = ({employees: {employees}}) => ({
  employees
})

const mapDispatchToProps = dispatch => ({
  loadEmployees: employees => 
    dispatch(loadEmployees(employees))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
