import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      
      <View>
           
           <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           <View style={{position:"relative",justifyContent:"center",alignItems:"center"}}>
           <Image style={{backgroundColor:"blue",width:200,height:200,borderRadius:100,margin:10}}></Image>
           <Text style={{position:"absolute",color:"white",fontSize:40,fontWeight:800}}>N</Text>
           </View>
           
           <Text>your name</Text>
           <Text>your email</Text>
           </View>
           
           
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})