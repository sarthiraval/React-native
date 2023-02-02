import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const fullname = (fs,mn,ls) =>{
  return fs + " " + mn +" "+ls
}
const name ="React-Native Developer"

let YourApp =() =>{
  return(
     
    <View style ={{
      marginTop: 50,
      marginEnd : 10,
      marginStart : 10,
      marginBottom: 10}}>

    <ScrollView
    showsVerticalScrollIndicator={false}>
  <View>
  <Text style={{color:"black",alignSelf:'center',fontWeight:'bold',fontSize:20,marginBottom:10,marginTop:5,textDecorationColor:"black",textDecorationLine:"underline"}}>Image :-</Text>
        <Image 
        source ={
          {uri:"https://i.pinimg.com/originals/c4/11/cc/c411ccd02af6f000656a0469ecdfd202.jpg"}
        }
        style={{width:300, height:200,
        alignSelf: 'center',
        marginBottom :20,
        // marginStart : 35,
        alignItems :"center",
        borderRadius:10}}/>
      </View>
    <Text style ={{
      marginBottom: 10,
      color:"red"
    }}>
      My name is {fullname("Sarthi","Shaileshkumar","Raval")}.
      </Text>
      <Text style={{color:"green"}}>
      I am {name}.
    </Text>
    <Cat name = " 21 year Old."/>
    <Cat name = "live in Ahmedabad."/>
    <Text style={{color:"black",fontSize:20,marginTop:10,textDecorationLine: "underline",alignSelf:'center',fontWeight:'bold',}}>TextInputBox :-</Text>
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
    
    <Text style={{color:"black",fontSize:20,marginTop:5,fontWeight:"bold",textDecorationLine: "underline",alignSelf:'center'}}>Text :-</Text>
    <Text style ={styles.red}>Red color</Text>
    <Text style ={styles.bigcolor}>Blue color</Text>
    <Text style ={[styles.red,styles.bigcolor]}>Red color - Blue color </Text>
    <Text style ={[styles.bigcolor, styles.red]}>Blue color - Red color</Text>



 <Text style ={{fontSize:30,fontWeight:"bold",color:"black",marginTop:20,textDecorationLine: "underline",alignSelf:'center',fontStyle:'italic'}}>Height and Width : -</Text>
 <Text style ={{fontSize:20,marginTop:5,marginBottom:5,fontWeight:"bold",textDecorationLine: "underline"}}>Fixed Dimensions :-</Text>
    <View style={{
      width :30,height:30,backgroundColor:"violet"
    }}/>
    <View style={{
      width :60,height:30,backgroundColor:"gold"
    }}/>
    <View style={{
      width :80,height:30,backgroundColor:"silver"
    }}/>

<Text style={{marginTop:5,fontSize:20,fontWeight:"bold",color:"black",textDecorationLine: "underline",
marginBottom:10}}>Fixed dimensions with layout :-</Text>

<View style={{marginLeft:10,marginRight:10}}>
<Text style ={{fontSize:20,color:"black"}}>row</Text>
<Text style ={{fontSize:20,marginTop:-25,marginLeft:200,color:"black"}}>column-reverse</Text>
<View style ={{flexDirection:"row"}}>
  <View style ={{width:50,height:50,backgroundColor:"red"}} />
  <View style ={{width:50,height:50,backgroundColor:"blue"}} />
  <View style ={{width:50,height:50,backgroundColor:"green"}} />
</View>

<View style ={{flexDirection:"column",marginTop:5}}>
  <View style ={{width:50,height:50,backgroundColor:"red"}} />
  <View style ={{width:50,height:50,backgroundColor:"blue"}} />
  <View style ={{width:50,height:50,backgroundColor:"green"}} />
</View>

<View style ={{flexDirection:"row-reverse" ,marginTop:-50,marginLeft:20}}>
  <View style ={{width:50,height:50,backgroundColor:"red"}} />
  <View style ={{width:50,height:50,backgroundColor:"blue"}} />
  <View style ={{width:50,height:50,backgroundColor:"green"}} />
</View>
<View style ={{flexDirection:"column-reverse" ,marginTop:-205,marginBottom:100
,marginLeft:280}}>
  <View style ={{width:50,height:50,backgroundColor:"red"}} />
  <View style ={{width:50,height:50,backgroundColor:"blue"}} />
  <View style ={{width:50,height:50,backgroundColor:"green"}} />
</View>
<View style={{ }}>
<Text style ={{fontSize:20,marginTop:-40,color:"black"}}>column</Text>
<Text style ={{fontSize:20,marginTop:-25,marginLeft:220,color:"black",}}>row-reverse</Text>
</View>
</View>

<View>
<Text style={{marginTop:10,fontSize:20,fontWeight:"bold",fontStyle:"italic",color:"black",textDecorationLine: "underline"}}>JustifyContent :-</Text>
<Text style={{marginTop:10,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle: "dashed"}}>Space-between :-</Text>
<View style={{
  flex : 1,
  flexDirection:"row",
  marginTop :5,
  marginBottom :5,
  justifyContent:"space-between"
}}>
  <Text style={{fontStyle:"italic",fontSize:15,color:"red"}}>Sarthi</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"blue"}}>Shaileshkumar</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"green"}}>Raval</Text>
