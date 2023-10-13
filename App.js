
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './component/UserList'
import PoductWrapper from './component/ProductWrapper'
import FetchApi from './component/FetchApi'
import { Text, View } from 'react-native'

const App = () => {
//   const [show,setshow]=useState(true);
//   useEffect(()=>{
// setTimeout(()=>{
//    setshow(false)
// },3000)
//   },[])
  const stack=createNativeStackNavigator();
  return (
   <NavigationContainer>
     <stack.Navigator>

      <stack.Screen name="Product" component={PoductWrapper}></stack.Screen>
      <stack.Screen name='UserList' component={UserList}/>
      <stack.Screen name='api' component={FetchApi}/>
     </stack.Navigator>
   </NavigationContainer>
  )
}

export default App;

const SplashScreen=()=>{
  return(
    <View>
    <Text>this is bikram dhami</Text>
    </View>
  )
}