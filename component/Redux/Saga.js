import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserList from '../UserList'

// const SagaMd = () => {
//   return (
//     <View>
//       <Text>SagaMd</Text>
//     </View>
//   )
// }
 function* SagaMd() {
  const url="https://dummyjson.com/user";
  let data=yield fetch(url);
  data=yield data.json();
  console.log(data);
  yield put({type:setdata,data});
}
function* sagaData(){
  yield takeEvery(UserList,SagaMd);
}

export default SagaMd

const styles = StyleSheet.create({})