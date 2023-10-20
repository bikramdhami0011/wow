import { Alert, Button, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"
import Auth from "@react-native-firebase/auth"
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LogIn = (props) => {
    const ButtonComp=Animated.createAnimatedComponent(TouchableOpacity)
  const scale=useSharedValue(1);
  const AnimatedStyle=useAnimatedStyle(()=>{
    return {
        transform:[{translateX:scale.value}]
    }
  })
  const [email,setemail]=useState(null);
  const [password,setpassword]=useState(null);
  const [get,setget]=useState(null);
  const UserSignIn=async()=>{
      if(get!=null){
        props.navigation.navigate("practice");
      }else{
        if(email,password){
          try {
            // const userAurth=await Auth().signInWithEmailAndPassword(email,password);
            const userAuth=await Auth().signInWithEmailAndPassword(email,password);
          
            if (userAuth.user.emailVerified!=true) {
                Alert.alert("Please verify your  email...")
                // await Auth().currentUser.sendEmailVerification();
    
            } else {
                Alert.alert(" Email verify successfully ..");
                 
         const getdata=await  AsyncStorage.setItem("user",email);
            const setdata= await AsyncStorage.getItem("user");
            setget(setdata);
             if(setdata){
              props.navigation.navigate("practice");
             }else{
              console.log("email is not valid")
             }
               
              
            }
        } catch (error) {
         
          
        }
        }else{
         Alert.alert("Please fill the all field...")
        }
      }
    
    
  
  }


     
   
  const navigation =useNavigation();
  return (
    <Animated.View style={[styles.container,AnimatedStyle]}>
    <View>
    <Text>The use is Login from using email and password</Text>
    <TextInput style={styles.input} placeholder='enter email' onChangeText={(text)=>{
      setemail(text);
    }}></TextInput>
    <TextInput style={styles.input} placeholder='enter password' onChangeText={(text)=>{
      setpassword(text);
    }}></TextInput>
    
    <Button title='login' onPress={()=>{
      UserSignIn()
    }}> </Button>
    <View  style={styles.input}> 
    <Text>If you are not Register ? </Text>
    <ButtonComp onPress={()=>{
      navigation.navigate("signin")
    //  props.navigation.navigate("signin")
      scale.value=withSpring(100,undefined,(finish)=>{
        scale.value=withSpring(0)
      })
    }}>
      <Text style={{color:"blue",fontSize:20,fontWeight:500}}> Sign In</Text>
    </ButtonComp>
    </View>
    </View>
    
    </Animated.View>
  )
}

export default LogIn

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
    color:"blue",
    display:"flex",
    flexDirection:"row"
   
  }
})