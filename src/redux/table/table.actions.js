import TableActionTypes  from './table.types'

export const loadEmployees = employees => ({
    type: TableActionTypes.LOAD_DATA,
    payload: employees
});

export const addEmployees = employees => ({
    type: TableActionTypes.ADD_DATA,
    payload: employees
})
