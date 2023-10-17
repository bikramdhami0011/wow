

const mongoose=require("mongoose");
// const MdUser=mongoose.Schema({
//   fullname:String,
//   email:String,
//   address:String
// });
// module.exports=mongoose.models.user||mongoose.model("user",MdUser);

  const imageSchema = new mongoose.Schema({
   
    data: Buffer,
    contentType: String,
  });


 module.exports=mongoose.models.publicpdf||mongoose.model("publicpdf",imageSchema)



