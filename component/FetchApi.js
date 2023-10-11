import React from 'react';
import { View, Text, Button } from 'react-native';

// Rename the function to avoid confusion with the component
async function fetchData() {
  // try {
  //   const response = await fetch('http://10.0.2.2:3000/users');
  //   const data = await response.json();
  //   console.warn(data);
  // } catch (error) {
  //   console.warn(error);

  // }
  console.log("api is featching...")
}

export default function FetchApi() {
  return (
    <View>
      <Text>FetchApi</Text>
      <Button title="APICall" onPress={fetchData} />
    </View>
  );
}
