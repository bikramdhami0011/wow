const express=require("express");
const { Mdconnet } = require("../Mdcon/Mdconnet");
const { default: mongoose } = require("mongoose");
const  UserModel  = require("../Mdcon/UserModel");
const app=express();
const Routers=express.Router();

Routers.get("/get",async(req,res)=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/userData");
   result = await UserModel.find();

    res.json(result)
});

Routers.post("/post",async(req,res)=>{
    Mdconnet
    await mongoose.connect("mongodb://0.0.0.0:27017/userData");
    const data=req.body
    const Modeldata=new UserModel({fullname:data.fullname,email:data.email,address:data.address})
    const result=await Modeldata.save()
    console.log(result);
    
res.json(result)
});
Routers.put("/put",async(req,res)=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/userData");
   result = await UserModel.findOneAndUpdate(fullname="bikrkam",fullname="sunil")
    res.json({name:"bikram dhami"})
});
Routers.delete("/delete",(req,res)=>{
    res.json({name:"bikram dhami"})
});
module.exports=Routers