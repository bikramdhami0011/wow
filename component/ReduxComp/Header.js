import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
  const [itemcount,setitemcount]=useState(0);
  const selector=useSelector((item)=>{
    const data=item.UserAddCard
    return data
  })
  // setitemcount(selector);

  useEffect(()=>{
    setitemcount(selector.length);
    
  },[selector])
  return (
    <View style={style.header}>
      <Text style={style.text}>{itemcount}</Text>
    </View>
  )
}

export default Header
const style=StyleSheet.create({
    header:{
        height:60,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"lightblue",
    elevation:10
    },
    text:{
      fontSize:30,
      color:"red",
      fontWeight:"500"
    }
})