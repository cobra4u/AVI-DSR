var employee = {
 
    name: "Divjot",
    address: "New York",
    salary: 50000
}

var Employee = JSON.parse(JSON.stringify(employee));

console.log("Employee=> ", employee);
console.log("Employee=> ", Employee);


Employee.name = "Singh";
Employee.salary = 70000;

console.log("Employee=> ", employee);
console.log("Employee=> ", Employee);