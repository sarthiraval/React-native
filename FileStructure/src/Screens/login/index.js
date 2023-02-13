import React from 'react';

import {ImageBackground, View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';

let Login = ()=>{
  return(
<View style={ {flex:1} }>    
<ImageBackground 
    source={{
      uri: 'https://i.pinimg.com/736x/2a/e8/0c/2ae80c5adc8ea8cc05456bea68eab580.jpg'    }}
    style={{flex:1}}>
       
       <SafeAreaView>
        <View>
         <View style={ds.circle}/>
         <Image 
        source ={
          {uri:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"}
        }
        style={{width:100, height:100,
        alignSelf: 'center',
        marginTop: - 125,
        borderRadius:100/2}}/>
        </View>       
        <View style={{marginTop:180,}}/>
        
         <Text style={{color:"#999966",marginLeft:50,fontSize:10}}>USERNAME</Text>

         <TextInput placeholder="Enter a name" placeholderTextColor= "white" style={{marginTop:5,
          marginBottom:20,color:"white",fontSize:15,
          borderBottomColor:"#999966",borderBottomWidth:1,marginRight:40,marginLeft:50}}/>
       
         <Text style={{color:"#999966",marginLeft:50,fontSize:10,marginTop:10}}>PASSWORD</Text>
         <TextInput placeholder="Enter a Password" placeholderTextColor="white"
         secureTextEntry={true}
         style={{marginTop:5,marginBottom:20,color:"white",marginLeft:50,fontSize:15,
         borderBottomColor:"#999966",borderBottomWidth:1,marginRight:40}}/>
          
          <Text style={{color:"white",alignSelf:"flex-end",fontSize:10,marginRight:45}}>Forgot your Password?</Text>
         
          <View style={{backgroundColor:"#996633",alignSelf:"center",
            marginTop:50,width:300,justifyContent:"center",height:50}}>
          <Text style={{color:"white",alignSelf:"center",fontSize:12,fontWeight:"bold"}}>Login</Text>
          </View> 
          <View style={{height:30,alignItems:'center',flexDirection:"row",justifyContent:"center",marginTop:20}}>
          <Text style={{color:"white",fontSize:10,textAlign:"center"}}>Don't have an account?</Text>
          <Text style={{color:"white",fontSize:12,fontWeight:"bold",left:5}}>Signup</Text>
          </View>
      </SafeAreaView>
       
    </ImageBackground>    
    </View>
  )
}


let ds = StyleSheet.create({
  circle: {
    width: 150,
    height: 150,
    marginTop : 70,
    alignSelf :"center", 
    borderRadius: 150 / 2,
    backgroundColor: "#ffff33",
  },
});


export default Login