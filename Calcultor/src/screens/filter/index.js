import React, { useState } from 'react';
import styles from './style';
import { Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { cross, rightSide } from '../../assets/Image';
import { whiteGrey } from '../../assets/constants';

const Filter = () => {
   var distanceData = [
      { id: 1, title: 'Exact location' },
      { id: 2, title: '5 miles from selected location' },
      { id: 3, title: '20 milles from selected location' }
   ];
   const [setData, getData] = useState(1)
   var salaryData = [
      { id: 1, title: 'Exact location' },
      { id: 2, title: '5 miles from selected location' },
      { id: 3, title: '20 milles from selected location' }
   ];
   const [setSalary, getSalary] = useState(1)
   
   return (
      <View style={styles.backColor}>
         <View style={styles.mainView}>
            <Image source={cross} style={styles.crossIcon} />
            <Text style={styles.filterText}>Filters</Text>
            <ScrollView
               showsVerticalScrollIndicator={false}>
               <View style={styles.manageView}>
                  <Text style={styles.textCategory}>
                     Category
                  </Text>
                  <TouchableOpacity>
                     <Image source={rightSide} style={styles.categoryIcon} />
                  </TouchableOpacity>
               </View>
               <TextInput placeholder="Nurse,Housekeeper"
                  placeholderTextColor={whiteGrey}
                  style={styles.categoryInput} />
               <View style={styles.line} />
               <View style={styles.manageView}>
                  <Text style={styles.locationText}>
                     Locations
                  </Text>
                  <TouchableOpacity>
                     <Image source={rightSide} style={styles.locationIcon} />
                  </TouchableOpacity>
               </View>
               <TextInput placeholder="New York, NY; Chicago.IL;Atlanta,GA"
                  placeholderTextColor={whiteGrey}
                  style={styles.locationInput} />
               <View style={styles.line} />
               <Text style={styles.distanceBaseText}>Distance</Text>
               <View style={styles.distanceButton}>
                  {distanceData.map((item, index) => {
                     return (
                        <View style={styles.distanceBaseView}>

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
                           <Text style={styles.distanceText}>{item.title}</Text>
                        </View>

                     );
                  })}
               </View>
               <View style={styles.distanceLine} />
               <Text style={styles.salaryBaseText}>Salary</Text>
               <View style={styles.salaryButton}>
                  {salaryData.map((item, index) => {
                     return (

                        <View style={styles.salaryBaseView}>

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
                           <Text style={styles.SalaryText}>{item.title}</Text>
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


                  // <View style={styles.salaryView}>
                  //    <TouchableOpacity
                  //       onPress={() => getSalary(!setSalary)}>
                  //       <View
                  //          style={styles.circle} />
                  //       {
                  //             setSalary
                  //                ? <View
                  //                   style={styles.circle} />
                  //                : <View
                  //                   style={styles.circleCheck}>
                  //                      <View style={styles.circleSmall}/>
                  //                      </View>
                  //          }
                  //    </TouchableOpacity>
                  //    <Text style={styles.SalaryText}>From $50/hour</Text>
                  // </View>
                  // <View style={styles.salaryView}>
                  //    <TouchableOpacity
                  //       onPress={() => getSalary(!setSalary)}>
                  //       <View
                  //          style={styles.circle} />
                  //       {
                  //             setSalary
                  //                ? <View
                  //                   style={styles.circle} />
                  //                : <View
                  //                   style={styles.circleCheck}>
                  //                      <View style={styles.circleSmall}/>
                  //                      </View>
                  //          }
                  //    </TouchableOpacity>
                  //    <Text style={styles.SalaryText}>From $???/hour</Text>
                  // </View> 
