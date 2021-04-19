let app = require("express")();
let http = require("http").Server(app);   // to load the library we have run port number using http module 
let io = require("socket.io")(http);
let fs = require("fs")
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
var chatInfo = [];

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index-chatlog.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected to application.....");
    
    socket.on("chat",(msg)=> {
        mongoClient.connect(url, {useUnifiedTopology: true},(err1,client)=>{
            if(!err1){
                let db = client.db("meanstack");
                jsonFile = fs.readFileSync("ChatInfo.json")
                if(jsonFile == null || jsonFile == ""){
                    fs.writeFileSync("ChatInfo.json", JSON.stringify(chatInfo))
                }
                else{
                        jsonChat = JSON.parse(jsonFile)
                        jsonChat.push(msg);
                        fs.writeFileSync("ChatInfo.json", JSON.stringify(jsonChat))
                }
//----------------------------store in MongoDb-----------------------------------------------------//
                var jsonChatFile = fs.readFileSync("ChatInfo.json")
                let jsonChatRecords= JSON.parse(jsonChatFile)
                if(db.collection("ChatRecords") != null){
                db.collection("ChatRecords").drop();      
                db.collection("ChatRecords").insertMany(jsonChatRecords,(err2,result)=>{
            if(!err2){
                console.log(result.insertedCount);
            }else {
                console.log(err2.message);
            }
            client.close(); 
        
        })}
        }
    }
    )})
})
http.listen(9090,()=>console.log('server running on port number 9090'));