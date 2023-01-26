import React , { useState } from "react";
import {ImageBackground, SafeAreaView, Image,ScrollView, StyleSheet, Text,TextInput,TouchableOpacity,View } from "react-native";
import CheckBox from 'react-native-check-box'
// import { CheckBox } from 'react-native-elements-checkbox'
import { Dropdown } from 'react-native-element-dropdown';



let Reg =()=>{
      
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
    const [selectCountry, setSelcteCountry] = useState("Select Country");
    const [isclick,setclick] = useState(false)
    const [value, setValue] = useState("Select Country");
    const [chekdone, setnotdone] = useState (true)
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
                <Text style={{color:"yellow",fontSize:25,fontWeight:"bold",left:5}}>Up</Text>
            </View>
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
                style={{color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View>    
   
             {/* <TouchableOpacity style={{
                    width: 330,
                    height: 40,
                    marginTop : 20,
                    borderRadius: 10,
                    backgroundColor: "white",
             }}
             
             onPress={()=>{
                setclick(!isclick);
             }}>
                <View style={{flexDirection:"row"}} >
                <Text style={{color:"#999966",marginLeft:10,marginTop:10}}>{selectCountry == '' ? 'Select Country' : selectCountry}</Text>
                {isclick ?(
                <Image source = {require('../../img/check.png')} style={{marginLeft:190,marginTop:10,height:20,width:20}}/>
                ):(
                <Image source = {require('../../img/down.png')} style={{marginLeft:190,marginTop:10,height:20,width:20}}/>
                 )}
                 </View>
             </TouchableOpacity>
             {isclick ?(
                  <View 
                  style={{width : 330,height:300,borderRadius:10,marginTop:10,backgroundColor:"white"}}>
                      data = {require=('./s.json')}
                  </View>
             ) : null } */}
                 <View style={box.rectangl} >
             <Dropdown
               
                placeholderStyle={{marginRight:10,marginLeft:10,fontSize:16,color:"#999966"}}
                selectedTextStyle={{marginLeft:10,fontSize:16,color:"#999966"}}
                inputSearchStyle={{marginLeft:10,fontSize:16,color:"#999966"}}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setValue(item.value);
                }}
                />
          </View>
          <View style={box.rectangl} >
             <Dropdown
               
                placeholderStyle={{marginRight:10,marginLeft:10,fontSize:16,color:"#999966"}}
                selectedTextStyle={{marginLeft:10,fontSize:16,color:"#999966"}}
                inputSearchStyle={{marginLeft:10,fontSize:16,color:"#999966"}}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setValue(item.value);
                }}
                />
          </View>
             <View style={box.rectangl} >
                <TextInput 
                placeholder="Pincode"
                keyboardType= "number-pad"
                placeholderTextColor={"#999966"}
                style={{marginTop:5,color:"black",fontSize:15,marginLeft:10,marginTop:10}}/>
             </View> 
        
         
                {/* setState = Storing and Reading the checkbox state */}
           
            
    <View  style ={{flexDirection:"row",marginTop:10}}>
{/* 
      onClick={()=>{
                 this.setState({
                    isChecked:!this.state
                     })
            }}
                isChecked={this.state} */}
             

   
        <CheckBox
        //   checkedIcon={ <Image source = {require('../../img/check.png')} style={{marginLeft:-16,marginTop:6,height:10,width:10}}/>
        //   }
        //   uncheckedIcon={<Image source={require('../../img/check.png')} />}
        //   checked={this.state.checked}
        //   onPress={() => this.setState({checked: !this.state.checked})}
          onClick={()=>{
                   setnotdone(!chekdone);
                   
               }}
               disabled={false} checked={true}
              
               /> 
               {chekdone ?(
                <View style={{marginTop:1}}/>
                ):(
                <Image source = {require('../../img/check.png')} style={{marginLeft:-16,marginTop:6,height:10,width:10}}/>
                 )}


                <View>
                 <Text style={{color:"white",fontSize:10,fontWeight:"bold",left:2}}>I agree to abide by Company's </Text>
                <Text style={{color:"white",fontSize:10,fontWeight:"bold",left:2,top:3}}>and</Text>
                </View>
                <View style={{top:-1}}>
                <Text style={{color:"yellow",fontSize:12,fontWeight:"bold",left:5}}>Terms of Service</Text>
                <Text style={{color:"yellow",fontSize:12,fontWeight:"bold",left:-130}}>Its Privacy Policy</Text>
                </View>
     </View>

 

             
           <View style={{backgroundColor:"#ff80d5",alignSelf:"center",
            marginTop:10,width:330,justifyContent:"center",padding:10,borderRadius:10}}>
              <Text style={{fontSize:20,color:"white",textAlign:"center",fontWeight:"bold"}}> Sign up</Text>
           </View>
             
           <View style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
                <Text style={{color:"white",fontSize:12}}>Already have an account?</Text>
                <Text style={{color:"yellow",fontSize:12,fontWeight:"bold",left:2}}>Click here</Text>
                <Text style={{color:"white",fontSize:12,left:5}}>to login</Text>

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