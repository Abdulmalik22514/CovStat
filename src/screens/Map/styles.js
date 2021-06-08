import { StyleSheet } from "react-native";

export const MapStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  ratio: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#171725",
  },
  countryList: {
    color: "#999999",
    fontSize: 13,
    marginBottom: 20,
    marginTop: 7,
  },
  liveBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restWorld: {
    color: "#171725",
    fontSize: 19,
    fontWeight: "600",
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
  cont: {
    borderRadius: 6,
    width: 28,
    height: 52,
    margin: 10,
    backgroundColor: "white",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
  mapBackground: {
    marginTop: 20,
    width: "100%",
    padding: 1,
    height: 325,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
  },
  affectedCont: {
    flexDirection: "row",
    width: 240,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  topic: {
    color: "#171725",
    fontWeight: "600",
    fontSize: 17,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
  graphCont: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  bottomCont: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export const ChinaStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  enableNow: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  notify: {
    fontWeight: "300",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
  },
  enable: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 15,
    marginTop: 8,
    textAlign: "center",
  },
  modalBox: {
    position: "absolute",
    backgroundColor: "white",
    height: 150,
    width: 290,
    borderRadius: 10,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  months: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 18,
    marginBottom: 35,
  },
  moreAffected1: {
    flexDirection: "row",
    alignItems: "center",
    width: 40,
    height: 12,
    justifyContent: "space-between",
    marginTop: 72,
    marginLeft: 130,
  },
  moreAffected: {
    flexDirection: "row",
    alignItems: "center",
    width: 46,
    height: 12,
    justifyContent: "space-between",
    marginTop: 15,
    marginLeft: 120,
  },
  more: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FF647C",
    marginRight: 5,
  },
  more1: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00C48C",
    marginRight: 5,
  },
  stacked: {
    width: "100%",
    height: 180,
    marginTop: 40,
  },
  affectedCont: {
    flexDirection: "row",
    width: 130,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 15,
  },
  topic: {
    color: "#171725",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 15,
    marginTop: 15,
  },
  countryName: {
    color: "#151522",
    fontSize: 21,
  },
  titleFlag: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flag: {
    width: 48,
    height: 48,
    marginRight: 20,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  contBox: {
    marginTop: 30,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E5E5",
  },
});