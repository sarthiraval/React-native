import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { mini } from '../../assets/image';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { black, red } from '../../assets/constants';

const Profile = ({ navigation }) => {
   const [username, setname] = useState("")
   const [uservalue, setvalue] = useState("")
   const [userphone, setphone] = useState("")
   const [userpass, setpass] = useState("")
   useEffect(() => {
      async function fetchData() {
         setname(await AsyncStorage.getItem("email"));
         setvalue(await AsyncStorage.getItem("usrename"));
         setphone(await AsyncStorage.getItem("phone"));
         setpass(await AsyncStorage.getItem("password"));
      }
      fetchData()
   }, [])
   return (
      <ImageBackground
         source={mini}
         style={styles.AllContent}>

         <SafeAreaView style={styles.SafeDesign} >
            {/* <TouchableOpacity onPress={gestStorage}>

              <Text style={styles.Texts}>Sarthi</Text>

           </TouchableOpacity> */}
            <Text style={{
               fontSize: 30,
               color: "black",
               marginTop: "10%",
               marginLeft: 30,
               marginBottom:10,
               fontWeight: "600",
            }}>User Info</Text>

<View style={{flexDirection:"row"}}>
            <Text style={styles.Texts}>Name : </Text>
            <Text style={styles.TextStatues}>{uservalue}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.Texts}>Email : </Text>
            <Text style={styles.TextStatues}>{username}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.Texts}>Phone : </Text>
            <Text style={styles.TextStatues}>{userphone}</Text>
            </View>
            {/* <View style={{flexDirection:"row"}}>
            <Text style={styles.Texts}>Password : </Text>
            <Text style={styles.TextStatues}>{userpass}</Text>
            </View> */}
{/*            
            <TouchableOpacity
               style={styles.ViewMange}
               onPress={() => navigation.navigate("Home")}>
               <Text style={styles.TextLogin}>Back</Text>
            </TouchableOpacity> */}
         </SafeAreaView>
      </ImageBackground>
   );
}


export default Profile;
