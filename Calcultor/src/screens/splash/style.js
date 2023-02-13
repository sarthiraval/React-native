import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    AllContent: {
        flex: 1,
        backgroundColor:"#d9d9d9"
    },
    imageGround:{
        height:250,
        width:300,
        alignSelf:"center",
        marginBottom:10
    },

    Content: {
     
        flex: 1,
        justifyContent: "center"
    },
    Title: {
        fontStyle: "italic",
        fontSize: 25,
        marginTop: 20,
        color: "black",
        alignSelf: "center",
        shadowColor: "red",
        shadowOpacity: 3,
        marginHorizontal: 10,
        marginBottom: 20,

    },
    ShadowImage: {
        height: 150,
        width: 300,
        alignSelf: "center",
        shadowColor: "red",
        borderRadius: 200 / 2
    }
})

export default styles