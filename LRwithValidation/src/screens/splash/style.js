import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    Content: {
        backgroundColor: "white",
        flex:1,
        marginBottom:110,
        justifyContent:"center"
    },
    Title: {
        fontStyle: "italic",
        fontSize: 25,
        marginTop:-70,
        color: "yellow",
        alignSelf: "center",
        shadowColor: "red",
        shadowOpacity: 1,
        marginHorizontal:10

    },
    ShadowImage: {
        height: 300,
        width: 300,
        alignSelf: "center",
        shadowColor: "red",
    }
})

export default styles