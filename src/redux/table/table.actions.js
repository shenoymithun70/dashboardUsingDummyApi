import TableActionTypes  from './table.types'
import axios from 'axios'

export const loadEmployees = employees => ({
    type: TableActionTypes.LOAD_DATA,
    payload: employees
});

export const addEmployees = employees => ({
    type: TableActionTypes.ADD_DATA,
    payload: employees
})

export const toggleTable =  () => ({
    type: TableActionTypes.TOGGLE_TABLE,
})

// export const loadDataStart = () => ({
//     type: TableActionTypes.LOAD_DATA_START
// })

// export const loadDataSuccess = employess => ({
//     type: TableActionTypes.LOAD_DATA_SUCCESS,
//     payload: employess
// })

// export const loadDataFailure = errorMessage => ({   
//     type: TableActionTypes.LOAD_DATA_FAILURE,
//     payload: errorMessage,
// })

// export const loadDataStartAsync = () => {
//     return dispatch =>  {
//     dispatch(loadDataStart())
//     axios.get("http://dummy.restapiexample.com/api/v1/employees")
//     .then(res => {
//       return res.data.data;
//     }).then((employees) => dispatch(loadDataSuccess(employees)))
//     .catch(error => {
//     dispatch(loadDataFailure(error.message))
//     // return alert(error.message) ? "" : window.location.reload();
//     })
//     }
// }
