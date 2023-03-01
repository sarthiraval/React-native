import { StyleSheet } from "react-native";
import { black, darkBlue, green, lightBlue, red, textInput } from "../../assets/constants";

const styles = StyleSheet.create({
    SafeDesign: {
        flex: 1
    },
    AllContent: {
height:"100%"    },
    Texts:{
        fontSize:20,
        color:black,
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
        backgroundColor: "red",
        borderRadius: 50,
        justifyContent: "center",
        height: 40
    },

 })
 export default styles;