import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    AllContent: {
        flex: 1,
        justifyContent:"center",
        backgroundColor: "white",
       
    },
    AllData: {
        flexDirection: "row",
        marginTop:180,
        marginHorizontal: 85
    },
    AllConten: {
        flexDirection: "row",
        marginTop: 10,

        marginHorizontal: 85
    },
    imageGround: {
        height: 300,
        width: 300,
        alignSelf: "center",
        marginBottom: 10
    },

    Content: {
        flex: 1,
        justifyContent:"center"
    },
    Title: {
        fontSize: 25,
        marginTop: 20,
        color: "black",
        alignSelf: "center",
        marginHorizontal: 10,
        marginBottom: 20,
    },

    add: {
        fontSize: 150,
        color: "black",
    },
    min: {
        fontSize: 150,
        color: "black",
        marginTop: -80,
        left: 10,
    },
    div: {
        fontSize: 150,
        color: "black",
        left: 40,
    },
    mul: {
        fontSize: 150,
        color: "black",
        left: 80,
        marginTop: -80,
    },
    ShadowImage: {
        height: 150,
        width: 300,
        alignSelf: "center",
        borderRadius: 200 / 2
    },

})

export default styles