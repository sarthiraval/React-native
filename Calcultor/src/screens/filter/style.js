import { StyleSheet } from "react-native";
import { white, black,circle, whiteGrey, skyBlue } from "../../assets/constants/index"
const styles = StyleSheet.create({
  backColor: {
    backgroundColor: white
  },
  crossSign: {
    width: 20,
    height: 40,
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 1
  },
  manageView: {
    width: 350,
    marginTop: 7,
    marginLeft: 20
  },
  nameFilter: {
    fontSize: 30,
    fontWeight: 600,
    
  },
  mainView: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mainName: {
    fontSize: 20,
    // color:"#808080",
    marginTop: 10,
    fontWeight: 600,
    marginBottom: 1
  },
  arrow: {
    marginTop: 15,
    fontSize: 25,
    height: 18,
    width: 15,
  },
  baseValue: {
    marginTop: -5,
    height: 48,
    color: whiteGrey,
    fontSize: 17,
    // textDecorationLine: "underline",
    // borderBottomColor: whiteGrey,
    // textDecorationStyle: "solid",
    // textDecorationColor: whiteGrey,
    // borderBottomColor: "#d9d9d9",
    // borderBottomWidth:1,
    // borderColor: "#d9d9d9"
  },
  mainLine: {
    marginTop: 8,
    color: whiteGrey,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: circle
  },
  arrowDirection: {
    marginTop: 30,
    fontSize: 25,
    height: 18,
    width: 15,
  },
  mainLocation: {
    fontSize: 20,
    marginTop: 24,
    fontWeight: "bold",
  },
  baseLocation: {
    height: 48,
    marginTop:-3,
    color: whiteGrey,
    fontSize: 17,
  },
  viewLine: {
    color: whiteGrey,
    fontSize: 15,
    marginTop: 8,
    borderBottomWidth: 1,
    borderColor: circle
  },
  nameDistance: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: 600,
  },
  direction: {
    flexDirection: "row",
  },
  checkDirection: {
    flexDirection: "row",
    marginTop: 17
  },
  checkBase: {
    marginVertical: 17
  },
  checkValue: {
    fontSize: 20,
    fontWeight: 400,
    marginLeft: 10,
  },
  circle: {
    marginTop: 2,
    height: 20,
    width: 20,
    borderColor: circle,
    borderWidth: 1,
    borderRadius: 20 / 2
  },
  circleCheck: {
    marginTop: 2,
    height: 20,
    width: 20,
    borderColor: skyBlue,
    borderWidth: 1,
    borderRadius: 20 / 2
  },
  circleSmall: {
    height: 10,
    width: 10,
    alignSelf: "center",
    marginVertical: 4,
    backgroundColor: skyBlue,
    borderRadius: 20 / 2
  },
  baseLine: {
    marginTop: 8,
    color: whiteGrey,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: circle
  },
  nameSalary: {
    fontSize: 20,
    marginTop: 29,
    fontWeight: 600,
  },
  salaryBase: {
    marginVertical: 18
  },
  salaryDirection: {
    flexDirection: "row",
    marginTop: 17
  },
  backBase: {
    marginTop: -11,
    marginHorizontal: 5,
    borderColor:white,
    borderWidth:1,
    height:98,
    shadowColor:black,
    shadowOpacity:0.1,
    backgroundColor: white
  },
  buttonBase: {
    backgroundColor: skyBlue,
    height: 65,
    alignSelf: "center",
    width: 280,
    marginVertical: 15,
    borderRadius: 65 / 2
  },
  textBase: {
    marginVertical: 17,
    color: white,
    fontSize: 20,
    alignSelf: "center",
    fontWeight: 600
  }, 
 line: {
    color: whiteGrey,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: circle
  },

})

export default styles