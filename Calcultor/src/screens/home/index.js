import React, { useState, useRef } from 'react';
import styles from './style';
import { Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native';
import { dot } from "../../assets/Image/index"
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';


let Calculator = () => {

   const [value, setValue] = useState("0");
   const [bracket, setBracket] = useState(false)
   const AccountZero = (val) => {

      if (val == "AC") {
         setValue("0")
      }
      else if (val == "=") {

         if ((value.match(/\(/g) || []).length ==
            (value.match(/\)/g) || []).length) {
        
            try {
               if (value.slice(-1) == "+" ||
                  value.slice(-1) == "-" ||
                  value.slice(-1) == "*" ||
                  value.slice(-1) == "/" ||
                  value.slice(-1) == "." ||
                  value.slice(-1) == "%") {
                  setValue(`${eval(value.replace('()', '(0)')).slice(0, -1)}`)
               }
               else {
                  setValue(`${eval(value.replace('()', '(0)'))}`)
               }
            } catch (error) {
               setValue("Wrong Input")
            }
         }
         else {
            setValue("Formate Error")
         }
      }
      else if (val == "<") {
         setValue(value.slice(0, -1))
      }
      else if (val == "( )") {
         if (value == "0") {
            setValue("(")
            setBracket(true)
         }
         else if (value.slice(-1) == "+" ||
            value.slice(-1) == "-" ||
            value.slice(-1) == "*" ||
            value.slice(-1) == "/" ||
            value.slice(-1) == "." ||
            value.slice(-1) == "%") {

            setValue(value + "(")
            setBracket(true)
         }
         else {
            if (bracket == true) {
               setValue(value + ")")
               setBracket(false)
            }
            else {
               setValue(value + "(")
               setBracket(false)
            }
         }
      }
      else if (value == 'Formate Error') {
         setValue(val)
      }
      else if (value == 'Wrong Input') {
         setValue(val)
      }
      else {
         if (value == '0') {
            if (/*val == '+'|| val =='-' || val == '*'|| val =='/'|| val =='%'|| val == '.'*/
               isNaN(val)) {
               setValue(value + val)
            }
            else {
               setValue(val)
            }
         }
         else if (isNaN(val)) {
            if (value.slice(-1) == "+" ||
               value.slice(-1) == "-" ||
               value.slice(-1) == "*" ||
               value.slice(-1) == "/" ||
               value.slice(-1) == "." ||
               value.slice(-1) == "%") {
               setValue(value.slice(0, -1) + val)
            }
            else {
               setValue(value + val)
            }
         }
         else {
            setValue(value + val)
         }
      }

   }
   const ScrollViewRef = useRef()

   return (
      <View
         style={styles.AllContent}>

         <SafeAreaView style={styles.SafeDesign} >
            <ScrollView style={styles.main}
               showsVerticalScrollIndicator={false}
               ref={ScrollViewRef}
               onContentSizeChange={() => ScrollViewRef.current.scrollToEnd({
                  animated: true
               })
               }
            >
               <Text style={styles.mainText}>
                  {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
               </Text>

            </ScrollView>
 
 <View style={styles.mainBase}>
            <View style={styles.viewBase}>

               <View style={styles.designBas}>
                  <TouchableOpacity onPress={() => { AccountZero('AC') }}>
                     <Text style={styles.numberofAC}>AC</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designKnow}>
                  <TouchableOpacity onPress={() => { AccountZero('( )') }}>
                     <Text style={styles.numberofData}>( )</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designKnow}>
                  <TouchableOpacity onPress={() => { AccountZero('%') }}>
                     <Text style={styles.numberof}>% </Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designKnow}>
                  <TouchableOpacity onPress={() => { AccountZero('/') }}>
                     <Text style={styles.signOf}>/ </Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.viewBas}>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('7') }}>
                     <Text style={styles.numberofAll}>7</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('8') }}>
                     <Text style={styles.numberofAll}>8</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('9') }}>
                     <Text style={styles.numberofAll}>9</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { AccountZero('*') }}>
                     <Text style={styles.multiple}>* </Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.viewBas}>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('4') }}>
                     <Text style={styles.numberofAll}>4</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('5') }}>
                     <Text style={styles.numberofAll}>5</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('6') }}>
                     <Text style={styles.numberofAll}>6 </Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { AccountZero('-') }}>
                     <Text style={styles.division}>-</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.viewBas}>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('1') }}>
                     <Text style={styles.numberofAll}>1</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('2') }}>
                     <Text style={styles.numberofAll}>2</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('3') }}>
                     <Text style={styles.numberofAll}>3 </Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { AccountZero('+') }}>
                     <Text style={styles.addPlus}>+</Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.viewBas}>

               <View style={styles.designBase}>
                  <TouchableOpacity onPress={() => { AccountZero('0') }}>
                     <Text style={styles.numberofAll}>0</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { AccountZero('.') }}>
                     {/* <Image source={full} style={styles.doting}/> */}
                     <Image source={dot} style={styles.doting} />
                  </TouchableOpacity>
               </View>

               <View style={styles.multi}>
                  <TouchableOpacity onPress={() => { console.log(AccountZero('<')); }}>
                     <Text style={styles.left}>&lt;</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.designBas}>
                  <TouchableOpacity onPress={() => { AccountZero('=') }}>
                     <Text style={styles.equal}>=</Text>
                  </TouchableOpacity>
               </View>
            </View>
            </View>
         </SafeAreaView>
      </View>
   )
}
export default Calculator