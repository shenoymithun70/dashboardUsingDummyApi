import {createSelector} from 'reselect';

const selectTable = state => state.employees;


export const selectTableItems = createSelector([selectTable] , (employees) => employees.employees);

export const selectTableHidden = createSelector([selectTable], (employees) => employees.hidden);

export const selectIsEmployeesLoaded = createSelector([selectTable] , employees => !!employees.employees);

export const selectErrorMessage = createSelector([selectTable] , employees => employees.errorMessage);