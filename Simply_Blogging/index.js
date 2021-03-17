var data=[];
function storeInSession() {
   localStorage.setItem("blogInfo",JSON.stringify(blogData));
}
function retrieveFromSession() {
    var obj = JSON.parse(localStorage.getItem("blogInfo"));
    console.log(obj);
}

function addBlog(){
    var blogData= readData();
    insertNewRecords(blogData);
    data.push(blogData);  
    console.log(data)
    
}

function readData() {
    var blogData={};
    blogData.title=document.getElementById("title").value;
    blogData.desc = document.getElementById("desc").value;
    blogData.imageInfo = document.getElementById("imageId").files[0].name;
    return blogData;
}
function insertNewRecords(blogData) {
    document.getElementById("titleInfo").innerHTML = blogData.title;
    document.getElementById("descInfo").innerHTML = blogData.desc;
    document.getElementById("imageInfo").src = blogData.imageInfo;



    // var table = document.getElementById("blogDetails");
    // var tableBody = table.getElementsByTagName("tbody")[0];
    // var newRow = tableBody.insertRow(tableBody.length);
    // var cell1 = newRow.insertCell(0);
    // cell1.innerHTML=blogData.title;
    // var cell2 = newRow.insertCell(1);
    // cell2.innerHTML=blogData.desc;
    // var cell3 = newRow.insertCell(2);
    // cell3.src=blogData.imageInfo;

}

function display(){
    for(i = 0; i< locations.length; i++){
        
    }
}
function onClearSubmit(){
    resetData();
}

function resetData() {
    document.getElementById("title").value="";
    document.getElementById("desc").value="";
    document.getElementById("imageId").value=""; 
    }


