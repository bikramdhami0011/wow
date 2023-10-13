import { View, Text,Button } from 'react-native'
import React from 'react'
import UIuser from './ApiUSer/UIuser'

const UserList = (props) => {
   
 const GoApiCall=()=>{
  
    props.navigation.navigate('api')
    }
  return (
    <View>
      <Text style={{fontSize:40}}> this is send User data</Text>
      <UIuser></UIuser>
      
    </View>
  )
}

export default UserList