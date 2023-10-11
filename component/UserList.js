import { View, Text,Button } from 'react-native'
import React from 'react'

const UserList = (props) => {
   
 const GoApiCall=()=>{
  
    props.navigation.navigate('api')
    }
  return (
    <View>
      <Text style={{fontSize:40}}> this is UserList </Text>
      <Button title='goto fetch' onPress={()=>{
     GoApiCall()
      }}></Button>
    </View>
  )
}

export default UserList