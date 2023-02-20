import { StyleSheet } from "react-native";
import { white, black, circle, whiteGrey, skyBlue } from "../../assets/constants/index"
const styles = StyleSheet.create({
  backColor: {
    height:"100%",
    backgroundColor: white
  },
  crossIcon: {
    width: 20,
    height: 40,
    right:5,
    top:20,
    alignSelf: "flex-end",
  },
  mainView: {
    width: "90%",
    height: "87%",
    marginTop: 20,
    marginLeft: 20
  },
  
  filterText: {
    fontSize: 30,
    marginTop:10,
    fontWeight: 600,
  },
  manageView: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textCategory: {
    fontSize: 20,
    // color:"#808080",
    marginTop: 10,
    fontWeight: 600,
    marginBottom: 1
  },
  categoryIcon: {
    marginTop: 15,
    fontSize: 25,
    height: 18,
    width: 15,
  },
  categoryInput: {
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
  line: {
    marginTop: 8,
    color: whiteGrey,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: circle
  },
  locationIcon: {
    marginTop: 30,
    fontSize: 25,
    height: 18,
    width: 15,
  },
  locationText: {
    fontSize: 20,
    marginTop: 24,
    fontWeight: "bold",
  },
  locationInput: {
    height: 48,
    marginTop: -3,
    color: whiteGrey,
    fontSize: 17,
  },

  distanceBaseText: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: 600,
  },
  distanceBaseView: {
    flexDirection: "row",
  },
  distanceView: {
    flexDirection: "row",
    marginTop: 17
  },
  distanceButton: {
    marginVertical: 17
  },
  distanceText: {
    fontSize: 20,
    fontWeight: 400,
    marginLeft: 10,
    marginTop: 11,
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
  distanceLine: {
    marginTop: 8,
    color: whiteGrey,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: circle
  },
  salaryBaseText: {
    fontSize: 20,
    marginTop: 29,
    fontWeight: 600,
  },
  salaryButton: {
    marginVertical: 18
  },
  salaryBaseView: {
    flexDirection: "row",
    marginTop: 3
  },
  SalaryText: {
    fontSize: 20,
    fontWeight: 400,
    marginLeft: 10,
    marginTop:11
  },
  salaryView: {
    flexDirection: "row",
    marginTop: 17
  },
  buttonView: {
    borderColor: white,
    borderWidth: 1,
    shadowColor: black,
    shadowOpacity: 0.1,
    marginHorizontal:5,
    backgroundColor: white,
  },
  button: {
    backgroundColor: skyBlue,
    marginVertical:10,
    marginHorizontal:30,
    borderRadius: 32
  },
  buttonText: {
    color: white,
    fontSize: 20,
    marginVertical:15,
    alignSelf: "center",
    fontWeight: 600
  },
})

export default styles