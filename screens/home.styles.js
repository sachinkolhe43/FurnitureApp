import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontFamily: "bold",
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop:0,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 20,
    height: 20,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber:{
    fontFamily:'regular',
    fontWeight:"600",
    fontSize:10,
    color:COLORS.lightWhite,


  },
});

export default styles;
