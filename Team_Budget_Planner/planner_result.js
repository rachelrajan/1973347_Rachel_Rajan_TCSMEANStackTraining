var ret_data = sessionStorage.getItem('budgetPlanner');
console.log('retrievedData: ', JSON.parse(ret_data));

ret_data = JSON.parse(ret_data)
var table = document.getElementById("plannerList")
var body = table.getElementsByTagName("tbody")[0];
var newRow = body.insertRow(body.length);  

var cell1 = newRow.insertCell(0);         
cell1.innerHTML=ret_data.client_name;                  

var cell2 = newRow.insertCell(1);          
cell2.innerHTML=ret_data.project_name; 

var cell3 = newRow.insertCell(1);          
cell3.innerHTML=ret_data.budget; 

