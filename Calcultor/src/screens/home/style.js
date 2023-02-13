import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    SafeDesign: {
        flex: 1
    },
    AllContent: {
        flex: 1,
        backgroundColor: "#d9d9d9"
    },
   mainBase:{
    alignSelf:"center"
   },
    main: {
        marginTop: 10,
        width: "90%",
        backgroundColor: "white",
        display: "flex",
        marginBottom: 20,
        height: "30%",
        borderRadius: 10,
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 3,
    },
    mainText: {
        fontSize: 50,
        textAlign: "right",
        marginRight: 10
    },

    viewBase: {
        flexDirection: "row",
        marginLeft: 10
    },
    viewBas: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 10
    },
    designBase: {
        backgroundColor: "white",
        height: 80,
        marginRight: 10,
        width: 80,
        borderRadius: 80 / 2
    },
    designBas: {
        backgroundColor: "#ff4000",
        height: 80,
        marginRight: 10,
        width: 80,
        borderRadius: 80 / 2
    },
    multi: {
        backgroundColor: "#ffaa00",
        height: 80,
        marginRight: 10,
        width: 80,
        borderRadius: 80 / 2
    },

    designKnow: {
        backgroundColor: "#ffaa00",
        height: 80,
        marginRight: 10,
        width: 80,
        borderRadius: 80 / 2
    },
    numberofAll: {
        color: "black",
        fontSize: 50,
        paddingTop: 7,
        textAlign: "center"
    },
    numberofAC: {
        color: "white",
        fontSize: 40,
        paddingTop: 12,
        paddingLeft: 12,
    },
    numberofData: {
        color: "white",
        fontSize: 40,
        paddingTop: 11,
        paddingLeft: 22,
    },
    numberof: {
        color: "white",
        fontSize: 50,
        top: 9,
        textAlign: "center"
    },
    doting: {
      width:80,
      height:50,
      marginVertical:15
    },

    signOf: {
        color: "white",
        fontSize: 55,
        textAlign: "center"

    },
    equal: {
        color: "white",
        fontSize: 60,
        textAlign: "center"

    },
    multiple: {
        color: "white",
        fontSize: 90,
        textAlign: "center"
    },
    division: {
        color: "white",
        fontSize: 60,
        alignSelf: "center"
    },
    addPlus: {
        color: "white",
        fontSize: 60,
        alignSelf: 'center'
    },
    arrow: {
        height: 50,
        width: 50,
        marginHorizontal: 12,
        marginVertical: 13
    },
    left:{
        color: "white",
        fontSize: 90,
        marginTop:-20,
        textAlign: "center"
    }


})

export default styles