import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, ImageBackground, Alert } from 'react-native';
import styles from './style';
import { hide, mini, see } from '../../assets/image/index';


let Register = ({ navigation }) => {

  const [usrename, setUsrename] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [seePassword, setSeepassword] = useState(true)
  const [checkEmail, setcheckEmail] = useState(false)
  const [checkUsername, setcheckUsrename] = useState(false)
  const [checkPass, setcheckaPass] = useState(false)
  const [checkPhone, setcheckaPhone] = useState(false)

  return (
    // <LinearGradient colors={["red","green","blue"]} style={styles.LinearGradient} >
    <ImageBackground
      source={mini}
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
            value={usrename}
            placeholderTextColor="#7575a3"
            style={styles.InputBase}
            onChangeText={

              (text => {
                // let result = /[A-Za-z]{3}[a-zA-Z0-9.\-_]{3,20}/;
                // let result = /\b([A-Za-z]){1}(\w){7,29}\b/
                let result = /^(?=.*[A-Z]){1}(?=.*[a-z])(?=.*[a-zA-Z0-9]){3,20}/;

                setUsrename(text);
                if (result.test(text)) {
                  setcheckUsrename(false);
                } else {
                  setcheckUsrename(true);
                }
              })
            } />
          {
            checkUsername
              ?
              <Text style={styles.wrongEmail}>Wrong format Username</Text>
              :
              <Text style={styles.wrongEmail}> </Text>
          }

          <Text style={styles.AnotherFiled}>Email</Text>
          <TextInput
            placeholder="Enter a Email"
            placeholderTextColor="#7575a3"
            style={styles.InputBase}
            value={email}
            onChangeText={

              (text => {
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

              (text => {
                let re = /(?<!\d)\d{10}(?!\d)/;
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
                let re = /^(?=.*\d)(?=.*[@$!%*?&])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}/;

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



          <TouchableOpacity style={styles.ViewMange} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.TextLogin}>Register</Text>

          </TouchableOpacity>



          <View style={styles.ViewDesign}>
            <Text style={styles.TextFirst}>Already have a account?</Text>
            <Text style={styles.TextSecond} onPress={() => navigation.navigate('Login')}>SignIn</Text>
          </View>
        </View>
      </SafeAreaView>


    </ImageBackground>
    // </LinearGradient>
  )
}
export default Register
