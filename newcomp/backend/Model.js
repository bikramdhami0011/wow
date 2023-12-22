const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Khatadb");
 const KhataSchema=mongoose.Schema({
     name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
});
module.exports=mongoose.model("shops",KhataSchema);