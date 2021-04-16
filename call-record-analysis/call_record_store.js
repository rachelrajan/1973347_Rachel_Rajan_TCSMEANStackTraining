let http = require('http');
let r1 = require("readline-sync");
let fs = require("fs");

let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
    if(!err1){
        let db = client.db("meanstack");
        var jsonFile = fs.readFileSync("call_data.json")
        let jsonRecords= JSON.parse(jsonFile)
db.collection("CallRecords").insertMany(jsonRecords,(err2,result)=>{
        if(!err2){
            console.log(result.insertedCount);
        }else {
            console.log(err2.message);
        }
        client.close();    
    });
    
}
});