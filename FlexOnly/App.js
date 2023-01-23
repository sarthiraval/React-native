import React from 'react';
import {
View,Text,ScrollView
} from 'react-native';

let Flexall =() =>{
  return(
    <View style ={{
      marginTop: 50,
      marginEnd : 10,
      marginStart : 10,
      marginBottom: 10}}>

    <ScrollView
    showsVerticalScrollIndicator="false">


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
<Text style={{marginTop:10,fontSize:20,fontWeight:"bold",fontStyle:"italic",
color:"black",textDecorationLine: "underline"}}>JustifyContent :-</Text>
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


      <ScrollView
        horizontal
        showsHorizontalScrollIndicator ={false}
        style={{margin:15,marginBottom:50}}
        >
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
    <View style={{ width: 20, height: 20, backgroundColor: 'green' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />

</ScrollView>
     
   </ScrollView>
   </View>
  )
}
export default Flexall