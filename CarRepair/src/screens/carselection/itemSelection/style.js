import { StyleSheet } from "react-native";
import { backgroundData, backgrounddata, text, white } from "../../../assets/constant";
const styles = StyleSheet.create({

  flatText: {
    fontSize: 28,
    fontWeight: 400,
    marginLeft:25,
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
  flatMainVie: {
    marginTop: 10,
    width:"100%",
    backgroundColor:backgroundData,
    justifyContent:"space-between",
    flexDirection: "row",
  },
  imageData:{
    marginRight:20
  }
})
export default styles