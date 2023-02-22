import { StyleSheet } from 'react-native'
import {  darkGrey, solidBlue, solidRed, solidWhite } from "../../assets/constant/index"

const Styles = StyleSheet.create({

    mainView: {
        backgroundColor: solidWhite,
        flex: 1,
    },

    sorryView: {
        top: 140,
        left: 17
    },

    sorryText: {
        fontSize: 24,
        fontWeight: "900",
        color: solidBlue, 
        bottom: 12
    },

    sorryDetailText: {
        fontSize: 16,
        fontWeight: "500",
        color: darkGrey,
    },

    placeHolderView: {
        top:190,
        alignItems:"center",
    },
    
    placeHolder: {
        height: 39,
        width: 343,
        padding:12,
        alignSelf:"center",
        borderRadius: 9.60591,
        borderWidth: 0.2,
        borderColor: solidWhite,
        backgroundColor: solidWhite,
        marginTop: 8,
        marginBottom: 8,
        paddingLeft: 10,
        shadowColor: "#9C9C9C",
        shadowOpacity: 0.6,
        shadowRadius: 1,
        shadowOffset: {
            height: 0.5,
        }
    },

    invalidPhoneText: {
        color: solidRed,
        marginLeft:120,
        fontWeight:600,
      
    },

    submitView: {
        height: 48,
        width: 261,
        backgroundColor: solidBlue,
        borderRadius: 48,
        display: "flex",
        padding: 15,
        alignSelf: "center",
        top:"64%",
        // bottom:"-64%"
    },
    
    submitText: {
        color: solidWhite,
        fontSize: 16,
        fontWeight: "500",
        alignItems: "center",
        textAlign: "center"
    }

})

export default Styles