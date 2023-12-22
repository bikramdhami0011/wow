
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Login from '../Loginsignup/Login';
import Signup from '../Loginsignup/Signup';

import Profile from '../bottomtab/Profile';
import Card from '../bottomtab/Card';
import Home from '../bottomtab/Home';
import { Image } from 'react-native';
const StackNav = () => {

  const stack=createNativeStackNavigator();
  const tab_bottom=createBottomTabNavigator();
  const BottonTab=()=>{
    return  <tab_bottom.Navigator>
            <tab_bottom.Screen name="home" component={Home} options={{tabBarIcon:(c,s)=>(
              <Image source={{uri:"https://media.istockphoto.com/id/1128971667/photo/empty-white-new-construction-cottage-house-just-completed.webp?s=612x612&w=is&k=20&c=tezr1tHGk7rsvkxxrFim-lVD_kQtF1zCefsVqnwyc58=",height:30,width:30}} style={{borderWidth:1,borderRadius:10,borderColor:"red"}}></Image>
            )}}/>
            <tab_bottom.Screen name="profile" component={Profile} />
            <tab_bottom.Screen name="card" component={Card} />
       </tab_bottom.Navigator> 
    
  }
  return (
   <NavigationContainer>
     <stack.Navigator>
    <stack.Screen name='login' component={Login} options={{headerShown:false}}/>
   <stack.Screen name="signup" component={Signup} options={{headerShown:false}}/>
   <stack.Screen name="main" component={BottonTab} options={{headerShown:false}}/>
     </stack.Navigator>
    
   </NavigationContainer>
  )
}

export default StackNav;


