
// import React, { useEffect, useState } from 'react'

// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import UserList from './component/UserList'
// import PoductWrapper from './component/ProductWrapper'
// import Reanimation from './component/Reanimation'
// import { Text, View } from 'react-native'
// import UIuser from './component/ApiUSer/UIuser'
// import {enableLatestRenderer} from 'react-native-maps';
// import LogIn from './component/UsingFirebase/Login'
// import SignIn from './component/UsingFirebase/SignIn'
// import Auth from "@react-native-firebase/auth"

// const App = () => {
//  const mapssetup=enableLatestRenderer();
//   const stack=createNativeStackNavigator();

//   const [suser,setuser]=useState(false);
//   useEffect(()=>{
//    const userAuth= Auth().onAuthStateChanged((user)=>{
     
//      setuser(user);
//      if(user!=null){
//         setuser(true);
//      }
//    })

//   },[])
//   return (
//    <NavigationContainer>
//      <stack.Navigator>

//      {
//       suser ?   <stack.Screen name='practice' component={Reanimation}/>   :(<stack.Screen name='login' component={LogIn} options={{headerShown:false}} />) ||   <stack.Screen name='signin' component={SignIn}  options={{headerShown:false}}/>
           
//        }
//      {
//       suser ? <stack.Screen name='login' component={LogIn} options={{headerShown:false}}/>  :  <stack.Screen name='signin' component={SignIn}  options={{headerShown:false}}/>
//      }
 

//      <stack.Screen name="formdata" component={UIuser}/>

//      </stack.Navigator>
//    </NavigationContainer>
//   )
// }

// export default App;

// // home part of the sign in and out 
// import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Auth from "@react-native-firebase/auth"
// const Reanimation = (props) => {
//  const  SingOutUSer=async()=>{
//       await Auth().signOut();
  
//   }
//  return (
   
//     <View >
//     <View>
//       <Text> this is home Screen</Text>
//       <Text> User Details</Text>
//       <Text> email : {Auth().currentUser.email}</Text>
//       <Text> UID : {Auth().currentUser.uid}</Text>
//       <Button title='LogOut' onPress={()=>{
//        SingOutUSer();
//       }}/>
//     </View>
    
//     </View>
//   )
// }

// export default Reanimation

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"lightgray",
//    justifyContent:"center",
   
//   },
//   input:{
//     margin:0,
//     height:60,
//     width:"100%",
//     elevation:2,
//     justifyContent:"center",
//     alignItems:"center",
//     alignContent:"center",
//     color:"blue"
   
//   }
// })
// phone no verified half working is done
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Auth from "@react-native-firebase/auth"
const ImageStore = () => {
    const [number,setnumber]=useState("");
    const [otp,setotp]=useState("");
    const [conform,setconform]=useState("");
    const SendForVerify=async()=>{
      const mgnum=+977 +number
    const senNum=await Auth().signInWithPhoneNumber(mgnum)
    console.log(senNum);
    }
  return (
    <View style={styles.container}>
      <Text >Verify Phone NO</Text>
      <View style={styles.box}>
      <TextInput style={{borderWidth:1,borderColor:"blue"}} placeholder='enter phone no' value={number} onChangeText={(text)=>{
       setnumber(text)
      }}></TextInput>
      <Button title='Send Phone No.' onPress={()=>{SendForVerify()}}></Button>
      </View>
      <View style={styles.box}>
      <TextInput style={{borderWidth:1,borderColor:"blue"}} placeholder='enter phone no' value={otp} onChangeText={(text)=>{
        setotp(text)
       }}></TextInput>
      <Button title='Send OTP ' onPress={()=>{SendForVerify()}}></Button>
      </View>
      
    </View>
  )
}

export default ImageStore

const styles = StyleSheet.create({
    container:{
     justifyContent:"center",
     alignItems:"center",
     margin:10, padding:10,
      gap:10
    },
    box:{
       borderWidth:0.5,
       gap:4,
       width:"90%",
       borderRadius:10,
       borderColor:"blue"
    }
})














// import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Auth from "@react-native-firebase/auth"
// import { useNavigation } from '@react-navigation/native'
// import storage from "@react-native-firebase/storage"

// this is the two main part of firebase storage where setup a stack and store the data in firestore
// const Reanimation =(props) => {
// const [url,seturl]=useState("");
// //  const  SingOutUSer=async()=>{
// //       await Auth().signOut();
  
// //   }
// useEffect(async()=>{
//  const data= await storage().ref("/images/1.jpg").getDownloadURL();
//  console.log("howm image url",data);
//  seturl(data)
// },[])
//   const navigation =useNavigation()
//  return (
   
//     <View >
//     <View>
//       <Image source={{uri:url}}></Image>
//       <Text> this is home Screen</Text>
//       <Text> User Details</Text>
//       <Text> email : {Auth().currentUser.email}</Text>
//       <Text> UID : {Auth().currentUser.uid}</Text>
      
     
//       <Button title='goto profile' onPress={()=>{
//           navigation.navigate("image")
//       }}></Button>
//       <View style={{margin:20}}></View>
//     </View>
    
//     </View>
//   )
// }

// export default Reanimation

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"lightgray",
//    justifyContent:"center",
   
//   },
//   input:{
//     margin:0,
//     height:60,
//     width:"100%",
//     elevation:2,
//     justifyContent:"center",
//     alignItems:"center",
//     alignContent:"center",
//     color:"blue"
   
//   }
// })


// import React, { useEffect, useState } from 'react'

// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import UserList from './component/UserList'
// import PoductWrapper from './component/ProductWrapper'
// import Reanimation from './component/Reanimation'
// import { Text, View } from 'react-native'
// import UIuser from './component/ApiUSer/UIuser'
// import {enableLatestRenderer} from 'react-native-maps';
// import LogIn from './component/UsingFirebase/Login'
// import SignIn from './component/UsingFirebase/SignIn'
// import Auth from "@react-native-firebase/auth"
// import ImageStore from './component/UsingFirebase/ImageStore'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const App = () => {
//  const mapssetup=enableLatestRenderer();
//   const stack=createNativeStackNavigator();

//   const [suser,setuser]=useState(false);
//   useEffect(()=>{
//    const userAuth= Auth().onAuthStateChanged((user)=>{
//     const storeData = async (value) => {
//       try {
//  const getdata=await AsyncStorage.getItem("user");
//         if(getdata !=null){
//           setuser(true);
//         }else{
//           setuser(false);
//         }
//       } catch (e) {
//         // saving error
//       }
      

//     };
    
//     //  setuser(user);
//     //  if(user!=null){
//     //     setuser(true);
//     //  }
     
//    })

//   },[])
 
  
//   // console.log(suser.email);
//   return (
//    <NavigationContainer>
//      <stack.Navigator>
    
//      {
//       suser ? <stack.Screen name='practice' component={Reanimation} options={{headerShown:false}}/>   :(<stack.Screen name='login' component={LogIn} options={{headerShown:false}} />) ||   <stack.Screen name='signin' component={SignIn}  options={{headerShown:false}}/>
           
//        }
//      {
//       suser ? <stack.Screen name='login' component={LogIn} options={{headerShown:false}}/>  :  <stack.Screen name='signin' component={SignIn}  options={{headerShown:false}}/>
//      }
    
//     <stack.Screen name="image" component={ImageStore}/>
//      <stack.Screen name="practice" component={Reanimation}/>
    
    
//      </stack.Navigator>
//    </NavigationContainer>
//   )
// }

// export default App;


