import React from 'react'
import {connect} from 'react-redux'
import "../App.scss"


import AppContainer from '../app.container'
import TablePage from '../components/table/table.component'
import AddEmployee from '../components/form-input/AddEmployee.component'
import Chart from '../components/chart/chart.component'


class HomePage extends React.Component {


    render() {
        return (
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
        )
    }
}

export default HomePage;