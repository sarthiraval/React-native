import React, { useEffect, useState } from 'react';
import styles from './style';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { arrowleft, insta } from '../../assets/Image/index'
import Filter from '../filter';
import ApiKnow from '../Data';



let Splash = ({navigation}) => {
// let Splash = () => {
    // const [splash, setsplash] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(ApiKnow)
        }, 2000);
    });

    return  (

        <View style={styles.AllContent}>
            <SafeAreaView style={styles.Content} >

             <Image
                   source={insta}
                   style={styles.imageGround}/>
               {/* <View style={styles.AllData}>
                    <Text style={styles.add}>+</Text>
                    <Text style={styles.div}>÷</Text>
                </View>
                <View style={styles.AllConten}>
                    <Text style={styles.min}>-</Text>
                    <Text style={styles.mul}>x</Text>
                </View> */}
                {/* <Text style={styles.Title}>Calculator</Text> */}

            </SafeAreaView>
        </View>
    )
 
}


export default Splash