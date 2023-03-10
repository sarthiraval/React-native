import React , { useState } from "react";
import {ImageBackground, SafeAreaView,FlatList, Image,ScrollView, StyleSheet, Text,TextInput,TouchableOpacity,View } from "react-native";
import CheckBox from 'react-native-check-box'
// import { CheckBox } from 'react-native-elements-checkbox'
import { Dropdown } from 'react-native-element-dropdown';

let Reg =()=>{
   const data1 =[
    {id:1,title : 'Sarthi',surnamne:"Raval"},
    {id:2,title : 'Jainik',surnamne:"Kanariya"},
    {id:3,title : 'Sid',surnamne:"Soni"},
    {id:4,title : 'Harshit',surnamne:"Vataliya"},
    {id:5,title : 'Kevin',surnamne:"Patel"},
    {id:6,title : 'Moin',surnamne:"Rangrej"},
    {id:7,title : 'Keval',surnamne:"Raval"},
    {id:9,title : 'Krunal',surnamne:"Raval"},
    {id:10,title : 'Yash',surnamne:"Desai"},
    {id:11,title : 'Akshat',surnamne:"Solanki"}
   ]
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
    const [selctmame, setselctmame] = useState("Select Name");
    const [selctsur, setselctsur] = useState("Select Surname");

    const [isclick,setclick] = useState(false)
    const [sclick,etclick] = useState(false)

    const [alue, setValue] = useState();
    const [values, setValues] = useState();
    const [chekdone, setnotdone] = useState (true)
    return(
        <View style={{flex:1,backgroundColor:"#e6e6e6"}}>
            {/* <ImageBackground 
            source={{
                uri: 'https://images.pling.com/img/00/00/62/67/35/1584405/577c4dc30402a8dfa3915867a59e64a89b7b3498e9f327bcfb0bcc7dfcbf99908e32.jpg'    }}
             style ={{flex:1}}
         > */}


        <SafeAreaView style={{alignSelf:"center"}}>
            <ScrollView
            showsVerticalScrollIndicator={false}>
              
             <View>
             <Text style={{color:"black",fontSize:25,fontWeight:"bold",alignSelf:"center",marginTop:10}}>Sign Up</Text>

                {/* <View style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
                <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>Sign</Text>
                <Text style={{color:"yellow",fontSize:25,fontWeight:"bold",left:5}}>Up</Text>
            </View> */}
            </View>
            <View style={box.rectangle} >
                <TextInput 
                placeholder="Your Name"
                placeholderTextColor={"#808080"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10,}}/>
             </View>    

             <View style={box.rectangl} >
                <TextInput 
                placeholder="Email"
                keyboardType= "email-address"
                dataDetectorTypes="address"
                textContentType= "emailAddress"
                placeholderTextColor={"#808080"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View> 
             <View style={box.rectangl} >
                <TextInput 
                placeholder="Password"
                textContentType= "password"
                secureTextEntry= {true}
                placeholderTextColor={"#808081"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View> 

             <View style={box.rectangl} >
                <TextInput 
                placeholder="Phone Number"
                keyboardType= "phone-pad"
                dataDetectorTypes="phoneNumber"
                textContentType="telephoneNumber"
                placeholderTextColor={"#808080"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View> 
         <View style ={box.rectangl}>
                <TextInput 
                placeholder="Street and House Number"
                placeholderTextColor={"#808080"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
            </View>

            <View style={box.rectangl} >
                <TextInput 
                placeholder="Landmark"
                placeholderTextColor={"#808080"}
                style={{color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View>    
   
             
             
        
        <View style={box.rectangl} >
             <Dropdown
               
                placeholderStyle={{marginRight:10,marginLeft:10,fontSize:16,color:"black"}}
                selectedTextStyle={{marginLeft:10,fontSize:16,color:"black"}}
                inputSearchStyle={{marginLeft:10,fontSize:16,color:"black"}}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={values}
                onChange={item => {
                setValue(item.values);
                }}
                />
      
        </View>
    
          <View style={box.rectangl} >
             <Dropdown
              placeholderStyle={{marginRight:10,marginLeft:10,fontSize:16,color:"black"}}
                selectedTextStyle={{marginLeft:10,fontSize:16,color:"black"}}
                inputSearchStyle={{marginLeft:10,fontSize:16,color:"black"}}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={alue}
                onChange={item => {
                setValues(item.alue);
                }}
                />
          </View>
             <View style={box.rectangl} >
                <TextInput 
                placeholder="Pincode"
                keyboardType= "number-pad"
                placeholderTextColor={"#808080"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View> 
        
         
                {/* setState = Storing and Reading the checkbox state */}
           
            
    <View  style ={{flexDirection:"row",marginTop:20,marginBottom:10}}>

             

   
        <CheckBox
        style={{marginRight:7}}
         onClick={()=>{
                   setnotdone(!chekdone);
                   
               }}
               disabled={false} checked={true}
              
               /> 
               {chekdone ?(
                <View style={{marginTop:1}}/>
                ):(
                    <><Image source={('../../img/check.png')} style={{ marginLeft: -24, marginTop: 6, height: 10, width: 10 }} /></>
                 )}


                <View>
                 <Text style={{color:"#808080",fontSize:11,fontWeight:"bold",left:2}}>I agree to abide by Company's </Text>
                <Text style={{color:"#808080",fontSize:11,fontWeight:"bold",left:2,top:1.5}}>and</Text>
                </View>
                <View style={{top:-1}}>
                <Text style={{color:"blue",fontSize:12,fontWeight:"bold",left:4}}>Terms of Service</Text>
                <Text style={{color:"blue",fontSize:12,fontWeight:"bold",left:-145}}>Its Privacy Policy</Text>
                </View>
     </View>

 

             
           <View style={{backgroundColor:"darkblue",alignSelf:"center",
            marginTop:10,width:330,justifyContent:"center",padding:10,borderRadius:10}}>
              <Text style={{fontSize:20,color:"white",textAlign:"center",fontWeight:"bold"}}> Sign up</Text>
           </View>
             
           <View style={{flexDirection:"row",alignSelf:"center",marginTop:20}}>
                <Text style={{color:"#808080",fontSize:12}}>Already have an account?</Text>
                <Text style={{color:"#00bfff",fontSize:12,fontWeight:"bold",left:2}}>Click here</Text>
                <Text style={{color:"#808080",fontSize:12,left:5}}>to login</Text>

             </View>
      
    </ScrollView>
</SafeAreaView>
{/* </ImageBackground> */}

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
        shadowColor: "#999999",
        shadowOpacity: 0.6,
        shadowRadius: 1,
        shadowOffset: {
        height: 2,
        }
        
    },
    rectangl:{
        width: 330,
        height: 40,
        marginTop : 20,
        borderRadius: 10,
        borderWidth:1,
        borderColor:"white",
        backgroundColor: "white",
        shadowColor: "#999999",
        shadowOpacity: 0.6,
        shadowRadius: 1,
        shadowOffset: {
        height: 1.5,
        }
    }}
)
export default Reg