const express = require("express");

const app = express();
app.use(express.json())

app.post("/comment",(req,res)=>{
    res.send("comment")
})
app.delete("/delet",(req,res)=>{
    res.send("delet req")
})


// path parameters
app.get("/findsum/:num1/:num2",(req,res)=>{
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let total = Number(num1) + Number(num2);
    res.send((`this is the total ${total}`));
})

// body params
app.get("/body",(req,res)=>{
    console.log(req.body.name)
    res.send(`hello ${req.body.name}`)
})

app.get("/test",(req,res)=>{
    
    res.sendFile(__dirname + ' doc.html')
})

app.listen(3000,() =>{
    console.log("im listen in port 3000")
    
});