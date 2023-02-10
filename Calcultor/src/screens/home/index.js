import React from 'react';
import styles from './style';
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Button from 'apsl-react-native-button'

import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';




let Calculator = () => {


   return (
      <View
         style={styles.AllContent}>

         <SafeAreaView style={styles.SafeDesign} >

            <View style={styles.viewBase}>

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
            </View>

            <View style={styles.viewBas}>
               <Button
                title='1'
                onPress={() => { alert(1) }}/>
        

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
            </View>


         </SafeAreaView>
      </View>
   )
}
export default Calculator