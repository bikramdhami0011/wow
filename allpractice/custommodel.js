import React, { useState } from 'react'
import { View,Text, StyleSheet, Button, useAnimatedValue } from 'react-native'
const App = () => {
  const [hide,show]=useState(false);
  return (
     <View style={style.main}>
      {
        hide ? <View style={style.model}>
        <View style={style.body}>
         <Text> This is content lorem</Text>
         <Button title='Close' onPress={()=>{show(false)}}></Button>
        </View>
       </View>:null
      }

        <Button title='Open' onPress={()=>{show(true)}}></Button>
        
     </View>
  )
}

export default App;
const style=StyleSheet.create({
  main:{
    flex:1,
   justifyContent:"flex-end",
    
  },
  model:{
    flex:1,
    backgroundColor:"lightgrey",
    justifyContent:"center",
    alignItems:"center"
  },
  body:{
    
    height:300,
    width:300,
    backgroundColor:"green",
    // textAlign:"center",
    justifyContent:"flex-end",
    gap:40
  }

})