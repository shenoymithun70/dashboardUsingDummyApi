import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import App from './App.js'
import WithSpinner from './components/with-spinner/with-spinner.component.jsx'
import HomePage from './pages/homePage.component.jsx'

import {selectIsEmployeesLoaded , selectErrorMessage} from './redux/table/table.selector.js'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsEmployeesLoaded(state),
})

const AppContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(HomePage)

export default AppContainer;