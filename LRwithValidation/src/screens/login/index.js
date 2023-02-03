import React, { useState } from 'react';
import styles from './style';
import { hide, mini, see }  from '/Users/sarthi/Desktop/ReactNativeProject/react5/LRwithValidation/src/assets/image';
import { SafeAreaView, View, Text, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
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
               let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])\S+@\S+\.\S+/;

                setEmail(text);
                if (re.test(text)) {
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


        <TouchableOpacity style={styles.ViewMange}>
          <Text style={styles.TextLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ViewDesign}>
          <Text style={styles.TextFirst}>Don't have an account?</Text>
          <Text style={styles.TextSecond}>Signup</Text>
        </TouchableOpacity>


      </SafeAreaView>


    </ImageBackground >
    // </LinearGradient>
  )
}



export default Login