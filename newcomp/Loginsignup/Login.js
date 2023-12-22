import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const [usere,setusere]=useState();
    const [userp,setuserp]=useState();
    const navagation=useNavigation();
    useEffect(async()=>{
      try {
         
         const data=await AsyncStorage.getItem("user");
         const users=await JSON.parse(data);
         
         if(users.email && users.password){
            navagation.replace("main");
         }else{
            // HandleLogIn();
         }
         const getdata=await fetch("http://10.0.2.2:3000/get",{
            method:"GET"
           })
           const userdata=await getdata.json();
           console.log(userdata);
           const user=userdata.map((data)=>{
            console.log(data.email);
            setusere(data.email);
            setuserp(data.password);
          })
      } catch (error) {
         
      }

    },[]);
    const HandleLogIn=async()=>{
       
        
    
       try {
         if(email,password){
            if(email!=usere && password!=userp){
               Alert.alert("Invalide email or password")

            }else{
               // console.log(data);
              
               props.navigation.replace("main")
            // navagation.replace("main")
            }
         }else{
            Alert.alert("all field are required")
         }
       } catch (error) {
         
       }
    }
  return (
    <View style={{flex:1,width:"100%"}}>
   
     <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",gap:4}}>
        <Text style={{fontSize:24,fontWeight:"800"}}> LogIn Khata App </Text>
          <TextInput style={{borderWidth:2,borderColor:"black",width:"80%",}} placeholder='Enter email' onChangeText={(text)=>{setemail(text)}}></TextInput>
          <TextInput style={{borderWidth:2,borderColor:"black",width:"80%",}} placeholder='Enter password' onChangeText={(text)=>{setpassword(text)}}></TextInput>
          <View style={{width:"80%"}}>
          <Button title='Login' onPress={()=>{HandleLogIn()}} ></Button>
          </View>
          <View style={{display:"flex",flexDirection:"row",width:"80%",justifyContent:"center",alignItems:"center"}}>
             <Text>If you are not Register ? </Text>
             <TouchableOpacity onPress={()=>{
                props.navigation.navigate("signup")
             }}>
                <Text style={{color:"blue",fontSize:20,fontWeight:600}}>Signup</Text>
             </TouchableOpacity>
          </View>
     </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})