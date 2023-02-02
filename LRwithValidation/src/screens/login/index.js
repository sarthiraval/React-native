import React from 'react';
import styles from './style';

import { SafeAreaView, View, Text, ImageBackground, Image, TextInput } from 'react-native';

let Login = () => {
  return (
    <View style={styles.AllContent}>
      <ImageBackground
        source={{
          uri: 'https://images.pling.com/img/00/00/62/67/35/1584405/577c4dc30402a8dfa3915867a59e64a89b7b3498e9f327bcfb0bcc7dfcbf99908e32.jpg'
        }}
        style={styles.AllContent}>

        <SafeAreaView>

          <View style={styles.Circle} />
          <Image
            source={
              { uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" }
            }
            style={styles.CircleImage} />

        

          <Text style={{ marginTop:180,color: "#999966", marginLeft: 50, fontSize: 10 }}>USERNAME</Text>

          <TextInput placeholder="Enter a name" placeholderTextColor="white" style={{
            marginTop: 5,
            marginBottom: 20, color: "white", fontSize: 15,
            borderBottomColor: "#999966", borderBottomWidth: 1, marginRight: 40, marginLeft: 50
          }} />

          <Text style={{ color: "#999966", marginLeft: 50, fontSize: 10, marginTop: 10 }}>PASSWORD</Text>
          <TextInput placeholder="Enter a Password" placeholderTextColor="white"
            secureTextEntry={true}
            style={{
              marginTop: 5, marginBottom: 20, color: "white", marginLeft: 50, fontSize: 15,
              borderBottomColor: "#999966", borderBottomWidth: 1, marginRight: 40
            }} />

          <Text style={{ color: "white", alignSelf: "flex-end", fontSize: 10, marginRight: 45 }}>Forgot your Password?</Text>

          <View style={{
            backgroundColor: "#996633", alignSelf: "center",
            marginTop: 50, width: 300, justifyContent: "center", height: 50
          }}>
            <Text style={{ color: "white", alignSelf: "center", fontSize: 12, fontWeight: "bold" }}>Login</Text>
          </View>
          <View style={{ height: 30, alignItems: 'center', flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
            <Text style={{ color: "white", fontSize: 10, textAlign: "center" }}>Don't have an account?</Text>
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold", left: 5 }}>Signup</Text>
          </View>
        </SafeAreaView>

      </ImageBackground>
    </View>
  )
}



export default Login