import React from 'react';
import {
View,FlatList,Text
} from 'react-native';

let FlasList = () =>{

  return(
    <View style={{
      flex :1, 
      paddingTop: 22
    }}>


   <FlasList data ={[
      {key : Sarthi},
      {key : Janik},
      {key : Sid},
      {key : Harshit},
      {key : Kevin},
      {key : Moin},
      {key : Keval},
      {key : Krunal},
      {key : Yash},
      {key : Akshat},
      {key : Deep},
      {key : Jigar},
      {key : RamVillas},
      {key : Komit},
      {key : Ali},
   ]}
   renderItem = {(item) =>
    <Text style={{padding : 10,fontSize:20,height:44}}>{item.key}</Text>}
   />
    </View>
  )

}

export default FlasList;
