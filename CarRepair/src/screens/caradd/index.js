import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { carCheck } from '../../assets/image'
import styles from './style'
const CarAdd = ({navigation}) => {
  return (
    <View style={styles.backColor}>
      <Image source={carCheck} style={styles.checkImage} />
      <View style={styles.textView}>
        <Text style={styles.carText}>Car added!</Text>
        <Text style={styles.carSubText}>Tighten your seat belt, you care is{'\n'}ready to run on the road</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ThankYou")}>
          <Text style={styles.buttonText}>Check services</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default CarAdd