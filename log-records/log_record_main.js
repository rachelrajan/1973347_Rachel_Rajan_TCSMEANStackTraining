let r1 = require("readline-sync");
let fs = require("fs");
let obj = require("./log_record_func");
debugger;

let emp = new obj.Employee(r1.question("Enter the First Name: "), r1.question("Enter the Last Name: "),
r1.question("Enter the Gender: "), r1.question("Enter the Email: "), Date());
debugger;
console.log("First name is: " + emp.fname + ", Last name is: " + emp.lname 
+ ", Gender is: " + emp.gender + ", Email is " + emp.email, ", Date is " + emp.date)

var empString = JSON.stringify(emp);
fs.writeFile("record.json", empString, {flag:"a"}, (err)=>{
    if(!err){
        debugger;
        console.log("data stored successfully")
    }
})

