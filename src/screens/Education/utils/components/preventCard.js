import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Prevent = [
  { title: "Prevention" },
  { title: "Symptoms" },
  { title: "Diagnosis" },
];

export const Tabs = ({ title, onPress, isActive, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.overall}>
        <Text style={[styles.title, isActive && styles.activeTitle, style]}>
          {title}
        </Text>
      </View>

      {isActive ? (
        <View style={styles.backGreen}>
          <View style={styles.activeGreen} />
        </View>
      ) : (
        <View style={styles.backGreen} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "#E4E4E4",
  },
  backGreen: {
    width: "100%",
    height: 5,
    backgroundColor: "#96FFE1",
    marginTop: 12,
  },
  activeTitle: {
    color: "#151522",
  },
  title: {
    color: "#999999",
    fontSize: 16,
    fontWeight: "400",
  },
  activeGreen: {
    width: 110,
    height: 5,
    backgroundColor: "#00C48C",
  },
  overall: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
