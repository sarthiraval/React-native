import React from 'react';
import styles from './style';
import {  Image, Text, View } from 'react-native';


let Splash = () => {
    return (
        <View style={styles.Content} >
      
                <Image style={styles.ShadowImage}
                    source={
                       { url : "https://media.licdn.com/dms/image/C4D0BAQGBdPEr2MpF9g/company-logo_200_200/0/1663171718721?e=2147483647&v=beta&t=y76fploBxKpDuSo5LqXj_HbmpcPJzpq81s2oGwe0cFA"}
                    } /> 

                    <Text style={styles.Title}>Welcome to My World</Text>

        </View>
    )
}
export default Splash