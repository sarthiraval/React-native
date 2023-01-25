import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  
  SectionList,
  View
} from 'react-native';
let App = () =>{
  return(
    <SafeAreaView>
      <ScrollView
       showsVerticalScrollIndicator = "false">
      <SectionList
       style={{marginLeft:20,marginRight:20}}
        sections={CAR}
        renderItem ={({title})=> 
      <View style={{backgroundColor: '#F8C471',padding: 20,marginVertical:10}}>
      <Text style={{fontSize: 24,color:"#E74C3C"}}>{title}</Text>
      </View>}
          keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { date } }) => (
          <Text style={{fontSize: 30,color:"#82E0AA"}}>{date}</Text>
        )}
      />
      </ScrollView>
    </SafeAreaView>
  )
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
  
  
export default App;
