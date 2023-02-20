import React, { useState } from 'react';
import styles from './style';
import { Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { cross, rightSide } from '../../assets/Image';
import { whiteGrey } from '../../assets/constants/index'

const Filter = () => {
   const textInputDta = [
      { title: 'Category', option: "Nurse,Housekeeper", iconLeft: rightSide },
      { title: 'Locations', option: "New York, NY; Chicago.IL;Atlanta,GA", iconLeft: rightSide },
   ];
   const distanceData = [
      { id: 1, title: 'Exact location' },
      { id: 2, title: '5 miles from selected location' },
      { id: 3, title: '20 milles from selected location' }
   ];
   const inputField = ({ item }) => {
      return (
         <><View style={styles.manageView}>
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
                  data={textInputDta}
                  renderItem={inputField}
               />
               <Text style={styles.dsMainText}>Distance</Text>
               <View style={styles.space}>
                  {distanceData.map((item, index) => {
                     return (
                        <View style={styles.dsMainView}>

                           <TouchableOpacity
                              key={index}
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
                  {salaryData.map((item, index) => {
                     return (
                        <View style={styles.dsMainView}>
                           <TouchableOpacity
                              key={index}
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