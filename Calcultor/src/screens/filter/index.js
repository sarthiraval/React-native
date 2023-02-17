import React, { useState } from 'react';
import styles from './style';
import { Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native';

import 'react-native-gesture-handler';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { cross, rightSide } from '../../assets/Image';
import { whiteGrey } from '../../assets/constants';


const Filter = () => {
   const [setData, getData] = useState(0)
   const [setSalary, getSalary] = useState(true)

   // const handleClick = (item, id) => {
   //    setData(id)
   //    something(item)
   // }
   return (


      <SafeAreaView style={styles.backColor}>
         <Image source={cross} style={styles.crossIcon} />

         <View style={styles.mainView}>
            <Text style={styles.filterText}>Filters</Text>
            <ScrollView>
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

                  <View style={styles.distanceBaseView}>
                     <TouchableOpacity
                        onPress={() => getData(!setData)} >
                        <View
                           style={styles.circleBorder}>
                           <View style={styles.circleSmall} />
                        </View>
                        {/* {
                              setData
                                 ? <View
                                    style={styles.circle} />
                                 : <View
                                    style={styles.circleCheck}>
                                       <View style={styles.circleSmall}/>
                                       </View>
                           } */}
                     </TouchableOpacity>
                     <Text style={styles.distanceText}>Exact location</Text>
                  </View>

                  <View style={styles.distanceView}>
                     <TouchableOpacity
                        onPress={() => getData(!setData)}>
                        <View
                           style={ styles.circle}
                        />
                        {/* {
                              setData
                                 ? <View
                                    style={styles.circle} />
                                 : <View
                                    style={styles.circleCheck}>
                                       <View style={styles.circleSmall}/>
                                       </View>
                           }*/}
                     </TouchableOpacity>
                     <Text style={styles.distanceText}>5 miles from selected location</Text>
                  </View>

                  <View style={styles.distanceView}>
                     <TouchableOpacity
                        onPress={() => getData(!setData)}>
                        <View
                           style={styles.circle} />
                        {/* {
                              setData
                                 ? <View
                                    style={styles.circle} />
                                 : <View
                                    style={styles.circleCheck}>
                                       <View style={styles.circleSmall}/>
                                       </View>
                           } */}
                     </TouchableOpacity>
                     <Text style={styles.distanceText}>20 miles from selected location</Text>
                  </View>

               </View>

               <View style={styles.distanceLine} />

               <Text style={styles.salaryBaseText}>Salary</Text>

               <View style={styles.salaryButton}>


                  <View style={styles.salaryBaseView}>
                     <TouchableOpacity
                        onPress={() => getSalary(!setSalary)}>
                        <View
                           style={styles.circleBorder}>
                           <View style={styles.circleSmall} />
                        </View>
                        {/* {
                              setSalary
                                 ? <View
                                    style={styles.circle} />
                                 : <View
                                    style={styles.circleCheck}>
                                       <View style={styles.circleSmall}/>
                                       </View>
                           } */}
                     </TouchableOpacity>
                     <Text style={styles.SalaryText}>Any Salary</Text>
                  </View>

                  <View style={styles.salaryView}>
                     <TouchableOpacity
                        onPress={() => getSalary(!setSalary)}>
                        <View
                           style={styles.circle} />
                        {/* {
                              setSalary
                                 ? <View
                                    style={styles.circle} />
                                 : <View
                                    style={styles.circleCheck}>
                                       <View style={styles.circleSmall}/>
                                       </View>
                           } */}
                     </TouchableOpacity>
                     <Text style={styles.SalaryText}>From $50/hour</Text>
                  </View>


                  <View style={styles.salaryView}>
                     <TouchableOpacity
                        onPress={() => getSalary(!setSalary)}>
                        <View
                           style={styles.circle} />
                        {/* {
                              setSalary
                                 ? <View
                                    style={styles.circle} />
                                 : <View
                                    style={styles.circleCheck}>
                                       <View style={styles.circleSmall}/>
                                       </View>
                           } */}
                     </TouchableOpacity>
                     <Text style={styles.SalaryText}>From $???/hour</Text>
                  </View>

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
      </SafeAreaView>


   )
}
export default Filter