import {combineReducers} from 'redux';

import tableReducer from './table/table-reducer';

export default combineReducers({
    employees: tableReducer,
})