import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = (props) => {
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const [name,setname]=useState();

    const HandleSignup=async()=>{
        try {
            if(email,password,name){
                const dsend=await fetch("http://10.0.2.2:3000/post",{
                    method:"POST",
                    body:JSON.stringify({email,password,name}),
                  headers:{"content-type":"application/json"}
            })
             const gdata=await dsend.json();
             console.log(gdata);
             if(gdata){
              const user=JSON.stringify({email:email,password:password})
              const store=await AsyncStorage.setItem("user",user);
              props.navigation.navigate("main")
             }
             }          
        } catch (error) {
            console.log(error);
        }
        console.log("hello this is test")
    }
  return (
    <View style={{flex:1,width:"100%"}}>

     <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",gap:4}}>
     <Text style={{fontSize:24,fontWeight:"800"}}> Signup Khata App </Text>
     <TextInput style={{borderWidth:2,borderColor:"black",width:"80%",}} placeholder='Enter Name' onChangeText={(text)=>{setname(text)}}></TextInput>
     
          <TextInput style={{borderWidth:2,borderColor:"black",width:"80%",}} placeholder='Enter email' onChangeText={(text)=>{setemail(text)}}></TextInput>
          <TextInput style={{borderWidth:2,borderColor:"black",width:"80%",}} placeholder='Enter new password' onChangeText={(text)=>{setpassword(text)}}></TextInput>
          <View style={{width:"80%"}}>
          <Button title='Signup' onPress={()=>{HandleSignup()}} ></Button>
          </View>
          <View style={{display:"flex",flexDirection:"row",width:"80%",justifyContent:"center",alignItems:"center"}}>
          <Text>If you are Register ? </Text>
          <TouchableOpacity onPress={()=>{
             props.navigation.navigate("login")
          }}>
             <Text style={{color:"blue",fontSize:20,fontWeight:600}}>Login</Text>
          </TouchableOpacity>
       </View>
     </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})