import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React,{ useEffect, useState} from 'react'
import {useDispatch,useSelector}from "react-redux"
import { Add_To_Card, Remove_To_Card} from '../Redux/Slice';

const Product = (props) => {
  const [show,setshow]=useState(true);
   const dispatch=useDispatch();
   const item=props.item

   const Outcom=useSelector((item)=>{
    const data=item.UserAddCard
    return data
  })

  //(http://10.0.2.2:8081
  useEffect(()=>{
  const data=Outcom.filter((ele)=>{
    return ele.name===item.name
  })
  if(data.length){
    setshow(false);
  }else{
    setshow(true);
  }
  },[Outcom])
  return (
    <View style={style.box}>
      <Text style={style.item} >{item.name}</Text>
      <Text style={style.item}>{item.price}</Text>
      <Text style={style.item}>{item.color}</Text>
      <Image source={{uri:item.image}} style={{height:200,width:250}}></Image>
      
     {
      show?<Button title='Add Card' onPress={()=>dispatch(Add_To_Card(item))}></Button>:<Button title='Remov Card' onPress={()=>{dispatch(Remove_To_Card(item))}}></Button>
     }  
   
    </View>
  )
}

export default Product

const style=StyleSheet.create({
     box:{
      borderWidth:3,
      borderRadius:20,
      
      elevation:2,
      justifyContent:"center",
      textAlign:"center",
      textAlignVertical:"center",
      overflow:"hidden",
      padding:20,
      margin:10
     },
     item:{
       
        fontSize:20,
        borderWidth:0.5
     }
})