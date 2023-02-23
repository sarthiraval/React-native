import { StyleSheet } from "react-native";
import { backgroundData, backgrounddata, darkBlue, text, white } from "../../../assets/constant";
const styles = StyleSheet.create({

  flatText: {
    fontSize: 28,
    fontWeight: 400,
    marginLeft:25,
    alignSelf:"center",
    color:text
  },
  flatListView: {
    marginTop: 50,
    height:"55%",
    // backgroundColor:"red",
    marginBottom: 81,
  },
  dataView :{
    marginTop: 10,
    // backgroundColor:"red",
  },
  flatMainView: {
    marginTop: 10,
    width:"100%",
    backgroundColor:white,
    justifyContent:"space-between",
    flexDirection: "row",
  },
  imageData:{
    marginRight:20,
    alignSelf:"center",
  },
  noneButton: {
    alignSelf: "center",
    backgroundColor: darkBlue,
    height: 60,
    width: 300,
    bottom:"60%",
    borderRadius: 32
  },
  buttonText: {
    color: white,
    fontSize: 16,
    marginVertical: 15,
    fontWeight: 500,
    alignSelf: "center",
    marginTop: 20,
    fontWeight: 600
  },
 
})
export default styles