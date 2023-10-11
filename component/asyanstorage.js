// import React, { useState } from 'react'
// import { Button, Text, View } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const App = () => {
//   const [nam,setnam]=useState("null");
//   const setData=async()=>{
//  await  AsyncStorage.setItem("name","bikram  ")

//   }
//   const getData=async()=>{
//    const name=await AsyncStorage.getItem("name");
//    console.warn(name);
//   }
//   const removeData=async()=>{
//     const name=await AsyncStorage.getItem("name");
//     const data= JSON.stringify(name);
//     setnam(data);
//    }
//   return (
//    <View> 
//     <Text></Text>
//     <Button title='setdata' onPress={()=>setData()}></Button>
//     <Button title='getdata' onPress={()=>getData()}></Button>
//     <Button title='storedata' onPress={()=>removeData()}></Button>
//     <Text style={{fontSize:40}}> store data is : {nam}</Text>
//    </View>
//   )
// }

// export default App

import { StyleSheet, Text, View,Button } from 'react-native'
import React, {useEffect,useState}from 'react'

const Afold = () => {
  const  FetchData=async()=>{
    const fdata=await fetch("http://10.0.2.2:3000/users");
    const data=await fdata.json();
   console.warn(data)
    
   }
try {
 
  useEffect(()=>{
    FetchData();
    
    },[])
} catch (error) {
  console.warn(error)
}
  return (
    <View style={{flex:1,justifyContent:"flex-end"}}>
      <Text style={styles.text}> Helllo bikram</Text>
       <Button title='Fetch' onPress={()=>FetchData()}></Button>
    </View>
  )
}

export default Afold

const styles = StyleSheet.create({
text:{fontSize:40,marginTop:20,marginBottom:100}
})
// import React, { useRef, useState } from 'react'
// import 'react-native-gesture-handler';
// import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const App = () => {
// const drawer=createDrawerNavigator();
//   return (
//   <NavigationContainer>
//    <drawer.Navigator screenOptions={{headerTintColor:"blue"}}>
//      <drawer.Screen name='Home' component={Home}/>
//      <drawer.Screen name='contact' component={Contact}/>
//    </drawer.Navigator>
//   </NavigationContainer>
//   )
// }

// export default App

// const Home=()=>{

//   const inref=useRef();
// const InputFun=()=>{
//   inref.current.focus()
//   inref.current.setNativeProps({
//     style: { borderWidth:2,borderColor:"black"},
//   });
//   console.warn(inref.current)
// }
//   return(
//     <View>
//      <Text>This is Home comp</Text>
//      <TextInput placeholder='enter name' style={style.inputtext} ref={inref}></TextInput>
//      <TextInput placeholder='enter email' style={style.inputtext} ></TextInput>
//      <Button title='std ref' onPress={()=>InputFun()}></Button>
//     </View>
//   )
// }


// const Contact = () => {
//   return (
//     <View>
//       <Text>Contact</Text>
//     </View>
//   )
// }
// const style=StyleSheet.create({
//   inputtext:{
//     borderWidth:2,
//     borderColor:"lightgrey",
//     margin:5,
//     padding:5,
//      fontSize:20,
    
//   }
// })

