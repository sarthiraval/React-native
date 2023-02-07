import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text, TextInput, ImageBackground, BackHandler } from 'react-native';
import styles from './style';
import { hide, mini, see } from '../../assets/image/index';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

  const username = (text) => {

    // let result = /[A-Za-z]{3}[a-zA-Z0-9.\-_]{3,20}/;
    // let result = /\b([A-Za-z]){1}(\w){7,29}\b/
    let result = /^(?=.*[A-Z]){1}(?=.*[a-z])(?=.*[a-zA-Z0-9]){3,20}/;

    setUsrename(text);
    if (result.test(text)) {
      setcheckUsrename(false);
    } else {
      setcheckUsrename(true);

    }
  }

  const emailvalida = (text) => {
    // let re /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,4}$/
    // let result = /\S+@\S+\.\S+/;
    let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/
    let result = /\S+@([A-Z|a-z])+\S+\.([A-Z|a-z]){2,3}$/;
    // let res = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z])+((\.){0,1}[A-Z|a-z]){2}\.[a-z]{2,3}$/
    // let result = /(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.[0-9])/
    // let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]$/;
    re.test(String(email).toLowerCase())
    result.test(String(email).toLowerCase())

    setEmail(text);
    if (result.test(text) && re.test(text)) {
      setcheckEmail(false);
    } else {
      setcheckEmail(true);
    }
    re.test(String(email).toLowerCase())
    result.test(String(email).toLowerCase())

  }

  const phonevaild = (text) => {
    let re = /(?<!\d)\d{10}(?!\d)/;
    setPhone(text)
    if (re.test(text)) {
      setcheckaPhone(false)
    } else {
      setcheckaPhone(true);
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

  const checkTextInput = () => {

    if (usrename == '' || phone == '' || email == '' || password == ''
      || checkPass == true || checkEmail == true
      || checkUsername == true || checkPhone == true) {
      alert('Please Enter Details Correctly');

    }

    else {
      alert("Success Register")

      storedata(email, usrename, phone, password)

       navigation.navigate("Login")
    }
  };

  const storedata = async (value,users,phones,passwords)=> {
    try {
      await AsyncStorage.setItem('email', value);
      await AsyncStorage.setItem('usrename', users);
      await AsyncStorage.setItem('phone', phones);
      await AsyncStorage.setItem('password', passwords);
    }
    catch (error) {
      console.log('error :', error);
    }
  }

  // const gestStorage = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("email")
  //     const users = await AsyncStorage.getItem("usrename")
  //     const phones = await AsyncStorage.getItem("phone")
  //     const passwords = await AsyncStorage.getItem("password")
  //     if (value !== null && users !== null && phones !== null && passwords !== null) {

  //       alert(`welcome  
  //       My Email is ${value}  
  //   My Name is ${users}  
  //       My PhoneNumber is ${phones} 
  //       My Password is ${passwords}`)
  //      BackHandler
        
  //     }
  //     else{
        
  //     }

  //   }
  //   catch (error) {
  //     console.log("error :", error);
  //   }
  // }


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
            onChangeText={text => username(text)} />
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

              (text => emailvalida(text))
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
            keyboardType="numeric"
            placeholderTextColor="#7575a3"
            style={styles.InputBase}
            value={phone}
            onChangeText={

              (text => phonevaild(text))
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
            onChangeText={(text => passwordvaild(text))}
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


          <TouchableOpacity

            style={styles.ViewMange}
            onPress={
              text => checkTextInput(text)
            }>
            <Text style={styles.TextLogin}>Register</Text>
          </TouchableOpacity>
{/* 
          <TouchableOpacity

            style={styles.ViewMange}
            onPress={
              text => gestStorage(text)
            }>
            <Text style={styles.TextLogin}>Show Details</Text>
          </TouchableOpacity> */}
          {/* :
          <TouchableOpacity
            style={styles.ViewMange}
            onPress={
              text => checkTextInput(text)
            }>
            <Text style={styles.TextLogin}>Register</Text>
          </TouchableOpacity>

          } */}


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
