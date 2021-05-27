import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LeftIcon } from "../assets/svg";

export const Header = ({ icon, title, noIcon, leftIcon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>{leftIcon ? <LeftIcon /> : <View />}</TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>{icon}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 5,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
});
