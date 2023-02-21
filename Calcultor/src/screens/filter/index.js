import React, { useState } from 'react';
import styles from './style';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { cross, rightSide } from '../../assets/Image';
import { whiteGrey } from '../../assets/constants'
const Filter = () => {
   const textInputDta = [
      { id:1,title: 'Category', option: "Nurse,Housekeeper", iconLeft: rightSide },
      { id:2,title: 'Locations', option: "New York, NY; Chicago.IL;Atlanta,GA", iconLeft: rightSide },
   ];
   const inputField = ({ item }) => {
      return (
         <>
            <View style={styles.manageView}>
               <Text style={styles.itemText}>
                  {item.title}
               </Text>
               <TouchableOpacity>
                  <Image source={item.iconLeft}
                     style={styles.icons} />
               </TouchableOpacity>
            </View>
            <TextInput placeholder={item.option}
               placeholderTextColor={whiteGrey}
               style={styles.itemTextInput} />
            <View style={styles.line} /></>
      )
   }
   const distanceData = [
      { id: 1, title: 'Exact location' },
      { id: 2, title: '5 miles from selected location' },
      { id: 3, title: '20 milles from selected location' }
   ];
   const [setData, getData] = useState(1)
   const salaryData = [
      { id: 1, title: 'Any Salary' },
      { id: 2, title: 'Form $50/hour' },
      { id: 3, title: 'Form $???/hour' }
   ];
   const [setSalary, getSalary] = useState(1)

   return (
      <View style={styles.backColor}>
         <View style={styles.mainView}>
            <Image source={cross} style={styles.crossIcon} />
            <Text style={styles.filterText}>Filters</Text>
            <ScrollView
               showsVerticalScrollIndicator={false}>
               <FlatList
                  scrollEnabled={false}
                  key ={textInputDta.id}
                  data={textInputDta}
                  nestedScrollEnable={true}
                  renderItem={inputField}
               />
               {/* <DrawerNavigation /> */}
               <Text style={styles.dsMainText}>Distance</Text>
               <View style={styles.space}>
                  {distanceData.map((item) => {
                     return (
                        <View style={styles.dsMainView}>
                           <TouchableOpacity
                              key={distanceData.id}
                              onPress={() => getData(item.id)} >
                              {
                                 setData == item.id ?
                                    <View
                                       style={styles.circleBorder}>
                                       <View style={styles.circleSmall} />
                                    </View> : <View
                                       style={styles.circle} />
                              }
                           </TouchableOpacity>
                           <Text style={styles.dsBaseText}>{item.title}</Text>
                        </View>
                     );
                  })}
               </View>
               <View style={styles.line} />
               <Text style={styles.dsMainText}>Salary</Text>
               <View style={styles.space}>
                  {salaryData.map((item) => {
                     return (
                        <View style={styles.dsMainView}>
                           <TouchableOpacity
                              key={salaryData.id}
                              onPress={() => getSalary(item.id)} >
                              {
                                 setSalary == item.id ?
                                    <View
                                       style={styles.circleBorder}>
                                       <View style={styles.circleSmall} />
                                    </View> : <View
                                       style={styles.circle} />
                              }
                           </TouchableOpacity>
                           <Text style={styles.dsBaseText}>{item.title}</Text>
                        </View>
                     );
                  })}
               </View>
            </ScrollView>
         </View>
         <View
            style={styles.buttonView}>
            <TouchableOpacity
               style={styles.button}>
               <Text style={styles.buttonText}>Show Results</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}
export default Filter