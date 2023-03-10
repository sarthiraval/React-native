import { StyleSheet } from "react-native";
import { black, darkBlue, green, lightBlue, red, textInput, white } from "../../assets/constants";

const styles = StyleSheet.create({
    SafeDesign: {
        flex: 1
    },
    AllContent: {
height:"100%"    },
    Texts:{
        fontSize:20,
        color:white,
        marginVertical:20,
        marginLeft:50,
        fontWeight: "600",
    },
    TextLogin: {
        color: "white",
        alignSelf: "center",
        fontSize: 12,
        fontWeight: "bold"
    },
    ViewMange: {
        alignSelf: "center",
        marginTop: 20,
        width: 100,
        backgroundColor: "black",
        borderRadius: 50,
        justifyContent: "center",
        height: 40
    },
    TextStatues:{
        fontSize:20,
        color:"black",
        marginVertical:20,
        marginLeft:5,
        fontWeight: "600",
    }

 })
 export default styles;