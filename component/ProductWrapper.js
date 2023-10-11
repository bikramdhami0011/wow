import Product from './ReduxComp/Product'
import Header from './ReduxComp/Header'

import React from 'react'
import { StyleSheet, Text, View,Button, ScrollView } from 'react-native'
const PoductWrapper= (props) => {
    const NavigFun =()=>{
        props.navigation.navigate("UserList")
        
    }
  const Data=[
    {name:"Iphone",
    price:200,
    color:"red",
    image:"https://media.istockphoto.com/id/1449090549/photo/mobile-phones-premium-png-digital-devices-for-mockup.jpg?s=612x612&w=0&k=20&c=cPezhefKNezsVuNaYC4XjLzTO0JPhv0nAW9DaiR7j60="
  },
  {
  name:"Iphone12",
  price:2000,
  color:"grayblue",
  image:"https://media.istockphoto.com/id/1449090549/photo/mobile-phones-premium-png-digital-devices-for-mockup.jpg?s=612x612&w=0&k=20&c=cPezhefKNezsVuNaYC4XjLzTO0JPhv0nAW9DaiR7j60="
  },
  {name:"Iphone12promax",
  price:20000,
  color:"green",
  image:"https://media.istockphoto.com/id/1449090549/photo/mobile-phones-premium-png-digital-devices-for-mockup.jpg?s=612x612&w=0&k=20&c=cPezhefKNezsVuNaYC4XjLzTO0JPhv0nAW9DaiR7j60="
  },
  ]
    return (
      <View style={{flex:1,justifyContent:"flex-end"}}>
      <Button title='UserList' onPress={()=>{NavigFun()}}></Button>
      <Header></Header>
       <ScrollView>
        {
          Data.map((item)=><Product item={item}/>)
        }
       </ScrollView>
      </View>
    )
  }
  
  
  const styles = StyleSheet.create({
  text:{fontSize:40,marginTop:20,marginBottom:100}
  })
  export default PoductWrapper;