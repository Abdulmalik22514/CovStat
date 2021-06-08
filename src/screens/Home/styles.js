import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  arrows: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    width: 56,
    height: 32,
    borderRadius: 8,
    borderColor: "#E4E4E4",
    borderWidth: 1,
  },
  liveBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  affectedRecovered: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 35,
  },
  ratio: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#171725",
  },
  liveReports: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    width: "100%",
    paddingVertical: 20,
    marginTop: 30,
    paddingHorizontal: 15,
  },
  recoveryRatio: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    marginBottom: 40,
  },
  bottomCont: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  graphCont: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
});
