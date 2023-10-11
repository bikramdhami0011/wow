console.log("hello biakrm")
const expres=require("express");
const app=expres();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
const Routers = require("./Router/Route");
app.use(bodyParser.json())
// app.use((next,res,rep)=>{
//      next()
// })
app.use("/list",Routers);
app.listen(7070,()=>{
    console.log("accepted")
 });