</View>
<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle: "dotted"}}>Space-evenly :-</Text>
<View style={{
  flexDirection:"row",
  marginTop :5,
  marginBottom :5,
  justifyContent:"space-evenly"
}}>
  <Text style={{fontStyle:"italic",fontSize:15,color:"red"}}>Sarthi</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"blue"}}>Shaileshkumar</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"green"}}>Raval</Text>
</View>
<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle: "double"}}>Space-around :-</Text>
<View style={{
  flexDirection : "row",
  marginTop : 5,
  marginBottom : 5,
  justifyContent : "space-around"
}}
>
<Text style={{fontStyle:"italic",fontSize:15,color:"red"}}>Sarthi</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"blue"}}>Shaileshkumar</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"green"}}>Raval</Text>
</View>
<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle: "solid"}}>Center :-</Text>
<View style={{
  flexDirection:"row",
  marginTop :5,
  marginBottom :5,
  justifyContent:"center"
}}>
  <Text style={{fontStyle:"italic",fontSize:15,color:"red"}}>Sarthi</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"blue"}}>Shaileshkumar</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"green"}}>Raval</Text>
</View>
<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle: "dashed"}}>Flex-start :- </Text>
<View style={{
  flexDirection:"row",
  marginTop :5,
  marginBottom :5,
  justifyContent:"flex-start"
}}>
  <Text style={{fontStyle:"italic",fontSize:15,color:"red"}}>Sarthi</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"blue"}}>Shaileshkumar</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"green"}}>Raval</Text>
</View>
<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}>Flex-end :-</Text>
<View style={{
  flexDirection:"row",
  marginTop :5,
  marginBottom :15,
  justifyContent:"flex-end"
}}>
  <Text style={{fontStyle:"italic",fontSize:15,color:"red"}}>Sarthi</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"blue"}}>Shaileshkumar</Text>
  <Text style={{fontStyle:"italic",fontSize:15,color:"green"}}>Raval</Text>
</View>
</View>

<Text style={{marginTop:5,fontWeight:"bold",fontSize:20,color:"black",textDecorationLine: "underline"}}>Align Items :-</Text>
<View style={{
  marginTop:5,
    flexDirection:"column",
    alignItems:'center'
  }}>
  <Text style={{fontStyle:"italic",fontSize:15,color:"red"}}>Align Items = Center</Text>
  </View>
  <View style={{
    marginTop:5,
    flexDirection:"column",
    alignItems: 'stretch'
  }}>
  <Text style={{fontStyle:"italic",fontSize:15,color:"blue"}}>Align Items = Stretch</Text>
  </View>
  <View style={{
    marginTop:5,
    flexDirection:"column", 
    alignItems: 'flex-start'
  }}>
  <Text style={{fontStyle:"italic",fontSize:15,color:"green"}}>Align Items = Flex-Start</Text>
  </View>
  <View style={{
    marginTop:5,
    flexDirection:"column",
    alignItems: 'flex-end'
  }}>
  <Text style={{fontStyle:"italic",fontSize:15,color:"green"}}>Align Items = Flex-End</Text>
</View>
<Text style={{marginTop:5,fontWeight:"bold",fontSize:20,color:"black",textDecorationLine: "underline"}}>Align Self :-</Text>
<View style={{
    flexDirection:"column",
    marginTop :5,
    marginBottom :15,
  }}>
  <Text style={{marginTop :5,fontStyle:"italic",fontSize:15,color:"red",alignSelf: 'stretch'}}>Align-Self = Stretch</Text>
  <Text style={{marginTop :5,fontStyle:"italic",fontSize:15,color:"blue",alignSelf: 'flex-start'}}>Align-Self = Flex-start</Text>
  <Text style={{marginTop :5,fontStyle:"italic",fontSize:15,color:"green",alignSelf: 'flex-end'}}>Align-Self = Flex-End</Text>
  <Text style={{marginTop :5,fontStyle:"italic",fontSize:15,color:"green",alignSelf: 'center'}}>Align-Self = center</Text>

  </View>

  <Text style={{marginTop:5,fontWeight:"bold",fontSize:20,color:"black",textDecorationLine: "underline"}}>Align Content and Flex-Wrap :-</Text>
  <Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = Center and 
 Flex-Wrap = Wrap :-`}</Text>
  <View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"center",
    flexWrap : "wrap",
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />



  </View>
  <Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = flexstart and 
 Flex-Wrap = wrap :-`}</Text>
  <View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"flex-start",
    flexWrap : "wrap"
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />



  </View>
  <Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = flexend and 
 Flex-Wrap = wrap :-`}</Text>
<View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"flex-end",
    flexWrap : "wrap"
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
</View>
<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = space-around and 
 Flex-Wrap = wrap :-`}</Text>
