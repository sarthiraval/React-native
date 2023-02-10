import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    SafeDesign: {
        flex: 1
    },
    AllContent: {
        flex: 1,
        backgroundColor: "black"
    },
    viewBase:{
        flexDirection:"row",
    }, 
    viewBas:{
        flexDirection:"row",
        marginTop:10
    },
    designBase: {
        backgroundColor: "white",
        height: 50,
        marginRight:10,
        width: 50,
        borderRadius: 20 / 2
    },
    numberofAll: {
        color: "black",
        fontSize: 30,
        paddingTop:5,
        paddingLeft:15,
        shadowColor: "red",
        shadowOpacity: 0.5
    }


})

export default styles