const express =require("express");
const path =require("path");
const app=express();
const port =8000;

console.log(path.join(__dirname,"../public"));

// const staticPath =path.join(__dirname,"../public");

// app.use(express.static(staticPath));

app.get("/",(req,res) =>{
    res.send("hello from the express");
})


app.listen(port,()=>{
    console.log("listening the port at 8000");
})

