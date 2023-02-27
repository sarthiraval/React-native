import { StyleSheet } from "react-native"
import {  darkBlue, darkGrey, green, lightBlue, lightWhite, red, textInput, white } from "../../assets/constansts"

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        backgroundColor: white
    },
    textColor: {
        fontSize: 30,
        color: red,
        marginBottom:"2%",
        marginTop: "10%",
        fontWeight: "600",
        alignSelf: "center"
    },
    listView:{
        flexDirection:"row",
        width:"90%",
        alignSelf:"center",
        justifyContent:"space-between"
    },
    listInput: {
        borderColor: darkGrey,
        borderWidth: 1,
        height: 40,
        borderRadius: 20,
        color: darkGrey,
        padding: 10,
        marginVertical:30,
        width: "85%"
    },
    addView: {
        height: 40,
        width: "10%",
        marginRight: "10%",
        alignSelf: "center",
        backgroundColor: lightBlue,
        borderRadius: 25
    },
    addText: {
        fontSize: 40,
        color: green,
        alignSelf: "center",
        fontWeight: "600",
    },
    checkView: {
        height: 40,
        width: 40,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: darkBlue,
        borderRadius: 40
    },
    deleteView: {
        height: 40,
        width: 40,
        marginRight: 150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: darkBlue,
        borderRadius: 40
    },
    icon: {
        height: 20,
        width: 20
    },
    iconPlus: {
        height: 20,
        width: 20,
        alignSelf:"center"
    },
    iconView: {
        height: 40,
        width: 40,
        marginVertical:30,
        backgroundColor: darkBlue,
        borderRadius: 25,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    listItem: {
        width: "80%",
        backgroundColor: lightBlue,
        borderRadius: 50,
        padding:10,
        alignSelf:'center',
        flexDirection: 'row',
        marginVertical: 10,
    },
    listEmpty:{
        color:red,
        alignSelf:"center",
        fontSize: 30,
        marginTop:"50%",
        fontWeight: "600"
    },
})

export default styles