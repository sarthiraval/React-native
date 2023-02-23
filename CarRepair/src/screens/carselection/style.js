import { StyleSheet } from "react-native";
import { darkBlue, darkblue, text, white } from "../../assets/constant";

const styles = StyleSheet.create({
  backColor: {
    backgroundColor: white,
  },
  mainView:{
    left:20,
  },
  carText: {
    color: darkblue,
    fontSize: 24,
    marginVertical: 25,
    fontWeight: 400,
    textAlign: "left"
  },
  searchView: {
    alignSelf: "center",
    backgroundColor: white,
    height: 60,
    width: 350,
    fontSize:16,
    flexDirection:"row",
    fontWeight:'400',
    borderColor:darkblue,
    borderWidth:2,
    marginTop:-20,
    borderRadius: 15
  },
  searchText: {
    fontSize:16,
    fontWeight:'400',
    borderRadius: 15
  },
  searchIcon:{
      width:30,
      marginHorizontal:10,
      height:30,  
      alignSelf:"center"
  },

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
    width:"50%",
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
    bottom:"5%",
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