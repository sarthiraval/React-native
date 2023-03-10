import { StyleSheet } from "react-native";
import { black, darkBlue, green, lightBlue, red, textInput, white } from "../../assets/constants";

const styles = StyleSheet.create({
    SafeDesign: {
        flex: 1
    },
    AllContent: {
        flex: 1,
    },
    Texts:{
        fontSize:20,
        color:white,
        marginTop: "10%",
        marginLeft:30,
        fontWeight: "600",
    },
    textColor: {
        fontSize: 30,
        color: white,
        marginTop: "10%",
        fontWeight: "600",
        alignSelf: "center"
    },
    listView: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        justifyContent: "space-between"
    },
    listInput: {
        height: 40,
        borderRadius: 20,
        color: black,
        padding: 10,
        backgroundColor:"white",
        marginVertical: 30,
        width: "85%",
        borderColor: black,
        borderWidth: 0.5,
    },
    addView: {
        height: 40,
        width: "10%",
        marginRight: "10%",
        alignSelf: "center",
        backgroundColor: white,
        borderRadius: 25
    },
    addText: {
        fontSize: 40,
        color: green,
        alignSelf: "center",
        fontWeight: "600",
    },
    deleteView: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: black,
       
        borderRadius: 40
    },
    icon: {
        height: 20,
        width: 20
    },
    iconPlus: {
        height: 20,
        width: 20,
        alignSelf: "center"
    },
    iconInfo:{
        marginTop: 42,
        height: 20,
        marginRight:30,
        width: 20,
    },
    iconView: {
        height: 40,
        width: 40,
        marginVertical: 30,
        backgroundColor: darkBlue,
        borderRadius: 25,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    listItem: {
        backgroundColor: white,
        padding: 10,
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: "space-between",
        flexDirection: 'row',
        marginVertical: 10,
    },
    listText: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: "center",
        color: black,
        width: "65%",
        marginLeft: 15,
    },
    listEmpty: {
        color: white,
        alignSelf: "center",
        fontSize: 30,
        marginTop: "50%",
      
        fontWeight: "600"
    },
})

export default styles