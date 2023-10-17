// import DocumentPicker from 'react-native-document-picker'
// import {Button, Image, ScrollView, Text, View}from "react-native"
// const UIuser = () => {
//   const FilePick=async()=>{
// try { const file=await DocumentPicker.pick({
//   type:[DocumentPicker.types.allFiles]
  
//  })
//  const formData=new FormData();

//       formData.append("files",file);

//  const fetchdata=await fetch("http://10.0.2.2:7070/list/post",{
//   method:"POST",
//   headers:{'Content-Type': 'multipart/form-data'} ,
//   body:formData
//  })
//  const resdata=await fetchdata.json();
//  console.log(resdata);
  
// } catch (error) {
//     if(DocumentPicker.isCancel(error)){
//       console.log(error)
//     }else{
//       console.log(error);
//     }
// }
//   }
        
      
    
//   return (
//     <View>
//     <Text>This is a code of file picker</Text>
//     <Image source={require("../backend/upload/krishna god.jpg")}    style={{ width: 200, height: 200 ,backgroundColor:"red"}}/> 

//     <Button title='pickfile' onPress={()=>{FilePick()}}></Button>
    
//    </View>
  
//   )
// }

// export default UIuser

import { Document } from 'mongoose';
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const UIuser = () => {
  const [files,setfiles]=useState(null);
 const [select,setselect]=useState(null);
const SendDocument=async()=>{
  const file=await DocumentPicker.pick({
    type:[DocumentPicker.types.allFiles]
  });
    const  rlfile=file[0]
   
setselect(rlfile.name)
    setfiles(rlfile);
}
  const FileSender=async()=>{
    try {
      if(files){
        
        
  
          const formData=new FormData();
          formData.append("file",files);
      
          const fetchdata=await fetch("http://10.0.2.2:7070/list/post",{
            method:"POST",
            headers:{
              "Content-Type":"multipart/form-data"
            },
            body:formData
          })
          const respjs=await fetchdata.json();
          console.log(respjs);
          if(respjs.success===true){
            console.warn("file is successfully sent to the nodejs")
          }
      } else{
        console.log("second file is not selected....")
      }
    
        }catch (error) {
          console.log(error);
        }
  }
  
  
     

  return (
    <View>
       <Button title='filepick' onPress={()=>{
         SendDocument()
       }}></Button>
       <Text> the selected file name is : {select}</Text>
       <Button title='filesend' onPress={()=>{
        FileSender()
       }}></Button>
    </View>
  );
}
export default UIuser;

