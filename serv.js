const express=require("express");
const app=express();
app.get("/",(req,res)=>{
        res.send("hello mai hu kcuj nahi");
})
let absolutePath = __dirname + "/views/index.html"
app.get("/", (req, res) => {
  res.sendFile(absolutePath)
})
app.get("/home",(req,res)=>{
        res.send(`home.html`);
})
app.listen(8000);