
function onFormSubmit(){
    
    var data = new Object();
    data.client_name = document.getElementById("client_name").value;
    data.project_name = document.getElementById("project_name").value;
    data.budget = document.getElementById("budget").value;
    
    if(sessionStorage.budgetPlanner)
    {
     budgetPlanner= JSON.parse(sessionStorage.getItem('budgetPlanner'));
    }else{
     var budgetPlanner= [];
    }
    budgetPlanner.push(data)
    sessionStorage.setItem('budgetPlanner', JSON.stringify(budgetPlanner));
}

function onClearSubmit(){
    resetData();
}

function resetData() {
    document.getElementById("client_name").value="";
    document.getElementById("project_name").value="";
    document.getElementById("budget").value=""; 
    }


