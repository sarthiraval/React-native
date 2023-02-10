import React from 'react';
import styles from './style';
import { Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native';

import 'react-native-gesture-handler';
import { left } from '../../assets/Image';
// import { createDrawerNavigator } from '@react-navigation/drawer';




let Calculator = () => {


   return (
      <View
         style={styles.AllContent}>

         <SafeAreaView style={styles.SafeDesign} >

            <View style={styles.main}>
               <Text style={styles.mainText}>123</Text>
            </View>

            <View style={styles.viewBase}>

               <View style={styles.designBas}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAC}>AC</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designKnow}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofData}>( )</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designKnow}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberof}>% </Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designKnow}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.signOf}>/ </Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.viewBas}>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>7</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>8</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>9</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.multiple}>* </Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.viewBas}>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>4</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>5</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>6 </Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.division}>-</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.viewBas}>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>1</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>2</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>3 </Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.addPlus}>+</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.viewBas}>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.numberofAll}>0</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.doting}>.</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     {/* <Image source={left} style={styles.arrow} /> */}
                     <Text style={styles.left}>&lt;</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.designBas}>
                  <TouchableOpacity onPress={() => { alert("hello") }}>
                     <Text style={styles.equal}>=</Text>
                  </TouchableOpacity>
               </View>
            </View>

         </SafeAreaView>
      </View>
   )
}
export default Calculator