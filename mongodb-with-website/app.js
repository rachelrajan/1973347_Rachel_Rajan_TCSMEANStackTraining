let http = require('http');
let url = require('url');
let port = 9090;
let fs = require("fs");
var appInfo = [];

let appHTMLInfo = 
`
<h3 style="color:green;">Course Platform</h3>
<form action = "/addCourse" method = "get">
Course Id: <input type = "text" name="_id" /><br/>
Course Name: <input type = "text" name="cname" /><br/>
Description: <input type = "text" name="dptn" /><br/>
Amount: <input type = "text" name="amnt" /><br/>
<input type = "submit" value="Add" />
<input type = "reset" value="Reset" /><br/>
</form>
<hr/><br/>

<form action = "/updateCourse" method = "get">
<h3 style="color:green;">Update Course</h3>
Course Id: <input type = "text" name="_id" /><br/>
Amount: <input type = "text" name="amnt" /><br/>
<input type = "submit" value="Update" />
<input type = "reset" value="Reset" /><br/>
</form>
<hr/><br/>

<form action = "/deleteCourse" method = "get">
<h3 style="color:green;">Delete Course</h3>
Course Id: <input type = "text" name="_id" /><br/>
<input type = "submit" value="Delete Task" />
<input type = "reset" value="Reset" /><br/>
</form>
<hr/><br/>

<form action = "/displayCourses" method = "get">
<h3 style="color:green;">Display all Tasks</h3>
<input type = "submit" value="Display all Tasks" /><br/>
</form>
`

let server = http.createServer((req, res)=>{
    console.log(url.parse(req.url, true));
    var pathInfo = url.parse(req.url,true).pathname;
           
//--------------------------------Empty HTML Page-----------------------------------------------//
    if(pathInfo == "/"){
            res.setHeader("content-type", "text/html"); // by default data consider as html
            res.end(appHTMLInfo)
    }
//--------------------------------Add the course-----------------------------------------------//
    else if(pathInfo == "/addCourse"){
    var data = url.parse(req.url,true).query; 
    jsonFile = fs.readFileSync("AppInfo.json")
    if(jsonFile == null || jsonFile == ""){
        fs.writeFileSync("AppInfo.json", JSON.stringify(appInfo))
    }
    else{
            jsonApp = JSON.parse(jsonFile)
            jsonApp.push(data);
            fs.writeFileSync("AppInfo.json", JSON.stringify(jsonApp))
    }
    res.end()
    }
//--------------------------------Update the Course-----------------------------------------------//
else if(pathInfo=="/UpdateCourse"){
    var data = url.parse(req.url,true).query;
    let id = data._id
    let amount = data.amnt
    let flag = 0;
    var jsonFile = fs.readFileSync("AppInfo.json")
    let jsonApp = JSON.parse(jsonFile)
    jsonApp.find((c)=>{
            if(c._id == id){
                c.amnt = amount
                flag++
                fs.writeFileSync("AppInfo.json", JSON.stringify(jsonApp, null, 2))
            }
        });
        
         res.end()
    }

//--------------------------------Delete the Course-----------------------------------------------//
    else if(pathInfo=="/deleteCourse"){
        var data = url.parse(req.url,true).query;
        let id = data._id
        let flag = 0;
        var jsonFile = fs.readFileSync("AppInfo.json")
        let jsonApp = JSON.parse(jsonFile)
        jsonApp.find((c,i)=>{
                if(c._id == id){
                    jsonApp.splice(i,1); //1st parameter index, number
                    flag++
                    fs.writeFileSync("AppInfo.json", JSON.stringify(jsonApp, null, 2))
                }
            });
            
            res.end()
        }

//--------------------------------Display All Courses-----------------------------------------------//
        else if(pathInfo=="/displayCourses"){
                var jsonFile = fs.readFileSync("AppInfo.json")
                let jsonApp = JSON.parse(jsonFile)
                var tableData = 
                `<table border =1>
                <tr>
                <td>Course ID</td>
                <td>Course Name</td>
                <td>Description</td>
                <td>Amount</td>
                </tr>
                `
        for(i=0;i<jsonApp.length; i++){
                const data = jsonApp[i]
                tableData += 
                `<tr>
                        <td>${data._id}</td>
                        <td>${data.cname}</td>
                        <td>${data.dptn}</td>
                        <td>${data.amnt}</td>
                </tr>`
        }
        tableData += `</table>`
        res.end(tableData);
}
//--------------------------------store the course information in mongodb-----------------------------------------------//

})

server.listen(port, ()=>console.log(`running on port ${port}`))