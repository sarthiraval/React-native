import { TouchableOpacity, FlatList, Text, View, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import { carCheck, carSearch, carRepair } from '../../assets/image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { backgroundData, text } from '../../assets/constant'

const CarSelection = ({ navigation }) => {

    const [input, setInput] = useState("")
    const [carLoading, setLoading] = useState(true)
    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 1000))
            setLoading((loading) => !loading)
        };
        loadData();
    }, []);
    const words = [
        { id: 1, name: "Kiwi" },
        { id: 2, name: "Honda" },
        { id: 3, name: "Mercedes" },
        { id: 4, name: "Audi" },
        { id: 5, name: "Jaguar" },
        { id: 6, name: "Tesla" },
        { id: 7, name: "Swift" },
        { id: 8, name: "Suzuki" },
        { id: 9, name: "Bentley" },
        { id: 10, name: "Rolls-Royce" },
        { id: 11, name: "Toyota" },
        { id: 12, name: "Volvo" },
        { id: 13, name: "Ford" },
        { id: 14, name: "MotoRolla" },
        { id: 15, name: "Hyundai" },
    ]
    const [seletedvalue, setselectValue] = useState(input)
    const inputField = ({ item }) => {
        if (seletedvalue == "") {
            return (
                <View style={styles.flatMainView}>
                    <TouchableOpacity
                        style={{
                            marginTop: 10,
                            width: "100%",
                            height: 50,
                            backgroundColor: seletedvalue === item.id ? backgroundData : null,
                            justifyContent: "space-between",
                            flexDirection: "row",
                        }}
                        key={words.id}
                        onPress={() => setselectValue(item.id)}>
                        <Text style={styles.flatText} >{item.name}</Text>
                        {seletedvalue == item.id ?
                            <Image source={carCheck} style={styles.imageData} /> : null
                        }
                    </TouchableOpacity>
                </View>
            );
        }
        if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
                <View style={styles.flatMainView}>
                    <TouchableOpacity
                        style={{
                            marginTop: 10,
                            width: "100%",
                            height: 50,
                            backgroundColor: seletedvalue == item.id ? backgroundData : null,
                            justifyContent: "space-between",
                            flexDirection: "row",
                        }}
                        onPress={() => setselectValue(item.id)}>
                        <Text style={styles.flatText} >{item.name}</Text>
                        {seletedvalue == item.id ?
                            <Image source={carCheck} style={styles.imageData} /> : null
                        }
                    </TouchableOpacity>
                </View>
            )
        }
    }
    const CheckData = () => {
        if (seletedvalue == "") {
            navigation.navigate("CarList")
        }
        else if (seletedvalue != "") {
            {
                // if (carLoading) {
                //     return (
                //         <TouchableOpacity onPress={() => navigation.navigate("CarLoading")}>
                //             <View style={styles.backColors}>
                //                 <Image source={carRepair} style={styles.carImage} />
                //             </View>
                //         </TouchableOpacity>
                //     )
                // }
                // else{
                //     
                // }
                navigation.navigate("CarLoading")
            }
        }
    }

    return (
        <SafeAreaView style={styles.backColor}>
            <View style={styles.mainView}>
                <Text style={styles.carText}>What's your car?</Text>
            </View>
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
            <FlatList
                data={words}
                style={styles.flatListView}
                showsVerticalScrollIndicator={false}
                renderItem={inputField}
                ListEmptyComponent={<Text>No Data Found</Text>} />
            <TouchableOpacity
                onPress={CheckData}
                style={styles.noneButton}>
                {seletedvalue ?
                    <Text style={styles.buttonText}>Done</Text>
                    : <Text style={styles.buttonText}>None</Text>}
                <Text style={styles.buttonText}></Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default CarSelection