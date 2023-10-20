// import {Alert, Button, Image, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';


// import { ReactNativeFirebase, utils } from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage'
// import DocumentPicker from 'react-native-document-picker';
// import RNFetchBlob from 'rn-fetch-blob'
// const ImageStore = () => {
  
//   const [img, setimg] = useState(null);
//   const [imgdelete,setimgdelete]=useState(null);
//  const [downUrl,setdownUrl]=useState(null);
//   const SelectDoc = async () => {
//     try {
//       const Pickfile = await DocumentPicker.pickSingle({
//         type: [DocumentPicker.types.images],
//         copyTo:"cachesDirectory"
//       })
//       console.log("this is select part",Pickfile)
//     const image=await Pickfile;
//       setimg(image);
//       console.log(image);
//     } catch (error) {
      
//     }
//   };
//   const UploadImage = async () => {
//     try {
     
//       // const reference =await storage()
//       // .ref(`/images/${img.name}`)
//       // .putFile(img.fileCopyUri);
//       const reference = storage().ref(`/images/${img.name}`)
//       const putfile= await reference.putFile(img.fileCopyUri);

//       const fullpaths=putfile.metadata.fullPath
//      const Url=reference.getDownloadURL();
//      setdownUrl(Url);
//     //  const fullpaths=reference.metadata.fullPath
//      setimgdelete(fullpaths);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const DeleteImage=async()=>{
//     try {
//       const delfirestoreimage= await storage().ref(imgdelete).delete()
//       console.log("this is delete respon ",delfirestoreimage);
//     } catch (error) {
//       console.log(error);
//     }
   
//   }
 
    
  
//   const DownloadImage=async()=>{

//     // try {
//     //   const granted = await PermissionsAndroid.request(
//     //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAG,
//     //     {
//     //       title: 'Cool Photo App Storage Permission',
//     //       message:
//     //         'Cool Photo App needs access to your storage ' +
//     //         'so you can take awesome pictures.',
//     //       buttonNeutral: 'Ask Me Later',
//     //       buttonNegative: 'Cancel',
//     //       buttonPositive: 'OK',
//     //     },
//     //   );
//     //   console.log("---> granted true",granted)

//     //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     //     console.log('accepted permission');
         
//     //   } else {
//     //     // DownloadStart()
//     //     console.log("permission denied .")
//     //   }
//     // } catch (err) {
//     //   console.warn(err);
//     // }
//     try {
//       const perms=await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
//     console.log(perms);
   
//       function DownloadStart(){
//         const {config,fs}=RNFetchBlob;
//         const fileDir=fs.dirs.DocumentDir
//         config({
//          // add this option that makes response data to be stored as a file,
//          // this is much more performant.
//          fileCache : true,
//         addAndroidDownloads:{
//          useDownloadManager:true,
//          notification:true,
//          path:fileDir +"/downloadimage/"+".jpg",
//          description:"file download"
//         }
//        })
//        .fetch('GET', downUrl, {
//          //some headers ..
//        })
//        .then((res) => {
//          // the temp file path
//          console.log('The file saved to ', res.path())
//          Alert.alert("file is downloaded successfully")
//        })
//      }
//      DownloadStart();

    
//     } catch (error) {
//         console.log(error)
//     }
//   };

//   return (
//     <View>
//       <Text>ImageStore</Text>
//       <View>
//         <Text> Select Image form gallery</Text>
//         {img ? (
//           <View>
//             <Image
//               source={{uri: img.uri}}
//               style={{
//                 height: 200,
//                 width: '100%',
//                 objectFit: 'cover',
//                 overflow: 'hidden',
//               }}></Image>
//             <Text> name of Image is : {img.name}</Text>
//           </View>
//         ) : (
//           <Text> Image is not selected</Text>
//         )}
//         <Button
//           title="select"
//           onPress={() => {
//             SelectDoc();
//           }}></Button>
//         <View>
//           <Text>Uploading Image into fireStorage </Text>
//           <Button
//             title="Upload"
//             onPress={() => {
//               UploadImage();
//             }}>
//             {' '}
//           </Button>
//           <TouchableOpacity style={{marginTop:20,marginBottom:5 ,backgroundColor:"lightblue",height:40,width:"auto",justifyContent:"center",alignItems:"center"}} onPress={()=>{
//             DeleteImage()
//           }}>
//              <Text style={{color:"red",fontSize:20}}>Delete Image</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={{marginTop:20,marginBottom:5 ,backgroundColor:"lightblue",height:40,width:"auto",justifyContent:"center",alignItems:"center"}} onPress={()=>{
//             DownloadImage()
//           }}>
//              <Text style={{color:"black",fontSize:20}}>Download Image</Text>
//           </TouchableOpacity>
//         </View>
        
