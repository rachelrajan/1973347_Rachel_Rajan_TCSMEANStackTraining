// load modules
let http = require('http');
let url = require('url');
let port = 9999;
var fetch = require('node-fetch');
let r1 = require("readline-sync");
let fs = require("fs");
var taskInfo = [];
let taskHTMLInfo = 
`
<h3 style="color:green;">Add Task</h3>
<form action = "/store" method = "get">
Emp Id: <input type = "text" name="empid" /><br/>
Task Id: <input type = "text" name="taskid" /><br/>
Task: <input type = "text" name="task" /><br/>
Deadline: <input type = "date" name="date" /><br/>
<input type = "submit" value="Add Task" /><br/>
<input type = "reset" value="Reset" /><br/>
</form>
<hr/><br/>

<form action = "/delete" method = "get">
<h3 style="color:green;">Delete Task</h3>
Task Id: <input type = "text" name="taskid" /><br/>
<input type = "submit" value="Delete Task" /><br/>
<input type = "reset" value="Reset" /><br/>
</form>
<hr/><br/>

<form action = "/display" method = "get">
<h3 style="color:green;">List all Tasks</h3>
<input type = "submit" value="Display all Tasks" /><br/>
</form>
`

let server = http.createServer((req, res)=>{
    console.log(url.parse(req.url, true));
    var pathInfo = url.parse(req.url,true).pathname;
    if(pathInfo == "/"){
            res.setHeader("content-type", "text/html"); // by default data consider as html
            res.end(taskHTMLInfo)
    }
//--------------------------------Store the data-----------------------------------------------//
    else if(pathInfo == "/store"){
    var data = url.parse(req.url,true).query; 
    jsonFile = fs.readFileSync("TaskInfo.json")
    if(jsonFile == null || jsonFile == ""){
        fs.writeFileSync("TaskInfo.json", JSON.stringify(taskInfo))
    }
    else{
            jsonTask = JSON.parse(jsonFile)
            jsonTask.push(data);
            fs.writeFileSync("TaskInfo.json", JSON.stringify(jsonTask))
    }
    res.end()
    }
//--------------------------------Delete the data-----------------------------------------------//
    else if(pathInfo=="/delete"){
        var data = url.parse(req.url,true).query;
        let id = data.taskid
        let flag = 0;
        var jsonFile = fs.readFileSync("TaskInfo.json")
        let jsonData = JSON.parse(jsonFile)
        jsonData.find((c,i)=>{
                if(c.taskid == id){
                    jsonData.splice(i,1); //1st parameter index, number
                    flag++
                    fs.writeFileSync("TaskInfo.json", JSON.stringify(jsonData, null, 2))
                }
            });
            
            res.end()
        }

//--------------------------------Display the data-----------------------------------------------//
        else if(pathInfo=="/display"){
                var jsonFile = fs.readFileSync("TaskInfo.json")
                let jsonData = JSON.parse(jsonFile)
                var tableData = 
                `<table border =1>
                <tr>
                <td>Emp ID</td>
                <td>Task ID</td>
                <td>Task</td>
                <td>Deadline</td>
                </tr>
                `
        for(i=0;i<jsonData.length; i++){
                const data = jsonData[i]
                tableData += 
                `<tr>
                        <td>${data.empid}</td>
                        <td>${data.taskid}</td>
                        <td>${data.task}</td>
                        <td>${data.date}</td>
                </tr>`
        }
        tableData += `</table>`
        res.end(tableData);
}


})

server.listen(port, ()=>console.log(`running on port ${port}`))

