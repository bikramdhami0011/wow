
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