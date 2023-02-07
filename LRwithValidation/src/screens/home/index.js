import React from 'react';
import styles from './style';
import { mini } from '../../assets/image';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let Home = () => {
   return (
      <ImageBackground
         source={mini}
         style={styles.AllContent}>

         <SafeAreaView style={styles.SafeDesign} >
            <View>
               <Text style={styles.Texts} >Sarthi</Text>
            </View>
         </SafeAreaView>
      </ImageBackground>
   )
}
export default Home