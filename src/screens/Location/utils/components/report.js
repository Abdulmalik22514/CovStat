import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Tick } from "../../../../../assets/svg";
// import { styles } from "../../locationOff";

export const SyptomsReport = [
  { title: "Shortness of breath" },
  { title: "Fever" },
  { title: "Fatigue, weakness" },
  { title: "Cough, chest discomfort" },
  { title: "Aches" },
  { title: "Chills" },
  { title: "Headache" },
  { title: "Sore throat" },
  { title: "Sneezing" },
  { title: "Stuffy, runny nose" },
];

export const ReportedSymptoms = ({ title, isChecked, style, onPress }) => {
  return (
    <View>
      <View style={styles.symtomCont}>
        <TouchableOpacity
          style={[styles.checkBox, isChecked && styles.checkedColor, style]}
          onPress={onPress}
        >
          {isChecked ? <Tick /> : null}
        </TouchableOpacity>
        <Text style={styles.checkedItem}>{title}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  checkedColor: {
    backgroundColor: "#FF647C",
  },
  checkedItem: {
    fontSize: 18,
    color: "#999999",
    marginLeft: 20,
    fontWeight: "400",
  },
  checkBox: {
    width: 26,
    height: 26,
    borderColor: "#E4E4E4",
    borderRadius: 7,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#E4E4E4",
  },
  symtomCont: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
});
