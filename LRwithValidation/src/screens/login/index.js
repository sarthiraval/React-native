import React from 'react';
import styles from './style';

import { SafeAreaView, View, Text, TextInput, ImageBackground, Button } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';


let Login = () => {
  return (
    // <LinearGradient colors={["red","green","blue"]} style={styles.LinearGradient} >
    <ImageBackground
      source={require('/Users/sarthi/Desktop/ReactNativeProject/react5/LRwithValidation/src/assets/image/mini.jpeg')}
      style={styles.AllContent}>


      <SafeAreaView style={styles.SafeDesign}>

        <View style={styles.Direction}>
          <Text style={styles.SignText}>Sign</Text>
          <Text style={styles.UpText}>In</Text>
        </View>


  <View style={styles.Designs}>
        <Text style={styles.TextField}>Email</Text>

        <TextInput placeholder="Enter a Email"
          placeholderTextColor="#7575a3"
          style={styles.InputBase} />

        <Text style={styles.PassField}>PASSWORD</Text>
        <TextInput placeholder="Enter a Password"
          placeholderTextColor="#7575a3"
          secureTextEntry={true}
          style={styles.InputBase} />

        <Text style={styles.ForgetPass}>Forgot your Password?</Text>


        <View style={styles.ViewMange}>
          <Text style={styles.TextLogin}>Login</Text>
        </View>
        <View style={styles.ViewDesign}>
          <Text style={styles.TextFirst}>Don't have an account?</Text>
          <Text style={styles.TextSecond}>Signup</Text>
        </View>
        </View>

      </SafeAreaView>


    </ImageBackground>
    // </LinearGradient>
  )
}



export default Login