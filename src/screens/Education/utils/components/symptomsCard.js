import React from "react";
import { StyleSheet, View, Text } from "react-native";

// export const OverallSymptoms = [
//   { title: "Common" },
//   { title: "Sometimes" },
//   { title: "Rare" },
// ];

export const BasicSymptoms = [
  { title: "Shortness of breath" },
  { title: "Fever" },
  { title: "Fatigue, weakness" },
  { title: "Shortness of breath" },
  { title: "Aches" },
  { title: "Chills" },
  { title: "Headache" },
  { title: "Aches" },
  { title: "Sore throat" },
  { title: "Sneezing" },
  { title: "Stuffy, runny nose" },
];

export const Legend = [
  { title: "Common" },
  { title: "Sometimes" },
  { title: "Rare" },
];

export const OverallSymptoms = ({ title, icon }) => {
  return (
    <View style={styles.cont}>
      {icon}
      <Text style={styles.cold}>{title}</Text>
    </View>
  );
};

export const SymptomCard = ({ title }) => {
  return (
    <View>
      <View style={styles.symtomCont}>
        <View style={styles.circlesCont}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
        <Text style={{ fontSize: 17, color: "#999999" }}>{title}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export const LegendCard = ({ title }) => {
  return (
    <View style={styles.legendCont}>
      <View style={styles.legend}>
        <View style={styles.circle} />
        <Text style={styles.legendTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  legendTitle: {
    fontSize: 17,
    color: "#999999",
    marginLeft: 7,
  },
  cold: {
    color: "#151522",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 10,
  },
  cont: {
    flexDirection: "row",
    width: 100,
    alignItems: "center",
  },
  legend: {
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 40,
  },
  circlesCont: {
    flexDirection: "row",
    width: 114,
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
  },
  symtomCont: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  circle: {
    width: 18,
    height: 18,
    borderColor: "#999999",
    borderWidth: 1,
    borderRadius: 9,
  },
  divider: {
    height: 1,
    backgroundColor: "#E4E4E4",
  },
});
