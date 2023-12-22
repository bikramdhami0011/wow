const express=require("express");
const bodyparser=require("body-parser");
const userModel=require("./Model");
const router = require("./Router");
const app=express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use("/get",router);
app.post("/post",async(req,res)=>{
    const user=req.body;
    const shopuser=new userModel({email:user.email,password:user.password,name:user.name});
    const saveuser=await shopuser.save();
    console.log(saveuser);
    res.send(saveuser);
});
app.listen(3000,()=>{})