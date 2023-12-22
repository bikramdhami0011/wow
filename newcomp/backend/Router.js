const express=require("express");
const router=express.Router();
const userModel=require("./Model");
router.get("/",async(req,res)=>{
    const getuser= await userModel
    const finduser=await getuser.find();
    console.log(finduser);
    res.send(finduser);
});
module.exports=router;