import React from "react";
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text,TextInput,View } from "react-native";
let Reg =()=>{
    return(
        <View style={{flex:1}}>
            <ImageBackground 
            source={{
                uri: 'https://images.pling.com/img/00/00/62/67/35/1584405/577c4dc30402a8dfa3915867a59e64a89b7b3498e9f327bcfb0bcc7dfcbf99908e32.jpg'    }}
             style ={{flex:1}}
         >
        <SafeAreaView style={{alignSelf:"center"}}>
            <ScrollView
            showsVerticalScrollIndicator={false}>
              
            <View>
                <View style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
                <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>Sign</Text>
                <Text style={{color:"yellow",fontSize:25,fontWeight:"bold"}}>Up</Text>
                </View>
                <View style={box.rectangle} >
                <TextInput 
                placeholder="Your Name"
                placeholderTextColor={"#999966"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View>    

             <View style={box.rectangl} >
                <TextInput 
                placeholder="Email"
                keyboardType= "email-address"
                dataDetectorTypes="address"
                textContentType= "emailAddress"
                placeholderTextColor={"#999966"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View> 
             <View style={box.rectangl} >
                <TextInput 
                placeholder="Password"
                textContentType= "password"
                secureTextEntry= {true}
                placeholderTextColor={"#999966"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View> 

             <View style={box.rectangl} >
                <TextInput 
                placeholder="Phone Number"
                keyboardType= "phone-pad"
                dataDetectorTypes="phoneNumber"
                textContentType="telephoneNumber"
                placeholderTextColor={"#999966"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View> 


             <View style ={box.rectangl}>
                <TextInput 
                placeholder="Street and House Number"
                placeholderTextColor={"#999966"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
            </View>


            <View style={box.rectangl} >
                <TextInput 
                placeholder="Landmark"
                placeholderTextColor={"#999966"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View>    

             <View style={box.rectangl} >
                <TextInput 
                placeholder="Pincode"
                keyboardType= "number-pad"
                placeholderTextColor={"#999966"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View> 

                <View style={{flexDirection:"row"}}>
                            
      </View> 
        </View>
    </ScrollView>
</SafeAreaView>
</ImageBackground>
</View>
    )
}

let box = StyleSheet.create({
    rectangle:{
        width: 330,
        height: 40,
        marginTop : 40,
        borderRadius: 10,
        backgroundColor: "white",
    },
    rectangl:{
        width: 330,
        height: 40,
        marginTop : 20,
        borderRadius: 10,
        backgroundColor: "white",
    }}
)
export default Reg