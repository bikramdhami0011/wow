import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddProduct } from '../shopRedux/Slice';

const PersonDeal = (props) => {
    const {item}=props;
    // console.log(item);
    
    const [count,setcount]=useState(1);
    const dispatch=useDispatch();
    const SendData=()=>{
      dispatch(AddProduct({image:item.imageUrl,addItem:item.addItem,name:item.name,rupess:item.rupess}));
    }
      //  const call=useCallback(()=>{
            
      //  },[selector]);
      const selector=useSelector((state)=>{
        return state.addProduct
      });
      
      console.log("this is selectro",selector);
  return (
    <View
      style={{
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        rowGap: 10,
        columnGap: 10,
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}>
        <Image
          source={{uri:item.imageUrl}}
          style={styles.verimage}></Image>
        <Text style={styles.item}>{item.name}</Text>
        <View style={{flexDirection: 'row', gap: 15}}>
        <TouchableOpacity onPress={()=>{
       SendData()
        }} style={{backgroundColor:"gray" , width:24}}>
          <Text style={[styles.item, {fontSize: 30, fontWeight: '900',margin:0,padding:0}]}>
            +
          </Text>
        </TouchableOpacity>
        <Text style={[styles.item, {fontSize: 30, fontWeight: '900'}]}>
          1Kg
        </Text>
        <TouchableOpacity style={{backgroundColor:"gray" , width:24}}>
          <Text style={[styles.item, {fontSize: 30, fontWeight: '900'}]}>
            -
          </Text>
        </TouchableOpacity>
      </View>
      <Text>{item.rupess}</Text>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: 'yellow',
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
            width: 100,
          }}>
          
          <TouchableOpacity
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.item}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default  memo(PersonDeal);
const styles = StyleSheet.create({
  horimage: {
    height: 200,
    width: 420,
    objectFit: 'cover',
    gap: 2,
    resizeMode: 'cover',
  },
  verimage: {
    height: 150,
    width: 150,
    flexDirection: 'row',
  },
  item: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
