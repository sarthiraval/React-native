import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import Styles from './style';
import { mechanic_1, mechanic_2 } from  '../../assets/image'
import { darkBlue, lightGrey } from "../../assets/constant/index"

const Onboarding = ({ navigation }) => {

    const { height, width } = Dimensions.get('window')
    const [CurrentIndex, setCurrentIndex] = useState(0)

    const DATA = [
        {
            id: 1,
            image: mechanic_1,
            title: 'Instant support',
        },
        {
            id: 2,
            image: mechanic_2,
            title: 'Road side assistance',
        },
    ]

    return (
        <View style={Styles.mainView}>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} pagingEnabled style={Styles.horizontalFlatList}
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndex((x / width).toFixed(0));
                }}

                data={DATA}
                keyExtractor={item => item.id}
                renderItem=
                {({ item }) =>

                    <View style={Styles.insideView}>
                        <Image source={item.image} style={Styles.imageStyle} />
                        <Text style={Styles.featuresText}>{item.title}</Text>
                    </View>
                }
            />

            <View style={Styles.imageSliderView}>
                {
                    DATA.map((item, index) => {
                        return (
                            <View style={{
                                width: 15,
                                height: 15,
                                borderRadius: 15,
                                backgroundColor: CurrentIndex == index ? darkBlue : lightGrey,
                                marginLeft: 5,
                                marginTop: 3
                            }}>
                            </View>
                        )
                    })
                }
            </View>

            <TouchableOpacity style={Styles.getStartedView} onPress={() => navigation.navigate("CarSelection")}>
                <Text style={Styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Onboarding;
