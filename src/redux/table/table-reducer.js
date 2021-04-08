import TableActionTypes from './table.types';
import {addEmployees} from './table.utils'

const INITIAL_STATE = {
    employees: null,
    hidden: false,
    isFetching: false,
    errorMessage: undefined,
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
        case TableActionTypes.TOGGLE_TABLE:
            return {
                ...state,
                hidden: !state.hidden
            }
            default:
                return state;

        // case TableActionTypes.LOAD_DATA_START:
        //     return {
        //         ...state,
        //         isFetching: true,
        //     }
        // case TableActionTypes.LOAD_DATA_SUCCESS:
        //     return {
        //         ...state,
        //         isFetching: false,
        //         employees: action.payload
        //     }
        // case TableActionTypes.LOAD_DATA_FAILURE:
        //     return {
        //         ...state,
        //         isFetching: false,
        //         errorMessage: action.payload,
        //     }   
    }
}

export default tableReducer;