import React, { useEffect, useState } from 'react';
import styles from './style';
import { Image, SafeAreaView, Text, View } from 'react-native';
import {arrowleft} from '../../assets/Image/index'

// let Splash = ({navigation}) => {
    let Splash =()=>{
    // const [splash, setsplash] = useState(true)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setsplash(false)
    //     }, 2000);
    // });
  
    return  /* splash*/ (
      
        <View style={styles.AllContent}>
            <SafeAreaView style={styles.Content} >


             <Image
                   source={arrowleft}
                   style={styles.imageGround}>

             </Image>
                <Text style={styles.Title}>Come to MY Calculator</Text>

            </SafeAreaView>
        </View>
    ) 
    // : (
    //     navigation.navigate("Calculator")

    // )
}


export default Splash