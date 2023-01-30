import React from 'react'
import { View,Text, SafeAreaView,ScrollView,ImageBackground, Image, FlatList ,SectionList, StyleSheet} from 'react-native'

let Post =() =>{

    return(
        <View style={{flex:1,backgroundColor:"#e6e6e6"}}>
    
<SafeAreaView style={{flex:1,justifyContent:"center"}}>
<Text style={{color:"black",fontSize:10,fontWeight:"bold",left:25,marginTop:10,alignSelf:"flex-start"}}>BACK</Text>

    <ScrollView
            showsVerticalScrollIndicator={false}>

        <View>
    
       <Image  source ={{
                        uri:"https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-4.jpg"
                        }}style={{width:100, height:100,marginTop:20,
                alignSelf: 'center',
                borderRadius:100/2}}  />

        <Text style={{color:"black",fontSize:25,fontWeight:"bold",marginTop:30,textAlign:"center"}}>Club Members</Text>
</View>
</ScrollView>
</SafeAreaView>
</View>
    )
                        }

 export default   Post                     