<View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"space-around",
    flexWrap : "wrap"
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
</View>

<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = space-between and 
 Flex-Wrap = wrap :-`}</Text>
<View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"space-between",
    flexWrap : "wrap"
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
</View>


<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = Center and 
 Flex-Wrap = Wrap-Reverse :-`}</Text>
  <View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"center",
    flexWrap : "wrap-reverse"
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />



  </View>
  <Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = flexstart and 
 Flex-Wrap = Wrap-Reverse :-`}</Text>
  <View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"flex-start",
    flexWrap : "wrap-reverse"
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />



  </View>
  <Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = flexend and 
 Flex-Wrap = Wrap-Reverse :-`}</Text>
<View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"flex-end",
    flexWrap : "wrap-reverse"
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
</View>
<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = space-around and 
 Flex-Wrap = Wrap-Reverse :-`}</Text>
<View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"space-around",
    flexWrap : "wrap-reverse"
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
</View>

<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Align Content = space-between and 
 Flex-Wrap = Wrap-Reverse :-`}</Text>
<View style={{
    marginTop :10,
    height:100,
    marginBottom :15,
    alignContent:"space-between",
    flexWrap : "wrap-reverse"
  }}>  
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
</View>

<Text style={{marginTop:20,fontSize:20,fontWeight:"bold",color:"black",marginBottom: 10,
textDecorationColor:"red",textDecorationLine:"underline",textDecorationStyle:"double"}}>Flex Basis, Grow, and Shrink :-</Text>
  

<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Flex Grow`}</Text>
<View style={{
    marginTop :10,
    flexDirection :"row",
    marginBottom :15,
  }}>  
    <View style={{margin:5,padding:10,flexGrow :60,backgroundColor: 'green' }} />
    <View style={{margin:5,padding:10,flexGrow:40,backgroundColor: 'red' }} />
</View>

<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Flex Basis`}</Text>
<View style={{
    marginTop :10,
    flexDirection :"row",
    marginBottom :15,
  }}>  
    <View style={{margin:5,padding:10,flexBasis:10,backgroundColor: 'green' }} />
    <View style={{margin:5,padding:10,flexBasis:50,backgroundColor: 'red' }} />
    <View style={{margin:5,padding:10,flexBasis:10,backgroundColor: 'blue' }} />
</View>

 
<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Flex Shrink`}</Text>
<View style={{
    marginTop :10,
    flexDirection :"row",
    marginBottom :15,
  }}>  
    <View style={{margin:5,padding:10,flexShrink:1,backgroundColor: 'green' }} />
    <View style={{margin:5,padding:10,flexShrink:1,backgroundColor: 'red' }} />
    <View style={{margin:5,padding:10,flexShrink:1,backgroundColor: 'blue' }} />
</View>

<Text style={{marginTop:20,fontSize:20,fontWeight:"bold",color:"black",marginBottom: 10,
textDecorationColor:"red",textDecorationLine:"underline",textDecorationStyle:"double"}}>Position :- Relative and Absolute</Text>
  
<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Relative :-`}</Text>
<View style={{
    marginTop :10,
    flexDirection :"row",
    marginBottom :15,
    height :110,
    width:110,
    alignSelf:"center",
   backgroundColor: 'green' 
  }}>  
    <View style={{ 
      width: 50,
      height: 50,  
      position : "relative",
      top :5,bottom: 10,left :5,right:5,
      backgroundColor :"red" }} />

     <View style={{ 
      width: 50,
      height: 50,  
      position : "relative",
      top :55,bottom: 10,left :5,right:0,
      backgroundColor :"blue" }} />
</View>

