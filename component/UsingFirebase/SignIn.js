import { Alert, Button, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import firestore from "@react-native-firebase/firestore"
import { initializeApp } from "firebase/app";
import Auth from "@react-native-firebase/auth"
import Animated, {useAnimatedStyle, useSharedValue, withDelay, withSpring} from 'react-native-reanimated';
const SignIn = (props) => {
  const [name,setname]=useState(null);
    const ButtonComp=Animated.createAnimatedComponent(TouchableOpacity)
    const scale=useSharedValue(1);
    const AnimatedStyle=useAnimatedStyle(()=>{
      return {
          transform:[{scale:scale.value}]
      }
    })
  const [email,setemail]=useState(null);
  const [password,setpassword]=useState(null);
  const UserSignIn=async()=>{
   
    if(email && password){
      try {
        const userAuth=await Auth().createUserWithEmailAndPassword(email,password);

          const userVerify=await Auth().currentUser.sendEmailVerification();
          const fstore =await firestore().collection("users").doc(userAuth.user.uid).set({name:name,email:email,id:userAuth.user.uid})
          console.log(fstore);
          
        if(!userVerify){
           
            Alert.alert("Please check the email inbox ...")
        }
    } catch (error) {
     
       Alert.alert(error.message);
    }
    }else{
     Alert.alert("Please fill the all field...")
    }
  
  }
  return (
    <Animated.View style={[styles.container,AnimatedStyle]}>
    <View>
    <Text>The use is sign in from using email and password</Text>
    <TextInput style={styles.input} placeholder='enter name' onChangeText={(text)=>{
      setname(text);
    }}></TextInput>
    <TextInput style={styles.input} placeholder='enter email' onChangeText={(text)=>{
      setemail(text);
    }}></TextInput>
    <TextInput style={styles.input} placeholder='enter password' onChangeText={(text)=>{
      setpassword(text);
    }}></TextInput>

    
    <Button title='sign in' onPress={()=>{
      UserSignIn()
    }}> </Button>
    </View>
     <View style={styles.input}>
     <Text>If you are Registed ? </Text>
     <ButtonComp onPress={()=>{
      scale.value=withDelay(200,withSpring(0,undefined,(finish)=>{
        scale.value=withSpring(1)})) 
        props.navigation.navigate("login")
        
     }}>
       <Text style={{color:"blue",fontSize:20,fontWeight:500}}> LogIn</Text>
     </ButtonComp>
     </View>
    </Animated.View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"lightgray",
   justifyContent:"center",
   
  },
  input:{
    display:"flex",
    flexDirection:"row",
    margin:0,
    height:60,
    
    width:"100%",
    elevation:2,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    color:"blue",
    textShadowColor:"blue"
   
  }
})