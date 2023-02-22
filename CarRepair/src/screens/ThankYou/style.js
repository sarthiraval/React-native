import { StyleSheet } from 'react-native'
import {  solidBlack, solidBlue, solidWhite } from "../../assets/constant/index"

const Styles = StyleSheet.create({

    mainView: {
        backgroundColor: solidWhite,
        flex: 1,
    },

    mechanicImage: {
        height: 242,
        width: 269,
        top: 167,
        left: 53
    },

    thankyouText: {
        fontSize: 18,
        fontWeight: "700",
        color: solidBlack
    },

    soonText: {
        fontSize: 14,
        fontWeight: "400",
        marginTop: 12,
    },

    textView: {
        justifyContent:"center",
        alignItems:"center",
        marginTop: 170,
        marginBottom: "75%"
   },

    backView: {
        height: 48,
        width: 261,
        backgroundColor: solidBlue,
        borderRadius: 48,
        display: "flex",
        padding: 15,
        alignSelf: "center",
    },
    
    backText: {
        color: solidWhite,
        fontSize: 16,
        fontWeight: "500",
        alignItems: "center",
        textAlign: "center"
    },

})

export default Styles