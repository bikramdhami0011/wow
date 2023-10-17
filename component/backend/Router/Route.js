const express=require("express");
const { Mdconnet } = require("../Mdcon/Mdconnet");
const { default: mongoose } = require("mongoose");
const  UserModel  = require("../Mdcon/UserModel");
const app=express();

const Routers=express.Router();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
const fs=require("fs");

// app.use(cookieParser())
const multer=require("multer")
const storage = multer.memoryStorage()// Store the uploaded file in memory
const upload = multer({ storage: storage }).single("file");
// const upload=multer({
//   storage:{
//     destionation:function(req,res,cb){
  
//     }
//   }
// })
Routers.get("/get",async(req,res)=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/userData");
   result = await UserModel.find();

    res.json(result)
});
// Routers.post("/post", upload, async (req, res) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded.' });
//       }
  
//       // Access the uploaded file using req.file
//       const uploadedFile = req.file;
  
//       // You can now process the uploaded file as needed
//       // For example, you can save it to the server or store it in a database.
  
//       console.log(uploadedFile);
  
//       // Respond with success
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  
//
Routers.post('/post', upload, async(req, res) => {
    // const formData = req.body; // Access the text fields from FormData
    const uploadedFile = req.file;
const getdata=uploadedFile.buffer
 const buffer=Buffer.from(getdata);
//  fs.writeFileSync("upload",buffer);
const path=`./upload/${uploadedFile.originalname}`
 await fs.writeFileSync(path,buffer);
  console.log(uploadedFile);
    if (!uploadedFile) {
      return res.status(400).send('No file uploaded.');
    }
 res.status(200).json({  uploadedFile,success:true });
  });
//

Routers.put("/put",async(req,res)=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/userData");
   result = await UserModel.findOneAndUpdate(fullname="bikrkam",fullname="sunil")
    res.json({name:"bikram dhami"})
});
Routers.delete("/delete",(req,res)=>{
    res.json({name:"bikram dhami"})
});
module.exports=Routers