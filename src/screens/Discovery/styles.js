import { StyleSheet } from "react-native";

export const DiscoveryStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  available: {
    color: "#FF647C",
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 220,
  },
  red: {
    width: 54,
    height: 54,
    backgroundColor: "#FF647C",
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  imgBg: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
  },
  mapArea: {
    width: 300,
    height: 300,
    borderRadius: 140,
    backgroundColor: "#FFCBD3",
    marginTop: 75,
    marginLeft: 105,
    opacity: 0.65,
    alignItems: "center",
    justifyContent: "center",
  },
});
