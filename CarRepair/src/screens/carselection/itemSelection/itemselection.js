import React, { useState } from 'react';
import styles from './style';
import { Image, View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { carCheck } from '../../../assets/image';
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
    { id: 14, name: "Tesla" },
    { id: 15, name: "Hyundai" },
]
const ItemSelection = ({ input, setInput }) => {
       const inputField = ({ item }) => {
        if (input == "") {

            return (
                <TouchableOpacity style={styles.flatMainView}
                    key={words.id}
                    onPress={() => setInput(item.id)}>
                    <Text style={styles.flatText}>{item.name}</Text>
                    <Image source={carCheck} style={styles.imageData} />

                    {
                        input == item.id ?
                            <Image source={carCheck} style={styles.imageData} />
                            : null
                    }
                </TouchableOpacity>
            );

        }

        if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
                <View style={styles.dataView}>
                    <TouchableOpacity style={styles.flatMainView}
                        key={words.id}
                        onPress={() => setInput(item.id)}>
                        <Text style={styles.flatText}>{item.name}</Text>
                        {
                            input == item.id ?
                                <Image source={carCheck} style={styles.imageData} />
                                : null
                        }
                                            <Image source={carCheck} style={styles.imageData} />

                    </TouchableOpacity>
                </View>
            )
        }
    }
    return (
        <FlatList
            data={words}
            style={styles.flatListView}
            showsVerticalScrollIndicator={false}
            renderItem={inputField}
            ListEmptyComponent={<Text>No Data Found</Text>}
        />
    );
}


export default ItemSelection;
