import React, { useState } from 'react';
import styles from './style';

import { SafeAreaView, View, Text, TextInput, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';


let Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [seePassword, setSeepassword] = useState(true)
  const [checkEmail, setcheckEmail] = useState(false)
  const [checkPass, setcheckaPass] = useState(false)


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
            style={styles.InputBase}
            value={email}
            onChangeText={

              (text => {
                let re = /\S+@\S+\.\S+/;
                let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

                setEmail(text);
                if (re.test(text) || regex.test(text)) {
                  setcheckEmail(false);
                } else {
                  setcheckEmail(true);
                }
              })
            } />
          {
            checkEmail
              ?
              <Text style={styles.wrongEmail}>Wrong format email</Text>
              :
              <Text style={styles.wrongEmail}> </Text>
          }
        </View>


        <Text style={styles.PassField}>PASSWORD</Text>
        <TextInput
          placeholder="Enter a Password"
          placeholderTextColor="#7575a3"
          value={password}
          secureTextEntry={seePassword}
          style={styles.InputBase} 
          onChangeText={

            (text => {
              let re = /^(?=.*\d)(?=.*[@$!%*?&])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/;

              setPassword(text)
              if (re.test(text)) {
                setcheckaPass(false);
              } else {
                setcheckaPass(true);
              }
            })
          } 
          />
        {
          checkPass
            ?
            <Text style={styles.wrongEmail}>Wrong format Password</Text>
            :
            <Text style={styles.wrongEmail}> </Text>
        }

        <TouchableOpacity style={styles.wrapperIcon}
          onPress={() => setSeepassword(!seePassword)}>
          <Image source={
            seePassword
              ? require("/Users/sarthi/Desktop/ReactNativeProject/react5/LRwithValidation/src/assets/image/view.png")
              : require("/Users/sarthi/Desktop/ReactNativeProject/react5/LRwithValidation/src/assets/image/hide.png")
          }
            style={styles.icon} />
        </TouchableOpacity>


        <Text style={styles.ForgetPass}>Forgot your Password?</Text>


        <View style={styles.ViewMange}>
          <Text style={styles.TextLogin}>Login</Text>
        </View>
        <View style={styles.ViewDesign}>
          <Text style={styles.TextFirst}>Don't have an account?</Text>
          <Text style={styles.TextSecond}>Signup</Text>
        </View>


      </SafeAreaView>


    </ImageBackground >
    // </LinearGradient>
  )
}



export default Login