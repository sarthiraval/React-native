import { StyleSheet } from "react-native";
import {  darkblue, text, white } from "../../assets/constant";

const styles = StyleSheet.create({
    backColor: {
        backgroundColor: white,
        height:"100%",
      },
    checkImage :{
        width : 250,
        marginTop:"70%",
        height: 250,
        resizeMode:"contain",
        alignSelf:"center"
    },
    textView:{
        alignSelf:"center",
    },
    carText:{
        color : text,
        fontSize:18,
        marginTop:"12%",
        marginBottom:"3%",
        fontWeight:700,
        textAlign:"center"
    },
    carSubText:{
        color : text,
        fontSize:14,
        fontWeight:400,
        textAlign:"center"       
    },

      button: {
        backgroundColor: darkblue,
        marginTop:"30%",
        height:60,
        width:300,
        borderRadius: 32
      },
      buttonText: {
        color: white,
        fontSize: 16,
        marginVertical: 15,
        fontWeight:500,
        alignSelf: "center",
        marginTop:20,
        fontWeight: 600
      },

})

export default styles