import { StyleSheet } from 'react-native'
import { solidBlack, solidBlue, darkBlue, lightGrey, solidWhite } from "../../assets/constant/index"

const Styles = StyleSheet.create({

    mainView: {
        backgroundColor: solidWhite,
        flex: 1,
    },

    horizontalFlatList: {
        top:126
    },

    insideView: {
        padding: 45,
        alignItems: "center",
        
    },

    imageStyle: {
        height:300,
        width:300,
    },

    featuresText: {
        fontSize:32,
        color: solidBlue
    },

    imageSliderView: {
        flexDirection:"row", 
        marginTop:"100%",
        bottom:"67%",
        alignSelf:"center"
    },

    getStartedView: {
        height: 48,
        width: 261,
        backgroundColor: solidBlue,
        borderRadius: 48,
        display: "flex",
        padding: 15,
        alignSelf: "center",
        bottom:"5%"
    },
    
    getStartedText: {
        color: solidWhite,
        fontSize: 16,
        fontWeight: "500",
        alignItems: "center",
        textAlign: "center"
    }

})

export default Styles