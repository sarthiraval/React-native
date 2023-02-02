import React from 'react';
import { SafeAreaView, View, Text, TextInput, ImageBackground } from 'react-native';
import styles from './style';


let Register = () => {
  return (
    // <LinearGradient colors={["red","green","blue"]} style={styles.LinearGradient} >
    <ImageBackground
      source={require('/Users/sarthi/Desktop/ReactNativeProject/react5/LRwithValidation/src/assets/image/mini.jpeg')}
      style={styles.AllContent}>


      <SafeAreaView style={styles.SafeDesign}>

        <View style={styles.Direction}>
          <Text style={styles.SignText}>Sign</Text>
          <Text style={styles.UpText}>Up</Text>
        </View>

   
     <View style={styles.Design}>
        <Text style={styles.TextField}>USERNAME</Text>
        <TextInput
          placeholder="Enter a name"
          placeholderTextColor="#7575a3"
          style={styles.InputBase} />

        <Text style={styles.AnotherFiled}>Email</Text>
        <TextInput
          placeholder="Enter a Email"
          placeholderTextColor="#7575a3"
          style={styles.InputBase} />

        <Text style={styles.AnotherFiled}>Phone Number</Text>
        <TextInput
          placeholder="Enter a number"
          placeholderTextColor="#7575a3"
          style={styles.InputBase} />

        <Text style={styles.PassField}>PASSWORD</Text>
        <TextInput
          placeholder="Enter a Password"
          placeholderTextColor="#7575a3sdsfd"
          secureTextEntry={true}
          style={styles.InputBase} />



        <View style={styles.ViewMange}>
          <Text style={styles.TextLogin}>Register</Text>
        </View>
        <View style={styles.ViewDesign}>
          <Text style={styles.TextFirst}>Already have a account?</Text>
          <Text style={styles.TextSecond}>SignIn</Text>
        </View>

        </View>
      </SafeAreaView>


    </ImageBackground>
    // </LinearGradient>
  )
}
export default Register