//       </View>
//     </View>
//   );

//  };
// export default ImageStore;

// const styles = StyleSheet.create({});
import { ActivityIndicator, Alert, Button, Image, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

const ImageStore = () => {
  const [img, setimg] = useState(null);
  const [imgdelete, setimgdelete] = useState(null);
  const [downUrl, setdownUrl] = useState(null);
  const [Indicator,setIndicator]=useState(false);
  const data= storage().ref("/images/1.jpg").getDownloadURL();

  console.log("this is data storage url",data);
  const SelectDoc = async () => {
    try {
      const Pickfile = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: "cachesDirectory"
      });
   
      const image = await Pickfile;
      setimg(image);
      
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };

  const UploadImage = async () => {
      setIndicator(true);
    try {
      
      const reference = storage().ref(`/images/${img.name}`);
      
      const putfile = await reference.putFile(img.fileCopyUri);
      const fullpaths = putfile.metadata.fullPath;
      const Url = await reference.getDownloadURL();
       if(Url){
        setIndicator(false);
       }
      setdownUrl(Url);
      setimgdelete(fullpaths);
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };

  const DeleteImage = async () => {
    try {
      const delfirestoreimage = await storage().ref(imgdelete).delete();
      console.log("This is delete response", delfirestoreimage);
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };

  const DownloadImage = async () => {
    setIndicator(true);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to download the image.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const fileDir = RNFetchBlob.fs.dirs.DownloadDir; // Use DownloadDir for downloads

        RNFetchBlob.config({
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: fileDir + '/' + img.name, // Save the file with its original name
            description: 'Image download',
          }
        })
        .fetch('GET', downUrl)
        .then((res) => {
          console.log('The file saved to', res.path());
          if(res){
            setIndicator(false);
          }
          Alert.alert('File is downloaded successfully');
        })
        .catch((error) => {
          // Handle error here
          console.error(error);
        });
      } else {
        setIndicator(false)
        console.log('Permission denied.');
      }
    } catch (error) {
      setIndicator(false)
      // Handle error here
      console.error(error);
    }
  };

  return (
    <View>
  {
    Indicator ? <ActivityIndicator size={100}></ActivityIndicator>:<Text> No any Activity</Text>
  }
    <Text>ImageStore</Text>
<View>
        <Text> Select Image form gallery</Text>
         {img ? (
          <View>
            <Image
              source={{uri: img.uri}}
              style={{
                height: 200,
                width: '100%',
                objectFit: 'cover',
                overflow: 'hidden',
              }}></Image>
            <Text> name of Image is : {img.name}</Text>
          </View>
        ) : (
          <Text> Image is not selected</Text>
        )}
        <Button
          title="select"
          onPress={() => {
            SelectDoc();
          }}></Button>
        <View>
          <Text>Uploading Image into fireStorage </Text>
          <Button
            title="Upload"
            onPress={() => {
              UploadImage();
            }}>
           
          </Button>
          <TouchableOpacity style={{marginTop:20,marginBottom:5 ,backgroundColor:"lightblue",height:40,width:"auto",justifyContent:"center",alignItems:"center"}} onPress={()=>{
            DeleteImage()
          }}>
             <Text style={{color:"red",fontSize:20}}>Delete Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:20,marginBottom:5 ,backgroundColor:"lightblue",height:40,width:"auto",justifyContent:"center",alignItems:"center"}} onPress={()=>{
            DownloadImage()
          }}>
             <Text style={{color:"black",fontSize:20}}>Download Image</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

export default ImageStore;
