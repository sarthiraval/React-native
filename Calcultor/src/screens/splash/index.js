import React, { useEffect, useState } from 'react';
import styles from './style';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { arrowleft, insta } from '../../assets/Image/index'

// let Splash = ({navigation}) => {
let Splash = () => {
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
    // : (
    //     navigation.navigate("Calculator")

    // )
}


export default Splash