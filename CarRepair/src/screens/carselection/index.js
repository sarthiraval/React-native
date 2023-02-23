import { TouchableOpacity, Text, View, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { carSearch } from '../../assets/image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { text } from '../../assets/constant'
import ItemSelection from './itemSelection/itemselection'

const CarSelection = ({ navigation }) => {

  const [input, setInput] = useState("")

  return (
    <View style={styles.backColor}>
      <SafeAreaView style={styles.mainView}>
        <Text style={styles.carText}>What's your car?</Text>
      </SafeAreaView>
      <View style={styles.searchView}>
        <Image style={styles.searchIcon} source={carSearch} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={text}
          style={styles.searchText}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
      </View>
      <ItemSelection style={styles.ItemView} input={input} setInput={setInput} />
     
    
   
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("CarLoading")}
        style={styles.doneButtons}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity
                onPress={CheckData}
                style={styles.noneButton}>
                <Text style={styles.buttonText}>None</Text>
            </TouchableOpacity> */}
    </View>

  )
}
export default CarSelection