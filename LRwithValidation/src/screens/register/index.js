import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, ImageBackground, Alert } from 'react-native';
import styles from './style';


let Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [seePassword, setSeepassword] = useState(true)
  const [checkEmail, setcheckEmail] = useState(false)
  const [checkPass, setcheckaPass] = useState(false)
  const [checkPhone, setcheckaPhone] = useState(false)

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

          <Text style={styles.AnotherFiled}>Phone Number</Text>
          <TextInput
            placeholder="Enter a number"
            placeholderTextColor="#7575a3"
            style={styles.InputBase}
            value={phone}
            onChangeText={

              // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$
              // /^(?=.*\d)(?=.*[@$!%*?&])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}
              (text => {
                let re = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
                setPhone(text)
                if (re.test(text)) {
                  setcheckaPhone(false)
                } else {
                  setcheckaPhone(true);
                }
              })
            } />
          {
            checkPhone
              ?
              <Text style={styles.wrongEmail}>Wrong format PhoneNumber</Text>
              :
              <Text style={styles.wrongEmail}> </Text>
          }

          <Text style={styles.PassField}>PASSWORD</Text>
          <TextInput
            placeholder="Enter a Password"
            placeholderTextColor="#7575a3"
            style={styles.InputBase}
            value={password}
            secureTextEntry={seePassword}
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


          {email == '' || password == '' || checkEmail == true ? (

            <TouchableOpacity style={styles.ViewMange}>
              <Text style={styles.TextLogin}>Register</Text>

            </TouchableOpacity>


          ) :
            <Text style={styles.validationData}>Please enter all Field</Text>
          }

          <TouchableOpacity style={styles.ViewDesign}>
            <Text style={styles.TextFirst}>Already have a account?</Text>
            <Text style={styles.TextSecond}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>


    </ImageBackground>
    // </LinearGradient>
  )
}
export default Register
