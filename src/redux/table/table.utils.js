export const addEmployees = (employees , employeeToAdd) => {
    var id = employees.length + 1;
    console.log(id);
    console.log(employeeToAdd);
    return [...employees, {id: id ,...employeeToAdd}];
}