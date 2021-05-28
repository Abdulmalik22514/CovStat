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

export const OnboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  slide: {
    width: 300,
    height: 300,
    marginTop: 250,
    marginBottom: 30,
    alignSelf: "center",
  },
  title: {
    color: "#171725",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  titleInfo: {
    color: "#999999",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.3,
  },
});
