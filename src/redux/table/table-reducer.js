import TableActionTypes from './table.types';
import {addEmployees} from './table.utils'

const INITIAL_STATE = {
    employees: [],
}

const tableReducer = (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case TableActionTypes.LOAD_DATA:
            return {
                ...state,
                employees: action.payload
            }
        case TableActionTypes.ADD_DATA:
            return {
                ...state,
                employees: addEmployees(state.employees , action.payload)
            }
            default:
                return state;
    }
}

export default tableReducer;