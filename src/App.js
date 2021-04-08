import React, { Fragment } from 'react'
import './App.scss';
import axios from 'axios';
import {connect} from 'react-redux'
import {loadDataStartAsync, loadEmployees} from './redux/table/table.actions'
import AddEmployee from './components/form-input/AddEmployee.component.jsx'
import {selectErrorMessage, selectIsEmployeesLoaded, selectTableItems} from './redux/table/table.selector'
import TablePage from './components/table/table.component.jsx'
import Chart from './components/chart/chart.component.jsx'
import {createStructuredSelector} from 'reselect'
import AppContainer from './app.container';
import { SpinnerContainer, SpinnerOverlay } from './components/with-spinner/with-spinner.styles';

class App extends React.Component {

  async componentDidMount() {
    // const {loadDataStartAsync , errorMessage} = this.props;
    // loadDataStartAsync()
    // // console.log(errorMessage)
    // if(errorMessage != undefined) {
    //   return alert(errorMessage) ? "" : window.location.reload();
    // }
    const {loadEmployees} = this.props;
    axios.get("http://dummy.restapiexample.com/api/v1/employees")
    .then(res => {
      console.log(res.data.data);
      loadEmployees(res.data.data)
    })
    .catch(error => {
    return alert(error.message) ? "" : window.location.reload();
    })

  }


  render() {
    const {errorMessage ,isLoading } = this.props;
    return(
      <Fragment>
        {/* <AppContainer />
        {errorMessage != undefined ? alert(errorMessage) ? "": window.location.reload(): null} */}
        {isLoading ? 
        <SpinnerOverlay>
            <SpinnerContainer /> 
        </SpinnerOverlay>
        : 
          <div className="home-page">
          <AddEmployee />
          
        
          <div className="flex-container">
            <div className="flex-box">
          <TablePage 
          // tableData={this.props.employees}
          headingColumns={['Sr no', 'Employee_Name', 'Employee salary', 'Age']}
          title="Employees" />
            </div>
          
          <div className="flex-box">
            <Chart chartData={this.props.employees} />
          </div>
        </div>
        </div>
        }
      </Fragment>
    ) 
  }
}

const mapStateToProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
  isLoading: state => !selectIsEmployeesLoaded(state)
});

const mapDispatchToProps = dispatch => ({
  loadEmployees: employees => dispatch(loadEmployees(employees))
})

// const mapDispatchToProps = dispatch => ({
//   loadDataStartAsync: () => dispatch(loadDataStartAsync())
// })

export default connect(mapStateToProps,mapDispatchToProps)(App);
