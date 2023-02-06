import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    LinearGradient: {
        flex: 1,
    },
    SafeDesign: {
        flex: 1,
        justifyContent: "center",
    },
    AllContent: {
        flex: 1,

    },
    Direction: { flexDirection: "row", marginTop: -80 },
    SignText: {
        color: "white",
        marginLeft: 50,
        shadowColor: "black",
        shadowOpacity: 0.6,
        marginHorizontal: 10,
        marginBottom: 5,
        fontSize: 40,

    },
    Designs: {
        marginTop: -30
    },
    UpText: {
        color: "white",
        marginLeft: -1,
        fontSize: 40,
        shadowColor: "black",
        shadowOpacity: 0.6,
        marginHorizontal: 10,
        marginBottom: 5,
    },
    TextField: {
        marginTop: 100,
        color: "#005c99",
        marginLeft: 50,
        fontSize: 12,
        shadowColor: "white",
        shadowOpacity: 0.6,
        marginHorizontal: 10,
        marginBottom: 5,
    },
    PassField: {
        marginTop: 5,
        color: "#005c99",
        marginLeft: 50,
        fontSize: 12,
        shadowColor: "white",
        shadowOpacity: 0.6,
        marginHorizontal: 10,
        marginBottom: 5,
    },
    InputBase: {
        marginTop: 5,
        marginBottom: 20,
        color: "black",
        fontSize: 15,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        marginRight: 40,
        marginLeft: 50
    },
    ForgetPass: {
        color: "black",
        alignSelf: "flex-end",
        fontSize: 13,
        marginRight: 45
    },

    ViewMange: {
        alignSelf: "center",
        marginTop: 50,
        width: 100,
        backgroundColor: "#005c99",
        borderRadius: 50,
        justifyContent: "center",
        height: 40
    },
    TextLogin: {
        color: "white",
        alignSelf: "center",
        fontSize: 12,
        fontWeight: "bold"
    },
    ViewDesign: {
        height: 30,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    },
    TextFirst: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
        shadowColor: "white",
        shadowOpacity: 0.6,
    },
    TextSecond: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        shadowColor: "white",
        shadowOpacity: 0.6,
        marginHorizontal: 5
    },
    wrapperIcon: {
        position: 'absolute',
        right: 0,
        padding: 10,
    },
    icon: {
        marginTop: -21,
        width: 20,
        marginRight: 30,
        height: 15,
    },
    wrongEmail: {
        color: "red",
        fontSize: 13,
        marginTop: -15,
        marginBottom: 10,
        marginLeft: 50
    },

})


export default styles