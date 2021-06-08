import { StyleSheet } from "react-native";

export const EducationStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  prevention: {
    marginTop: 40,
    flexDirection: "row",
    width: "100%",
    marginBottom: 40,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#E4E4E4",
  },
  separator: {
    width: 1,
    height: "100%",
    backgroundColor: "white",
  },
  seeMoreText: {
    color: "white",
    fontWeight: "300",
    fontSize: 16,
  },
  graphCont: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 100,
  },
  topic: {
    color: "#171725",
    fontSize: 28,
    fontWeight: "600",
    width: 308,
    height: 102,
    marginBottom: 20,
    lineHeight: 34,
  },
  details: {
    fontWeight: "300",
    color: "#999999",
    fontSize: 18,
    marginBottom: 27,
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  seeMoreCont: {
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#FF647C",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
});

export const SymptomStyles = StyleSheet.create({
  basicMeasures: {
    color: "#171725",
    fontWeight: "600",
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 22,
  },
  legendCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  legend: {
    fontSize: 19,
    color: "#171725",
    marginTop: 28,
    marginBottom: 17,
  },
  symptomCheck: {
    color: "#999999",
    fontSize: 17,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#E4E4E4",
  },
  overallSymptoms: {
    flexDirection: "row",
    // width: "70%",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  symptomBox: {
    flexDirection: "row",
    alignItems: "center",
    width: 114,
    paddingLeft: 4,
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 5,
  },
});

export const DiagnosisStyles = StyleSheet.create({
  basicMeasures: {
    color: "#171725",
    fontWeight: "600",
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 22,
  },
  opportunity: {
    fontWeight: "600",
    fontSize: 25,
    marginTop: 30,
    width: "100%",
  },
  symptomCheck: {
    color: "#999999",
    fontSize: 17,
    height: 110,
    width: 308,
    lineHeight: 22,
    letterSpacing: 0.3,
    fontWeight: "300",
  },
});
