import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Styles from './style';
import { mechanic_3 } from '../../assets/image/index'

const ThankYou = ({ navigation }) => {
    return (
        <View style={Styles.mainView}>
            <Image style={Styles.mechanicImage} source={mechanic_3} />

            <View style={Styles.textView}>
                <Text style={Styles.thankyouText}>Thank you!</Text>
                <Text style={Styles.soonText}>we will get in touch soon.</Text>
            </View>

            <TouchableOpacity style={Styles.backView} onPress={() => navigation.navigate("Onboarding")}>
                <Text style={Styles.backText}>Back to home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ThankYou;
