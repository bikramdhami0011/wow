import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Auth from "@react-native-firebase/auth"
const Reanimation = (props) => {
 const  SingOutUSer=async()=>{
      await Auth().signOut();
  
  }
 return (
   
    <View >
    <View>
      <Text> this is home Screen</Text>
      <Text> User Details</Text>
      <Text> email : {Auth().currentUser.email}</Text>
      <Text> UID : {Auth().currentUser.uid}</Text>
      <Button title='LogOut' onPress={()=>{
       SingOutUSer();
      }}/>
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