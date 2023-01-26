import React from 'react';
import {
View,FlatList,Text, SafeAreaView, SectionList, ScrollView
} from 'react-native';


let FlatListcode = () =>{

  return(
  <SafeAreaView>
    <ScrollView 
    showsVerticalScrollIndicator="false">
    <View style={{alignSelf:"stretch",marginBottom:10,marginRight:10,marginLeft:10}}>
    <Text style={{fontSize:30}}>Flat-List:-</Text>

   <FlatList  data ={[
      {id:1,title : 'Sarthi'},
      {id:2,title : 'Janik'},
      {id:3,title : 'Sid'},
      {id:4,title : 'Harshit'},
      {id:5,title : 'Kevin'},
      {id:6,title : 'Moin'},
      {id:7,title : 'Keval'},
      {id:9,title : 'Krunal'},
      {id:10,title : 'Yash'},
      {id:11,title : 'Akshat'},
      {id:12,title : 'Deep'},
      {id:13,title : 'Jigar'},
      {id:14,title : 'Komit'},
      {id:15,title : 'Ali'},
      {id:16,title : 'Pratik'},
      {id:17,title : 'Parshav'},
      {id:18,title : 'Asim'},
      {id:19,title : 'Shivang'},
      {id:20,title : 'Haider'},
      {id:21,title : 'Sunny'},
   ]}
   //render
   //The renderItem is a callback function
   // that will accept the individual item from the data prop and render a component for it.

   //KeyExtractor
   //The default extractor checks item.key,then item.id,and then falls back to using the index, like React does.
    renderItem={({item}) => 
    <Text style= {{padding:10,fontSize:20,height:50,color:"red"}}>{item.id}. {item.title}</Text>}
    keyExtractor ={item => item.id}
    ListEmptyComponent={<Text>No Data Found</Text>}
    />

<Text style={{fontSize:30}}>Flat-List Empty:-</Text>

    <FlatList  data ={[ ]}
    renderItem={({item}) => 
    <Text style= {{padding:10,fontSize:20,height:50,color:"red"}}>{item.id}. {item.title}</Text>}
    keyExtractor ={item => item.id}
    ListEmptyComponent={<Text>No Data Found</Text>}
    />
<Text style={{fontSize:30}}>Section-List:-</Text>
<SectionList
        style={{marginLeft:20,marginRight:20}}
        sections={CAR}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(title, data) => title + data}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{fontSize: 30,color:"#82E0AA"}}>{title}</Text>
        )}
      />


    </View>
    </ScrollView>
    </SafeAreaView>
  )

}
function Item({ title }) {
  return (
    <View style={{backgroundColor: '#F8C471',padding: 20,marginVertical:10}}>
      <Text style={{fontSize: 24,color:"#E74C3C"}}>{title}</Text>
    </View>
  );
}

const CAR = [
  {title :"Maruti Suzuki",
  data:["Maruti Suzuki Brezza","Maruti Suzuki Swift","Maruti Suzuki Grand Vitara"]},
  {title :"Hyundai",
  data:["Hyundai Aura","Hyundai Grand i10 Nios"]},
  {title :"Toyota",
  data:["Toyota Innova Hycross","Toyota Fortuner"]},
  {title :"KIA",
  data:["Kia Sonet","Kia Carens","Kia EV6","Kia Seltos"]},
  {title :"Tesla",
  data:["Tesla Model S","Tesla Model 3"]},
  {title :"Volvo",
  data:["Volvo XC90","Volvo S90","Volvo S60"]},
  ]

export default FlatListcode;
