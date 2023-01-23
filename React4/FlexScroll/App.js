import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';


let Viewadsa =() =>{

  return(
<View style={{flexGrow:1,margin:20}}>
<ScrollView
  style = {{height:"10%"}}
  scrollEnabled = {true}
 contentContainerStyle={{flex:1}}
 showsVerticalScrollIndicator = {false}
 >

<View style ={{marginTop:20}}> 
     <View style={{flex:1,backgroundColor:"red"}}></View>
     <View style={{flex:2,backgroundColor:"green"}}></View>
     <View style={{flex:3,backgroundColor:"blue"}}></View>
     <View style={{flex:4,backgroundColor:"yellow"}}/>
     <View style={{flex:5,backgroundColor:"pink"}}/>
     <View style={{flex:6,backgroundColor:"black"}}/>
  </View>
  <View style ={{flex:1,marginTop:10,flexDirection:"column"}}> 
    <View style={{flex:1,backgroundColor:"red"}}></View>
    <View style={{flex:2,backgroundColor:"green"}}></View>
    <View style={{flex:3,backgroundColor:"blue"}}></View>
    <View style={{flex:4,backgroundColor:"yellow"}}/>
    <View style={{flex:5,backgroundColor:"pink"}}/>
    <View style={{flex:6,backgroundColor:"black"}}/>
 </View>

 <View style ={{marginTop:10,flexDirection:"row",flex:1}}> 
  <View style={{flex:1,backgroundColor:"red"}}></View>
  <View style={{flex:2,backgroundColor:"green"}}></View>
  <View style={{flex:3,backgroundColor:"blue"}}></View>
  <View style={{flex:4,backgroundColor:"yellow"}}/>
  <View style={{flex:5,backgroundColor:"pink"}}/>
  <View style={{flex:6,backgroundColor:"black"}}/>
</View>
  
  <View style={{ marginTop:10,flexDirection:"column-reverse",flex:1}}>
  <View style={{ flex: 1, backgroundColor: "red" }}></View>
  <View style={{ flex: 2, backgroundColor: "green" }}></View>
  <View style={{ flex: 3, backgroundColor: "blue" }}></View>
  <View style={{ flex: 4, backgroundColor: "yellow" }} />
  <View style={{ flex: 5, backgroundColor: "pink" }} />
  <View style={{ flex: 6, backgroundColor: "black" }} />

</View>

<View style ={{ marginTop:10,flexDirection:"row-reverse",flex:1
}}> 
    <View style={{flex:1,backgroundColor:"red"}}/>
    <View style={{flex:2,backgroundColor:"green"}}></View>
    <View style={{flex:3,backgroundColor:"blue"}}></View>
    <View style={{flex:4,backgroundColor:"yellow"}}/>
    <View style={{flex:5,backgroundColor:"pink"}}/>
    <View style={{flex:6,backgroundColor:"black"}}/>
  </View>



<View>
  <ScrollView
    contentContainerStyle = {{marginTop:10}}
    horizontal ={true}
    bounces = {true}
    showsHorizontalScrollIndicator ={true}>
    <View style={{ width: "0.1%", height: 50, backgroundColor: 'green' }} />
    <View style={{ width: "0.2%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "0.3%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "0.4%", height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "0.5%", height: 50, backgroundColor: 'red' ,marginStart:10 }} />
    <View style={{ width: "0.6%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "0.7%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "0.8%", height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "1.0%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "1.2%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "1.5%", height:50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "2.2%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "2.5%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "3%", height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "3.5%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: "4%", height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: "4.2%", height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: "5%", height: 50, backgroundColor: 'red',marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'red' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'red' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'powderblue',marginStart:10  }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'green' ,marginStart:10 }} />
    <View style={{ width: 20, height: 50, backgroundColor: 'red' ,marginStart:10 }} />
  </ScrollView>
  </View>

<Text style={{fontSize:20}}>Hi</Text>
  
</ScrollView>
</View>
  );
}
export default Viewadsa;
