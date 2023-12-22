import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const   Reanimation =()=>{
  return (
    <View style={styles.container}>
    <View style={{flex:1,width:"100%",alignSelf:"center",justifyContent:"space-between",alignItems:"center",alignContent:"center"}}>
  
    <Video
    source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }} // Replace with your video source
    style={styles.video}
    controls={true} // Enable video controls
  /> 
  </View>
    </View>
  );
}
    
export default Reanimation
 

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
  },
  video:{
    height:200,
    width:"100%",
     borderWidth:4,
     alignSelf:"center",
     verticalAlign:"middle",
     alignItems:"center",
     textAlignVertical:"center",
    margin:"auto",
   overflow:"hidden",
    objectFit:"cover",

  }
});


