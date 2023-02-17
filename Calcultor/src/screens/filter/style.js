import { StyleSheet } from "react-native";
import { white, black, circle, whiteGrey, skyBlue } from "../../assets/constants/index"
const styles = StyleSheet.create({
  backColor: {
    backgroundColor: white
  },
  crossIcon: {
    width: 20,
    height: 40,
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 1
  },
  mainView: {
    width: 350,
    marginTop: 7,
    marginLeft: 20
  },
  filterText: {
    fontSize: 30,
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
  },
  circle: {
    marginTop: 2,
    height: 20,
    width: 20,
    borderColor: circle,
    borderWidth: 1,
    borderRadius: 20 / 2
  },
  circleBorder: {
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
  },
  salaryView: {
    flexDirection: "row",
    marginTop: 17
  },
  buttonView: {
    marginTop: -11,
    marginHorizontal: 5,
    borderColor: white,
    borderWidth: 1,
    height: 98,
    shadowColor: black,
    shadowOpacity: 0.1,
    backgroundColor: white
  },
  button: {
    backgroundColor: skyBlue,
    height: 65,
    alignSelf: "center",
    width: 280,
    marginVertical: 15,
    borderRadius: 65 / 2
  },
  buttonText: {
    marginVertical: 17,
    color: white,
    fontSize: 20,
    alignSelf: "center",
    fontWeight: 600
  },


})

export default styles