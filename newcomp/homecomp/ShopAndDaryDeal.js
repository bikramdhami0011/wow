// import {StyleSheet, Text, View, Image, TouchableOpacity,ScrollView} from 'react-native';
// import React from 'react';


// const ShopAndDaryDeal = () => {
//   return (
//     <View>
//     <ScrollView>
//     <View
//       style={{
//         display:"flex",
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginVertical: 10,
//         marginHorizontal: 5,
//         rowGap: 10,
//         columnGap: 10,
//       }}>
//       <View
//         style={{
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: 2,
//         }}>
//         <Image
//           source={require('../image/1.jpg')}
//           style={styles.verimage}></Image>
//         <Text style={styles.item}>Ghee</Text>
//         <View style={{flexDirection: 'row', gap: 20}}>
//           <TouchableOpacity>
//             <Text style={[styles.item, {fontSize: 20, fontWeight: '900'}]}>
//               {' '}
//               +{' '}
//             </Text>
//           </TouchableOpacity>
//           <Text style={[styles.item, {fontSize: 20, fontWeight: '900'}]}>
//             2 kg
//           </Text>
//           <TouchableOpacity>
//             <Text style={[styles.item, {fontSize: 30, fontWeight: '900'}]}>
//               {' '}
//               -
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             alignSelf: 'center',
//             backgroundColor: 'yellow',
//             borderRadius: 10,
//             borderColor: 'black',
//             borderWidth: 1,
//             width: 100,
//           }}>
//           <TouchableOpacity
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               alignSelf: 'center',
//               alignContent: 'center',
//               flexDirection: 'row',
//             }}>
//             <Text style={styles.item}>Buy</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   </ScrollView>
//     </View>
   
//   );
// };

// export default ShopAndDaryDeal;
// const styles = StyleSheet.create({
//   horimage: {
//     height: 200,
//     width: 420,
//     objectFit: 'cover',
//     gap: 2,
//     resizeMode: 'cover',
//   },
//   verimage: {
//     height: 150,
//     width: 150,
//   },
//   item: {
//     fontSize: 20,
//     fontWeight: '400',
//     alignSelf: 'center',
//   },
// });
