import React, { useEffect, useState } from 'react';
import styles from './style';
import { SafeAreaView, Text, View } from 'react-native';


let Splash = ({navigation}) => {
    const [splash, setsplash] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setsplash(false)
        }, 2000);
    });
  
    return splash ? (
      
        <View style={styles.AllContent}>
            <SafeAreaView style={styles.Content} >


                <Text style={styles.Title}>Come to MY Calculator</Text>

            </SafeAreaView>
        </View>
    ) : (
        navigation.navigate("Calculator")

    )
}


export default Splash