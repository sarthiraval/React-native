import { Image, View } from 'react-native'
import React, { useEffect } from 'react'
import { carRepair } from '../../assets/image'
import styles from './style'


const CarLoading = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("CarAdd")
    }, 2000);
  });
  return (
    <View style={styles.backColor}>
      <Image source={carRepair} style={styles.carImage} />
    </View>
  )
}
export default CarLoading