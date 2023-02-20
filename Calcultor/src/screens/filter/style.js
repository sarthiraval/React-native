import { StyleSheet } from "react-native";
import { white, black, circle, whiteGrey, skyBlue } from "../../assets/constants/index"
const styles = StyleSheet.create({
  backColor: {
    backgroundColor: white
  },
  crossIcon: {
    width: 20,
    height: "9%",
    right: 5,
    marginTop: 15,
    alignSelf: "flex-end",
  },
  mainView: {
    width: "90%",
    height: "87%",
    marginTop: 15,
    marginLeft: 20
  },
  filterText: {
    fontSize: 30,
    marginTop:-10,
    color:black,
    fontWeight: 600,
  },
  manageView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemText: {
    fontSize: 20,
    color:black,
    marginTop: 13,
    fontWeight: 600,
    marginBottom: 1
  },
  icons: {
    marginTop: 18,
    fontSize: 25,
    height: 18,
    width: 15,
  },
  itemTextInput: {
    marginTop: -1,
    height: 48,
    color: black,
    fontSize: 17,
    // textDecorationLine: "underline",
    // borderBottomColor: whiteGrey,
    // textDecorationStyle: "solid",
    // textDecorationColor: whiteGrey,
    // borderBottomColor: "#d9d9d9",
    // borderBottomWidth:1,
    // borderColor: "#d9d9d9"
  },
  line: {
    marginTop: 10,
    color: whiteGrey,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: circle
  },
  dsMainText: {
    fontSize: 20,
    color:black,
    marginTop: 38,
    fontWeight: 600,
  },
  dsMainView: {
    flexDirection: "row",
    marginTop:5
  },
  dsBaseText: {
    fontSize: 20,
    color:black,
    fontWeight: 400,
    marginLeft: 10,
    marginTop: 11,
  },
  space:{
   marginBottom:15
  },
  circle: {
    marginTop: 15,
    height: 20,
    width: 20,
    borderColor: circle,
    borderWidth: 1,
    borderRadius: 10
  },
  circleBorder: {
    marginTop: 15,
    height: 20,
    width: 20,
    borderColor: skyBlue,
    borderWidth: 1,
    borderRadius: 10
  },
  circleSmall: {
    height: 10,
    width: 10,
    alignSelf: "center",
    marginVertical: 4,
    backgroundColor: skyBlue,
    borderRadius: 10
  },
  buttonView: {
    borderColor: white,
    borderWidth: 1,
    shadowColor: black,
    bottom: 10,
    shadowOpacity: 0.1,
    marginHorizontal: 5,
    backgroundColor: white,
  },
  button: {
    backgroundColor: skyBlue,
    marginVertical: 10,
    marginHorizontal: 30,
    borderRadius: 32
  },
  buttonText: {
    color: white,
    fontSize: 20,
    marginVertical: 15,
    alignSelf: "center",
    fontWeight: 600
  },
})
export default styles