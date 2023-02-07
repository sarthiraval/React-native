import React from 'react';
import styles from './style';
import { mini } from '../../assets/image';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

let Home = () => {
   const gestStorage = async () => {
      try {
        const value = await AsyncStorage.getItem("email")
        const users = await AsyncStorage.getItem("usrename")
        const phones = await AsyncStorage.getItem("phone")
        const passwords = await AsyncStorage.getItem("password")
        if (value !== null && users !== null && phones !== null && passwords !== null) {
  
          alert(`welcome  
          My Email is ${value}  
      My Name is ${users}  
          My PhoneNumber is ${phones} 
          My Password is ${passwords}`)
         BackHandler
          
        }
        else{
          
        }
  
      }
      catch (error) {
        console.log("error :", error);
      }
    }
   return (
      <ImageBackground
         source={mini}
         style={styles.AllContent}>

         <SafeAreaView style={styles.SafeDesign} >
            <TouchableOpacity onPress={gestStorage}>
               
               <Text style={styles.Texts} >Sarthi</Text>
            </TouchableOpacity>
         </SafeAreaView>
      </ImageBackground>
   )
}
export default Home