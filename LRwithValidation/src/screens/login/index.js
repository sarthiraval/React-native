import React, { useState } from 'react';
import styles from './style';
import { hide, mini, see } from '../../assets/image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, View, Text, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { log } from 'react-native-reanimated';


let Login = ({ navigation }) => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [seePassword, setSeepassword] = useState(true)
  const [checkEmail, setcheckEmail] = useState(false)
  const [checkPass, setcheckaPass] = useState(false)

  const checkTextInput = () => {

    if (email == '' || password == '' || checkPass == true || checkEmail == true ) {
      alert('Please Enter Correct Details');
    }
    else {
      alert("Success Login")
      navigation.navigate("Home")
    }
  };

  const emailvalida = (text) => {
    // let re /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,4}$/
    // let result = /\S+@\S+\.\S+/;
    let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/
    let result = /\S+@([A-Z|a-z])+\S+\.([A-Z|a-z]){2,3}$/;
    // let res = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z])+((\.){0,1}[A-Z|a-z]){2}\.[a-z]{2,3}$/
    // let result = /(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.[0-9])/
    // let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]$/;

    setEmail(text);
    if (result.test(text) && re.test(text)) {
      setcheckEmail(false);
    } else {
      setcheckEmail(true);
    }
  }

  const passwordvaild = (text) => {
    let re = /^(?=.*\d)(?=.*[@$!%*?&])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}/;

    setPassword(text)
    if (re.test(text)) {
      setcheckaPass(false);
    } else {
      setcheckaPass(true);
    }
  }

  return (

    // <LinearGradient colors={["red","green","blue"]} style={styles.LinearGradient} >
    <ImageBackground
      source={mini}
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
            onChangeText={text => emailvalida(text)} />

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
          onChangeText={text => passwordvaild(text)} />

        {
          checkPass
            ?
            <Text style={styles.wrongEmail}>Wrong format Password</Text>

            :
            <Text style={styles.wrongEmail}> </Text>
        }

        <TouchableOpacity style={styles.wrapperIcon}
          onPress={() => setSeepassword(!seePassword)}>
          {
            seePassword
              ? <Image
                source={hide}
                style={styles.icon} />
              : <Image
                source={see}
                style={styles.icon} />
          }
        </TouchableOpacity>


        <Text style={styles.ForgetPass}>Forgot your Password?</Text>


        
          <TouchableOpacity
            
            style={styles.ViewMange}
            onPress={
              text => checkTextInput(text)
            }>
            <Text style={styles.TextLogin}>Login</Text>
          </TouchableOpacity>
          {/* :
          <TouchableOpacity
            style={styles.ViewMange}
            onPress={
              text => checkTextInput(text)
            }>
            <Text style={styles.TextLogin}>Login</Text>
          </TouchableOpacity> */}

      




        <View style={styles.ViewDesign}>
          <Text style={styles.TextFirst}>Don't have an account?</Text>
          <Text style={styles.TextSecond}
            onPress={() => navigation.navigate("Register")}>
            Signup</Text>
        </View>


      </SafeAreaView>


    </ImageBackground >
    // </LinearGradient>
  )
}



export default Login