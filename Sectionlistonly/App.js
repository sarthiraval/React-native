import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
let App = () =>{
  return(
    <SafeAreaView>
      <ScrollView>
      <SectionList 
      sections={CAR}
      keyExtractor ={(item,model)=>item+model}
      renderItem ={({title})=> <Item title={{title}}/>}
      renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )} /> 
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;
