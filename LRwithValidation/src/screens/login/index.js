import React, { useState } from 'react';
import styles from './style';
import { hide, mini, see } from '../../assets/image';
import { SafeAreaView, View, Text, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

let Login = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [seePassword, setSeepassword] = useState(true)
  const [checkEmail, setcheckEmail] = useState(false)
  const [checkPass, setcheckaPass] = useState(false)

  const checkTextInput = () => {

    if (!email.trim() && !password.trim() ) {
      alert('Please Enter Details');
    }
    else if (!password.trim()) {
      alert('Please Enter password');
    }
    else if (!email.trim()) {
      alert('Please Enter Email');
    }

    else {
      navigation.navigate("Home")
    }

  };

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
            onChangeText={

              (text => {

                let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/
                let result = /\S+@([A-Z|a-z])+\S+\.([A-Z|a-z]){2,3}$/;

                setEmail(text);
                if (re.test(text) && result.test(text)) {
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


        <TouchableOpacity style={styles.ViewMange}
          onPress={
            checkTextInput
          }>
          <Text style={styles.TextLogin}>Login</Text>
        </TouchableOpacity>
        <View style={styles.ViewDesign}>
          <Text style={styles.TextFirst}>Don't have an account?</Text>
          <Text style={styles.TextSecond} onPress={() => navigation.navigate("Register")}>Signup</Text>
        </View>


      </SafeAreaView>


    </ImageBackground >
    // </LinearGradient>
  )
}



export default Login