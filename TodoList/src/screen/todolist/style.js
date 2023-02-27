import { StyleSheet } from "react-native"
import { black, darkBlue, green, lightBlue, red, white } from "../../assets/constansts"

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        backgroundColor: "#ffffe6"
    },
    textColor: {
        fontSize: 30,
        color: red,
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
        borderColor: red,
        borderWidth: 1,
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
    deleteView: {
        height: 40,
        width: 40,
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
        alignSelf: "center"
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
        backgroundColor: lightBlue,
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
        color: darkBlue,
        width: "65%",
        marginLeft: 15,
    },
    listEmpty: {
        color: red,
        alignSelf: "center",
        fontSize: 30,
        marginTop: "50%",
        fontWeight: "600"
    },
})
export default styles