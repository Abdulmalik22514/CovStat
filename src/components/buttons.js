import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export const Buttons = ({ title, onPress, locOff }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.reportButton, locOff && styles.locationOff]}
    >
      <Text style={[styles.status, locOff && styles.locOffText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  status: {
    color: "white",
    fontSize: 17,
    fontWeight: "300",
  },
  locOffText: {
    color: "#999999",
  },
  locationOff: {
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#151522",
  },

  reportButton: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#FF647C",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
