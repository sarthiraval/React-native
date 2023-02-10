import React, { useState, useEffect } from 'react';
import styles from './style';
import { mini } from '../../assets/image';
import { ImageBackground, SafeAreaView, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';




let Home = () => {
   const [username, setname] = useState("")
   const [uservalue, setvalue] = useState("")
   const [userphone, setphone] = useState("")
   const [userpass, setpass] = useState("")
   //  var users = await AsyncStorage.getItem("usrename")
   // console.log(users);

   useEffect(async () => {
      setname(await AsyncStorage.getItem("email"));
      setvalue(await AsyncStorage.getItem("usrename"));
      setphone(await AsyncStorage.getItem("phone"));
      setpass(await AsyncStorage.getItem("password"));
   }, [])

   
   // console.log(usename);

   // const gestStorage = async () => {
   //       try {
   //       alert(`welcome  
   //        My Email is ${value}  
   //    My Name is ${users}  
   //        My PhoneNumber is ${phones} 
   //        My Password is ${passwords}`)


   //    }
   //    catch (error) {
   //       console.log("error :", error);
   //    }
   // }

   return (
      <ImageBackground
         source={mini}
         style={styles.AllContent}>

         <SafeAreaView style={styles.SafeDesign} >
            {/* <TouchableOpacity onPress={gestStorage}>

               <Text style={styles.Texts}>Sarthi</Text>

            </TouchableOpacity> */}

            <Text style={styles.Texts}>Name = {username}</Text>
            <Text style={styles.Texts}>Email = {uservalue}</Text>
            <Text style={styles.Texts}>Phone = {userphone}</Text>
            <Text style={styles.Texts}>Password = {userpass}</Text>

         </SafeAreaView>
      </ImageBackground>
   )
}
export default Home