import React,{ useState } from 'react';
import {
 Text,View,TextInput,Image, Button, StyleSheet,ScrollView
} from 'react-native';

const fullname = (fs ,mn,ls) =>{
  return fs + " " + mn +" "+ls
}

const YourApp  = () =>{
const name ="React-Native Developer"
  return(
   
    <View style ={{
      flex :1,
      marginTop: 50,
      marginEnd : 10,
      marginStart : 10,
    justifyContent:"center"}}>
       <ScrollView>
        
      <View>
        <Image 
        source ={
          {uri:"https://i.pinimg.com/originals/c4/11/cc/c411ccd02af6f000656a0469ecdfd202.jpg"}
        }
        style={{width:300, height:200,
        alignSelf: 'center',
        marginBottom :20,
        // marginStart : 35,
        alignContent : "center",
      
        alignItems :"center",
        borderRadius:10}}/>
      </View>
    <Text style ={{
      marginBottom: 10
    }}>
      My name is {fullname("Sarthi","Shaileshkumar","Raval")}.
      </Text>
      <Text>
      I am {name}.
    </Text>
    <Cat name = " 21 year Old."/>
    <Cat name = "live in Ahmedabad."/>
    <TextInput placeholder='FULL NAME'
    style={{
      height : 50,
      borderRadius : 10,
      borderColor : "red",
      borderWidth : 2,
      marginTop : 10
    }} 
    />
    <Cafe />
    <Usebutton name ="hard"/>
    <Usebutton name ="easy"/>
    
    <Text style ={styles.red}>Red color</Text>
    <Text style ={styles.bigcolor}>Blue color</Text>
    <Text style ={[styles.red,styles.bigcolor]}>Red color - Blue color </Text>
    <Text style ={[styles.bigcolor, styles.red]}>Blue color - Red color</Text>

 
 </ScrollView>
 </View>

  
  )
}

const Cafe = ()=>{
  return(
    <Text style = {{
      color : 'blue',
      textAlign: "right",
      marginTop : 10,
    marginBottom:10
    }}>
      <Text>Forget Password !!!</Text>
      
    </Text>
  )
}
const Cat = function (props) {
  return (
    <Text style={{
      color: "grey",
   
      marginTop: 10
    }}>I am {props.name}</Text>
  );
}


let styles = StyleSheet.create({
  bigcolor :{
    color : "blue",
    fontWeight : "bold",
    fontSize : 30
  },
  red :{
    color : "violet",
    fontStyle : "italic",
    fontSize : 12
    }

}
)

const Usebutton =(props)=>{
  const [dones,notdone] = useState(true)
  return(
    <View>
      <Text style = {{
        textAlign : "center"
      }}>
       Your task is a {props.name},but My task {dones ? "very hard" : "is very easy"}
      </Text>
      <Button 
        onPress={()=>{
        notdone(false)
      }}
      disabled = {!dones}
      title={dones ? "This is very easy" : "This is very hard" }
      />
       <Button 
            title={dones ? "This is very easy" : "This is very hard" }
            onPress={()=>{notdone(!dones)
      }}
      />
    </View>
  )
}


export default YourApp;

