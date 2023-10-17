import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        console.log("hello birkam dhami")
      }}
      
      query={{
        key: 'AIzaSyAv5qZjl3RChSPewEzs5qPq_kftKkzGkPI',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;