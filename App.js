
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

const App = () => {
 const mapssetup=enableLatestRenderer();
  const stack=createNativeStackNavigator();

  const [suser,setuser]=useState(false);
  useEffect(()=>{
   const userAuth= Auth().onAuthStateChanged((user)=>{
     
     setuser(user);
     if(user!=null){
        setuser(true);
     }
   })

  },[])
  return (
   <NavigationContainer>
     <stack.Navigator>

     {
      suser ?   <stack.Screen name='practice' component={Reanimation}/>   :(<stack.Screen name='login' component={LogIn} options={{headerShown:false}} />) ||   <stack.Screen name='signin' component={SignIn}  options={{headerShown:false}}/>
           
       }
     {
      suser ? <stack.Screen name='login' component={LogIn} options={{headerShown:false}}/>  :  <stack.Screen name='signin' component={SignIn}  options={{headerShown:false}}/>
     }
 

     <stack.Screen name="formdata" component={UIuser}/>

     </stack.Navigator>
   </NavigationContainer>
  )
}

export default App;