<Text style={{marginTop:5,fontSize:20,marginLeft:10,color:"black",textDecorationLine: "underline"
,textDecorationColor:"red",textDecorationStyle:"dotted"}}> {`Absolute : -`}</Text>
<View
    style={{
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor:"red",
      height: 160,
      width : 160
    }}
  >
    <View
      style={{
        position: 'absolute',
        margin: 'auto',
        backgroundColor:"green",
        width: 50,
        height: 50,
        top :5,bottom: 10,left :5,right:5,
        }}
    />
    <View
      style={{
        position: 'absolute',
        margin: 'auto',
        backgroundColor:"blue",
        top :55,bottom: 10,left :55,right:0,
        width:  50,
        height: 50
      }}
    />
     <View
      style={{
        position: 'absolute',
        margin: 'auto',
        backgroundColor:"black",
        top :107,bottom: 10,left :105,right:0,
        width:  50,
        height: 50
      }}
    />
  </View>

  <Text style={{marginTop:20,fontSize:20,fontWeight:"bold",color:"black",marginBottom: 10,
textDecorationColor:"red",textDecorationLine:"underline",textDecorationStyle:"double"}}>Handling Text Input :-</Text>


<Text style={{marginTop:20,fontSize:20,fontWeight:"bold",color:"black",marginBottom: 10,
textDecorationColor:"red",textDecorationLine:"underline",textDecorationStyle:"double"}}>Fixed dimensions Extra with layout :-</Text>
  
    <View style={{flexDirection: "row", marginTop: 5, marginBottom: 5 }}>
      <View style={{ width: 150, height: 150, backgroundColor: 'green' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
    </View>
    <View style={{flexDirection: "column", marginTop: -150, marginBottom: 15}}>
        <View style={{ width: 150, height: 150, backgroundColor: 'green' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
      </View>

      <View style={{flexDirection: "row-reverse",marginBottom:5}}>
      <View style={{ width: 150, height: 304, backgroundColor: 'green' }} />
      <View style={{ width: 100, height: 150, backgroundColor: 'red' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
    </View>
    <View style={{flexDirection: "column-reverse", marginTop: -307,marginBottom: 15}}>
        <View style={{ width: 150, height: 150, backgroundColor: 'green' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
      </View>
 

      <View style={{height:300}}>
       <View style={{flex:1,backgroundColor : '#FF671F',marginTop:5}}/>
      <View style={{flex:2,backgroundColor : '#FFFFFF',marginTop:5}}/>
      <View style={ds.circle}/>
      <View style={{flex:3,backgroundColor : '#046A38',marginTop:5,marginBottom:10}}/>
    </View>

    <View style={{marginBottom:230}}>
      <View style={{ width: 500, height: 400, backgroundColor: "red" }} />
      <View style={firsrcircle.circle} />
      <View style={secondcicle.circle} />
      <View style={thirdcicle.circle} />
      <View style={fourcicle.circle} />
      <View style={fivecicle.circle} />
      <View style={sixcicle.circle} />
      <Text style={{ fontStyle: "italic", fontSize: 20, color: "#EB5406", marginTop: -40, textAlign: "center", marginLeft: 7 }}>Raval Sarthi Shaileshkumar</Text>
      </View>
    
     
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
      color: "blue",
      marginTop: 10
    }}>I am {props.name}</Text>
  );
}


let styles = StyleSheet.create({
  bigcolor :{
    color : "blue",
    fontWeight : "bold",
    fontSize : 30,
    marginTop:5
  },
  red :{
    color : "violet",
    fontStyle : "italic",
    fontSize : 12,
    marginTop:15
    }

}
)

const Usebutton =(props)=>{
  const [dones,notdone] = useState(true)
  return(
    <View>
      <Text style = {{
        textAlign : "center",
        marginBottom:5
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



let ds = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    marginTop: -90,
    marginLeft : 130,
    borderRadius: 100 / 2,
    backgroundColor: "#06038D",
  },
});


let firsrcircle = StyleSheet.create({
  circle:{
    backgroundColor:"black",
    width: 300,
    height: 300,
    marginTop: -350,
    marginLeft : 40,
    borderRadius: 300 / 2
  }
})

let secondcicle = StyleSheet.create({
    circle:{
      backgroundColor:"pink",
      width :250,
      height : 250,
      marginTop : -275,
      marginLeft : 65,
      borderRadius : 300/2
    }
})

let thirdcicle = StyleSheet.create({
  circle:{
    backgroundColor:"green",
    width :200,
    height : 200,
    marginTop : -225,
    marginLeft : 90,
    borderRadius : 300/2
  }
})

let fourcicle = StyleSheet.create({
  circle:{
    backgroundColor:"blue",
    width :150,
    height : 150,
    marginTop : -175,
    marginLeft : 115,
    borderRadius : 150/2
  }
})

let fivecicle = StyleSheet.create({
  circle:{
    backgroundColor:"yellow",
    width :100,
    height : 100,
    marginTop : -125,
    marginLeft : 140,
    borderRadius : 100/2
  }
})

let sixcicle = StyleSheet.create({
  circle:{
    backgroundColor:"grey",
    width :50,
    height : 50,
    marginTop : -75,
    marginLeft : 165,
    borderRadius : 50/2
  }
})

export default YourApp;
