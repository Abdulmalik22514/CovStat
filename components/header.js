import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = ({ icon, title, noIcon }) => {
  return (
    <View style={styles.container}>
      {noIcon ? <View /> : icon}
      <Text style={styles.title}>{title}</Text>
      {icon}
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
