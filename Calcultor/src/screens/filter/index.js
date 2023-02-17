import React, { useState } from 'react';
import styles from './style';
import { Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native';

import 'react-native-gesture-handler';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { cross, rightSide } from '../../assets/Image';
import { whiteGrey } from '../../assets/constants';


let Filter = () => {
   const [setData, getData] = useState(0)
   const [setSalary, getSalary] = useState(true)

   // const handleClick = (item, id) => {
   //    setData(id)
   //    something(item)
   // }
   return (


      <SafeAreaView style={styles.backColor}>
         <Image source={cross} style={styles.crossSign} />

         <View style={styles.manageView}>
            <Text style={styles.nameFilter}>Filters</Text>
            <ScrollView>
               <View style={styles.mainView}>
                  <Text style={styles.mainName}>
                     Category
                  </Text>
                  <TouchableOpacity>
                     <Image source={rightSide} style={styles.arrow} />
                  </TouchableOpacity>
               </View>

               <TextInput placeholder="Example:- Nurse,Housekeeper"
                  placeholderTextColor={whiteGrey}
                  style={styles.baseValue} />

               <View style={styles.mainLine} />

               <View style={styles.mainView}>
                  <Text style={styles.mainLocation}>
                     Locations
                  </Text>
                  <TouchableOpacity>
                     <Image source={rightSide} style={styles.arrowDirection} />
                  </TouchableOpacity>
               </View>

               <TextInput placeholder="New York, NY; Chicago.IL;Atlanta,GA"
                  placeholderTextColor={whiteGrey}
                  style={styles.baseLocation} />

               <View style={styles.viewLine} />

               <Text style={styles.nameDistance}>Distance</Text>

               <View style={styles.checkBase}>

                  <View style={styles.direction}>
                     <TouchableOpacity

                        onPress={() => getData(!setData)}
                     >
                        <View
                           style={styles.circleCheck}>
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
                     <Text style={styles.checkValue}>Exact location</Text>
                  </View>

                  <View style={styles.checkDirection}>
                     <TouchableOpacity
                        onPress={() => getData(!setData)}>
                        <View
                           style={
                              styles.circle
                           }
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
                     <Text style={styles.checkValue}>5 miles from selected location</Text>
                  </View>

                  <View style={styles.checkDirection}>
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
                     <Text style={styles.checkValue}>20 miles from selected location</Text>
                  </View>

               </View>

               <View style={styles.baseLine} />

               <Text style={styles.nameSalary}>Salary</Text>

               <View style={styles.salaryBase}>


                  <View style={styles.direction}>
                     <TouchableOpacity
                        onPress={() => getSalary(!setSalary)}>
                        <View
                           style={styles.circleCheck}>
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
                     <Text style={styles.checkValue}>Any Salary</Text>
                  </View>

                  <View style={styles.salaryDirection}>
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
                     <Text style={styles.checkValue}>From $50/hour</Text>
                  </View>


                  <View style={styles.salaryDirection}>
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
                     <Text style={styles.checkValue}>From $???/hour</Text>
                  </View>
               </View>
            </ScrollView>

         </View>

         <View
            style={styles.backBase}>
            <TouchableOpacity
               style={styles.buttonBase}>
               <Text style={styles.textBase}>Show Results</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>


   )
}
export default Filter