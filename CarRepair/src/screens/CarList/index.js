import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Styles from './style'
import { solidGrey } from   "../../assets/constant/index"

const CarList = ({ navigation }) => {

    const [phone, setPhone] = useState("")
    const [checkValidPhonenumber, setCheckValidPhonenumber] = useState(false)
    const [car, setCar] = useState("")
    const [checkValidCar, setCheckValidCar] = useState(false)

    const handleCheckCar = (carText) => {
        let reg = /^[a-zA-Z0-9]{2,20}$/;

        setCar(carText)
        if (reg.test(carText)) {
            setCheckValidCar(false);
        } else {
            setCheckValidCar(true);
        }
    }

    const handleCheckPhoneNumber = (phoneText) => {
        let re = /(?<!\d)\d{10}(?!\d)/;

        setPhone(phoneText)
        if (re.test(phoneText)) {
            setCheckValidPhonenumber(false);
        } else {
            setCheckValidPhonenumber(true);
        }
    }

    const checkTextInput = () => {
        if (!car.trim() || !phone.trim()) {
            alert('Please Enter All Details')
        }
        // else if (checkValidCar == true || checkValidPhonenumber == true) {
        //     alert('Please Enter Valid Details')
        // }
        else if (checkValidCar == true ) {
            alert('Please Enter Car Details between 2-20 Characters')
        }
        else if (checkValidPhonenumber == true) {
            alert('Please Enter Valid Phonenumber ')
        }
        else {
            // alert('Correct')
            setCar("")
            setPhone("")
            navigation.navigate("ThankYou")
        }
        
    };

    return (
        <View style={Styles.mainView}>

            <View style={Styles.sorryView}>
                <Text style={Styles.sorryText}>Sorry!</Text>
                <Text style={Styles.sorryDetailText}>We're sorry for the inconvinience caused. {'\n'}Please fill the name of the car and we will try to {'\n'}get in touch as soon as possible.</Text>
            </View>

            <View style={Styles.placeHolderView}>
                <TextInput placeholder='Name of the missing car' style={Styles.placeHolder} placeholderTextColor={solidGrey} value={car} autoCapitalize="none" onChangeText={(carText) => handleCheckCar(carText)} />
                
                <TextInput placeholder='Phone number' style={Styles.placeHolder} placeholderTextColor={solidGrey} value={phone} keyboardType="numeric" onChangeText={(phoneText) => handleCheckPhoneNumber(phoneText)} />
                {checkValidPhonenumber ? <Text style={Styles.invalidPhoneText}>Invalid Phone number Syntax</Text>
                    : <Text style={Styles.invalidPhoneText}> </Text>}
            </View>

            <TouchableOpacity style={Styles.submitView} onPress={checkTextInput}>
                <Text style={Styles.submitText}>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CarList