
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './component/UserList'
import PoductWrapper from './component/ProductWrapper'
import Reanimation from './component/Reanimation'
import { Text, View } from 'react-native'
import UIuser from './component/ApiUSer/UIuser'
import {enableLatestRenderer} from 'react-native-maps';
import LogIn from './component/UsingFirebase/Login'
import SignIn from './component/UsingFirebase/SignIn'
import Auth from "@react-native-firebase/auth"
import ImageStore from './component/UsingFirebase/ImageStore'
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
 const mapssetup=enableLatestRenderer();
  const stack=createNativeStackNavigator();

  const [suser,setuser]=useState(false);
  useEffect(()=>{
   const userAuth= Auth().onAuthStateChanged((user)=>{
    const storeData = async (value) => {
      try {
 const getdata=await AsyncStorage.getItem("user");
        if(getdata !=null){
          setuser(true);
        }else{
          setuser(false);
        }
      } catch (e) {
        // saving error
      }
      

    };
    
    //  setuser(user);
    //  if(user!=null){
    //     setuser(true);
    //  }
     
   })

  },[])
 
  
  // console.log(suser.email);
  return (
   <NavigationContainer>
     <stack.Navigator>
    
     {
      suser ? <stack.Screen name='practice' component={Reanimation} options={{headerShown:false}}/>   :(<stack.Screen name='login' component={LogIn} options={{headerShown:false}} />) ||   <stack.Screen name='signin' component={SignIn}  options={{headerShown:false}}/>
           
       }
     {
      suser ? <stack.Screen name='login' component={LogIn} options={{headerShown:false}}/>  :  <stack.Screen name='signin' component={SignIn}  options={{headerShown:false}}/>
     }
    
    <stack.Screen name="image" component={ImageStore}/>
     <stack.Screen name="practice" component={Reanimation}/>
    
    
     </stack.Navigator>
   </NavigationContainer>
  )
}

export default App;


