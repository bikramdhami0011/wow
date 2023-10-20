import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Auth from "@react-native-firebase/auth"
import { useNavigation } from '@react-navigation/native'
import storage from "@react-native-firebase/storage"


const Reanimation =(props) => {
const [url,seturl]=useState("");
//  const  SingOutUSer=async()=>{
//       await Auth().signOut();
  
//   }
useEffect(async()=>{
 const data= await storage().ref("/images/1.jpg").getDownloadURL();
 console.log("howm image url",data);
 seturl(data)
},[])
  const navigation =useNavigation()
 return (
   
    <View >
    <View>
      <Image source={{uri:url}}></Image>
      <Text> this is home Screen</Text>
      <Text> User Details</Text>
      <Text> email : {Auth().currentUser.email}</Text>
      <Text> UID : {Auth().currentUser.uid}</Text>
      
     
      <Button title='goto profile' onPress={()=>{
          navigation.navigate("image")
      }}></Button>
      <View style={{margin:20}}></View>
    </View>
    
    </View>
  )
}

export default Reanimation

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"lightgray",
   justifyContent:"center",
   
  },
  input:{
    margin:0,
    height:60,
    width:"100%",
    elevation:2,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    color:"blue"
   
  }
})