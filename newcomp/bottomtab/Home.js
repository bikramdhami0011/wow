import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import PersonDeal from '../homecomp/PersonDeal';
import ShopAndDaryDeal from '../homecomp/ShopAndDaryDeal';
import { useSelector } from 'react-redux';

const Home = () => {
  const [ritem,setritem]=useState(1);

 //learinig is function
 const learning=useCallback(()=>{

 },[]);
 //both are same 
//  const learning=()=>{

//  }
 
  const dealperson = [
    {id:1,
      imageUrl:
        'https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'ghee',
      date: Date.now(),
      rupess:800,
      addItem:ritem
    },
    {id:2,
      imageUrl:
        'https://media.istockphoto.com/id/1200355990/photo/dried-soybeans.webp?b=1&s=170667a&w=0&k=20&c=o3PCHiaxfj2H6lIOgVcY7pQ4NFA1zl1oVPQmwbSuOnE=',
      name: 'soyabean',
      date: Date.now(),
      rupess:100,
      addItem:ritem
    },
    {id:3,
      imageUrl:
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww',
      name: 'potato',
      date: Date.now(),
       rupess:800,
       addItem:ritem
    },
    {id:4,
      imageUrl:
        'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZXl8ZW58MHx8MHx8fDA%3D',
      name: 'honey',
      date: Date.now(),
       rupess:800,
       addItem:ritem
    },
    {id:5,
      imageUrl:
        'https://images.unsplash.com/photo-1626012109496-21f579f648dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbnV0fGVufDB8fDB8fHww',
      name: 'walnut',
      date: Date.now(),
      rupess:800,
      addItem:ritem
    },
    {id:6,
      imageUrl:'https://media.istockphoto.com/id/1348022418/photo/closeup-of-ophiocordyceps-sinensis-or-mushroom-cordyceps-in-brown-sack-bag-on-isolated.webp?b=1&s=170667a&w=0&k=20&c=V62TLylh0fUyy7wdFYsGdqVahc555_OsOyiQ4nm0h8M=',
      name: 'yarchagumba',
      date: Date.now(),
      rupess:800,
      addItem:ritem
    },
  ];

 
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{height: 200, width: '100%'}}>
          <ScrollView
            horizontal
            automaticallyAdjustContentInsets
            showsHorizontalScrollIndicator
            style={{
              display: 'flex',
              height: 200,
              backgroundColor: 'gray',
              width: '100%',
              gap: 20,
              borderWidth: 1,
              borderColor: 'black',
              rowGap: 1,
            }}>
            <SliderBox
              images={dealperson.map(item => {
                return item.imageUrl;
              })}
              sliderBoxHeight={200}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              autoplay
              circleLoop
            />
          </ScrollView>
        </View>

        <View
          style={{
            display: 'column',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 800}}>
            Deals With Common Person
          </Text>
          {dealperson.map(item => (
            <PersonDeal
              item={item}
            />

          ))}
        </View>
        <View style={{height: 200, width: '100%'}}>
        <ScrollView
          horizontal
          automaticallyAdjustContentInsets
          showsHorizontalScrollIndicator
          style={{
            display: 'flex',
            height: 200,
            backgroundColor: 'gray',
            width: '100%',
            gap: 20,
            borderWidth: 1,
            borderColor: 'black',
            rowGap: 1,
          }}>
          <SliderBox
            images={dealperson.map(item => {
              return item.imageUrl;
            })}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            autoplay
            circleLoop
          />
        </ScrollView>
      </View>

        <View
        style={{
          display: 'column',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, fontWeight: 800}}>
          Deals With shop and Dairy
        </Text>
        {dealperson.map(item => (
          <PersonDeal
            item={item}
          />

        ))}
      </View>
    
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
  },
  item: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
// <View
// style={{
//   flexDirection: 'row',
//   flexWrap:"wrap",
//   flex: 1,
//   width: '100%',
// }}>
// <ScrollView>
//   <Text style={{fontSize: 24, fontWeight: 800}}>
//     Deals With Shop and Dairy
//   </Text>
//   {dealperson.map(item => (
//     <ShopAndDaryDeal item={item.imageUrl}></ShopAndDaryDeal>
//   ))}
// </ScrollView>
// </View>